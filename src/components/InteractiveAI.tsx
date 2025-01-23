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
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Shader code
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelMatrix * viewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uProgress;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      // Animated gradient background
      vec3 bgColor1 = mix(vec3(0.1, 0.2, 0.4), vec3(0.4, 0.1, 0.2), sin(uTime * 0.5) * 0.5 + 0.5);
      vec3 bgColor2 = mix(vec3(0.3, 0.1, 0.4), vec3(0.1, 0.3, 0.4), cos(uTime * 0.3) * 0.5 + 0.5);
      vec3 bg = mix(bgColor1, bgColor2, vUv.y);
      
      // Reduced core brightness and pulse intensity
      float pulse = sin(uTime * 2.0) * 0.05 + 0.9;
      vec3 coreColor = vec3(0.6, 0.7, 0.8);  // Darker blue-gray
      float dist = length(vUv - 0.5);
      float core = smoothstep(0.5, 0.2, dist * pulse);
      
      // Reduced interactive element intensities
      vec2 mouseDist = vUv - uMouse;
      float mouseInfluence = smoothstep(0.5, 0.0, length(mouseDist)) * 0.3;
      float lightTrails = sin(vUv.x * 50.0 + uTime * 5.0) * 0.05;
      
      // Final color composition
      vec3 finalColor = bg + core * coreColor + mouseInfluence + lightTrails;
      
      // Reduced response animation intensity
      finalColor += vec3(uProgress) * 0.3 * (1.0 - smoothstep(0.0, 0.2, abs(dist - 0.25)));
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uProgress: { value: 0 }
      }
    });

    // Fullscreen plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    sceneRef.current = scene;
    materialRef.current = material;

    // Animation loop
    let animationFrame: number;
    const animate = (time: number) => {
      animationFrame = requestAnimationFrame(animate);
      material.uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
    };
    animate(0);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / container.clientWidth;
      const y = (e.clientY - rect.top) / container.clientHeight;
      material.uniforms.uMouse.value.set(x, 1 - y);
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeChild(renderer.domElement);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleAIInteraction = async () => {
    if (isListening) return;
    
    try {
      setIsListening(true);
      if (materialRef.current) {
        materialRef.current.uniforms.uProgress.value = 1;
      }

      // Voice recognition
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;

      recognition.start();
      
      const transcript = await new Promise<string>((resolve) => {
        recognition.onresult = (e: SpeechRecognitionEvent) => {
          resolve(e.results[0][0].transcript);
        };
      });

      setMessages(prev => [...prev, `You: ${transcript}`]);

      // API call
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: transcript }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, `AI: ${data.reply}`]);

      // Text-to-speech
      const utterance = new SpeechSynthesisUtterance(data.reply);
      speechSynthesis.speak(utterance);

    } catch (error) {
      console.error('Interaction failed:', error);
    } finally {
      setIsListening(false);
      if (materialRef.current) {
        materialRef.current.uniforms.uProgress.value = 0;
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-transparent">
      <div
        ref={mountRef}
        className="w-full h-full cursor-pointer"
        onClick={handleAIInteraction}
      />
      
      <div className="absolute bottom-4 left-4 right-4 max-h-40 overflow-y-auto bg-black/50 backdrop-blur-sm p-4 rounded-lg shadow-xl">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm mb-2 ${
              msg.startsWith('You') ? 'text-blue-400' : 'text-green-400'
            }`}
          >
            {msg}
          </div>
        ))}
        {isListening && (
          <div className="flex items-center text-purple-400 text-sm">
            <div className="animate-pulse mr-2">●</div>
            Listening...
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveAI;