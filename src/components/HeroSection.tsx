import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x84A59D,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    meshRef.current = new THREE.Mesh(geometry, material);
    scene.add(meshRef.current);

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
      
      targetRotation.current = {
        x: mousePosition.current.y * 0.5,
        y: mousePosition.current.x * 0.5
      };
    };

    // Touch movement handler
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      mousePosition.current = {
        x: (touch.clientX / window.innerWidth) * 2 - 1,
        y: -(touch.clientY / window.innerHeight) * 2 + 1
      };
      
      targetRotation.current = {
        x: mousePosition.current.y * 0.5,
        y: mousePosition.current.x * 0.5
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (meshRef.current) {
        // Smooth rotation interpolation
        meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
        
        // Add subtle continuous rotation
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.001;
      }
      
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
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="animate-fade-in text-4xl font-bold sm:text-5xl md:text-6xl">
            Crafting Digital Experiences
          </h1>
          <p className="mt-4 animate-fade-in text-lg text-muted-foreground">
            Developer • Cryptography Enthusiast • Problem Solver
          </p>
        </div>
      </div>
    </div>
  );
};