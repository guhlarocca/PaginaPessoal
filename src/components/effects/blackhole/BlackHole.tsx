import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createBlackHoleShader } from '../../../../public/CodePen/blackhole.js';
import './style.css';

const BlackHole: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    experienceRef.current.appendChild(renderer.domElement);

    // Criar textura de ruído
    const noiseSize = 256;
    const noiseData = new Uint8Array(noiseSize * noiseSize * 4);
    for (let i = 0; i < noiseSize * noiseSize * 4; i += 4) {
      const noise = Math.random() * 255;
      noiseData[i] = noise;
      noiseData[i + 1] = noise;
      noiseData[i + 2] = noise;
      noiseData[i + 3] = 255;
    }
    const noiseTexture = new THREE.DataTexture(noiseData, noiseSize, noiseSize, THREE.RGBAFormat);
    noiseTexture.needsUpdate = true;

    // Criar geometria do buraco negro
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.ShaderMaterial(createBlackHoleShader());
    material.uniforms.uNoiseTexture.value = noiseTexture;
    const blackHole = new THREE.Mesh(geometry, material);
    scene.add(blackHole);

    camera.position.z = 5;

    // Animação
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(blackHole);
      geometry.dispose();
      material.dispose();
      noiseTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={experienceRef} className="experience" />;
};

export default BlackHole;
