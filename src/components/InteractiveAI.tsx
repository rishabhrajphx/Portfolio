import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useDarkMode } from '../context/DarkModeContext';

// Add these type declarations at the top of the file
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

const InteractiveAI: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const current = mountRef.current;
    if (!current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      current.clientWidth / current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(current.clientWidth, current.clientHeight);
    current.appendChild(renderer.domElement);

    // Geometry and Material
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: darkMode ? 0xffffff : 0x000000,
      metalness: 0.5,
      roughness: 0.1,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (current.clientWidth && current.clientHeight) {
        renderer.setSize(current.clientWidth, current.clientHeight);
        camera.aspect = current.clientWidth / current.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // Clean Up
    return () => {
      window.removeEventListener('resize', handleResize);
      current.removeChild(renderer.domElement);
    };
  }, [darkMode]);

  // Handle Click to Fetch ChatGPT Response
  const handleClick = async () => {
    setIsLoading(true);
    try {
      // Start Voice Recognition
      const recognition = new (window.SpeechRecognition || (window as any).webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = async (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setMessages((prev) => [...prev, `You: ${transcript}`]);

        // Fetch ChatGPT Response
        const response = await fetch('/api/chatgpt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: transcript }),
        });

        const data = await response.json();
        const reply = data.reply;
        setMessages((prev) => [...prev, `AI: ${reply}`]);

        // Speak the response
        const utterance = new SpeechSynthesisUtterance(reply);
        speechSynthesis.speak(utterance);

        setIsLoading(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event);
        setIsLoading(false);
      };
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div
        ref={mountRef}
        className="w-64 h-64 cursor-pointer"
        onClick={handleClick}
        title="Click to interact with AI"
      ></div>
      {isLoading && <p className="mt-4 text-blue-500">Listening...</p>}
      <div className="mt-4 w-80 max-h-60 overflow-y-auto bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <p key={index} className="text-sm text-gray-800 dark:text-gray-200">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InteractiveAI; 