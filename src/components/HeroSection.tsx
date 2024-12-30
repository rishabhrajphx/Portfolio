import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Bubble {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  radius: number;
  mesh: THREE.Mesh;
}

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const centerPoint = new THREE.Vector3(0, 0, 0);
  const bubblesRef = useRef<Bubble[]>([]);
  const bounds = useRef({ width: 10, height: 10, depth: 10 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particleCount = 1000;
    const particles = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 10; i += 3) {
      // Create particles in a sphere
      const radius = 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      particles[i] = radius * Math.sin(phi) * Math.cos(theta);
      particles[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particles[i + 2] = radius * Math.cos(phi);
      
      // Initialize velocities
      velocities[i] = (Math.random() - 0.5) * 0.01;
      velocities[i + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0x84A59D,
      size: 0.02,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    particlesRef.current = new THREE.Points(geometry, material);
    scene.add(particlesRef.current);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    // Touch movement handler
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      mousePosition.current = {
        x: (touch.clientX / window.innerWidth) * 2 - 1,
        y: -(touch.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Create bubble material
    const bubbleMaterial = new THREE.MeshPhongMaterial({
      color: 0xADD8E6,
      transparent: true,
      opacity: 0.6,
      shininess: 200,
      specular: 0xffffff,
    });

    // Create bubbles
    const createBubble = () => {
      const radius = Math.random() * 0.5 + 0.1;
      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const mesh = new THREE.Mesh(geometry, bubbleMaterial);
      
      const bubble: Bubble = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * bounds.current.width,
          (Math.random() - 0.5) * bounds.current.height,
          (Math.random() - 0.5) * bounds.current.depth
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        radius,
        mesh
      };

      mesh.position.copy(bubble.position);
      scene.add(mesh);
      return bubble;
    };

    // Initialize bubbles
    for (let i = 0; i < 20; i++) {
      bubblesRef.current.push(createBubble());
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        
        // Update particle positions
        for (let i = 0; i < positions.length; i += 3) {
          // Convert mouse position to 3D space
          const mouseVector = new THREE.Vector3(
            mousePosition.current.x * 3,
            mousePosition.current.y * 3,
            0
          );
          
          // Calculate forces
          const particlePos = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
          
          // Force towards center (gravity)
          const toCenter = centerPoint.clone().sub(particlePos);
          const centerForce = toCenter.normalize().multiplyScalar(0.001);
          
          // Repulsion from mouse
          const toMouse = mouseVector.clone().sub(particlePos);
          const distanceToMouse = toMouse.length();
          const repulsionForce = toMouse.normalize().multiplyScalar(-0.005 / Math.max(0.1, distanceToMouse));
          
          // Apply forces
          positions[i] += centerForce.x + repulsionForce.x + velocities[i];
          positions[i + 1] += centerForce.y + repulsionForce.y + velocities[i + 1];
          positions[i + 2] += centerForce.z + repulsionForce.z + velocities[i + 2];
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
      
      // Update bubbles
      bubblesRef.current.forEach(bubble => {
        // Update position
        bubble.position.add(bubble.velocity);
        
        // Bounce off bounds
        if (Math.abs(bubble.position.x) > bounds.current.width / 2) {
          bubble.velocity.x *= -1;
          bubble.position.x = Math.sign(bubble.position.x) * bounds.current.width / 2;
        }
        if (Math.abs(bubble.position.y) > bounds.current.height / 2) {
          bubble.velocity.y *= -1;
          bubble.position.y = Math.sign(bubble.position.y) * bounds.current.height / 2;
        }
        if (Math.abs(bubble.position.z) > bounds.current.depth / 2) {
          bubble.velocity.z *= -1;
          bubble.position.z = Math.sign(bubble.position.z) * bounds.current.depth / 2;
        }

        // Apply slight upward drift
        bubble.velocity.y += 0.0001;

        // Add slight wobble
        bubble.position.x += Math.sin(Date.now() * 0.001 + bubble.position.y) * 0.001;
        
        // Update mesh position
        bubble.mesh.position.copy(bubble.position);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      bubblesRef.current.forEach(bubble => {
        scene.remove(bubble.mesh);
        bubble.mesh.geometry.dispose();
      });
      bubblesRef.current = [];
    };
  }, []);

  useEffect(() => {
    const letters = "!_-+=)(*&^%$#@!1234567890?/>.<:;";
    let interval = null;

    const h1Element = document.querySelector("h1") as HTMLElement;
    const originalText = h1Element.dataset.value; // Get the original text

    // Set initial cryptic text
    h1Element.innerText = Array.from({ length: originalText.length }, () => letters[Math.floor(Math.random() * letters.length)]).join("");

    h1Element.onmouseover = (event: MouseEvent) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        h1Element.innerText = h1Element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]; // Reveal original text
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    return () => {
      if (h1Element) {
        h1Element.onmouseover = null; // Clean up the event listener
      }
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 
            className="animate-fade-in text-4xl font-bold sm:text-5xl md:text-6xl" 
            data-value="Rishabh Raj"
            draggable="false" // Prevent dragging
          >
            {/* Initial cryptic text will be set in useEffect */}
          </h1>
          <p className="mt-4 animate-fade-in text-lg text-muted-foreground">
            Software Developer • Cryptography Enthusiast • Problem Solver
          </p>
        </div>
      </div>
    </div>
  );
};