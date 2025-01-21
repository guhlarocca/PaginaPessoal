import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BlackHole: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Black hole geometry
    const blackHoleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const blackHoleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uInnerColor: { value: new THREE.Color(0x9333ea) }, // Purple color
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          vec3 pos = position;
          
          // Add some movement
          float angle = uTime * 0.5;
          pos.x += sin(pos.y * 4.0 + angle) * 0.02;
          pos.y += cos(pos.x * 4.0 + angle) * 0.02;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uInnerColor;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          // Calculate distance from center
          float dist = length(vPosition);
          
          // Create a pulsing effect
          float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
          
          // Create a gradient from center
          float gradient = 1.0 - smoothstep(0.0, 1.0, dist);
          
          // Mix colors based on gradient and pulse
          vec3 color = mix(vec3(0.0), uInnerColor, gradient * (0.8 + pulse * 0.2));
          
          // Add some glow
          float glow = exp(-2.0 * dist);
          color += uInnerColor * glow * 0.5;
          
          gl_FragColor = vec4(color, gradient);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    scene.add(blackHole);

    // Position camera
    camera.position.z = 5;

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update uniforms
      blackHoleMaterial.uniforms.uTime.value = elapsedTime;
      
      // Rotate black hole
      blackHole.rotation.z = elapsedTime * 0.2;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default BlackHole;
