import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FuturisticGridProps {
  variant: 'about' | 'tech';
}

const FuturisticGrid: React.FC<FuturisticGridProps> = ({ variant }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = {
    about: ['#6E3DD7', '#4B6EE1', '#28AAEB', '#05E6F5'],
    tech: ['#05E6F5', '#28AAEB', '#4B6EE1', '#6E3DD7']
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
    }> = [];

    const createParticles = () => {
      const particleCount = 50;
      const currentColors = colors[variant];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: currentColors[Math.floor(Math.random() * currentColors.length)],
          angle: Math.random() * Math.PI * 2
        });
      }
    };

    createParticles();

    const drawGrid = () => {
      const gridSize = 30;
      const currentColors = colors[variant];
      
      ctx.strokeStyle = `${currentColors[0]}20`;
      ctx.lineWidth = 0.5;

      // Grade horizontal
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Grade vertical
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Grade diagonal
      if (variant === 'about') {
        for (let x = -canvas.height; x < canvas.width; x += gridSize * 2) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + canvas.height, canvas.height);
          ctx.stroke();
        }
      } else {
        for (let y = -canvas.width; y < canvas.height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.moveTo(canvas.width, y);
          ctx.lineTo(0, y + canvas.width);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenha a grade
      drawGrid();

      // Atualiza e desenha partículas
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.angle += 0.02;

        // Reposiciona partículas que saem da tela
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Desenha partícula
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.fillStyle = particle.color + '40';
        ctx.beginPath();
        
        if (variant === 'about') {
          // Partículas em forma de cruz para About
          const size = particle.size * 2;
          ctx.moveTo(-size, 0);
          ctx.lineTo(size, 0);
          ctx.moveTo(0, -size);
          ctx.lineTo(0, size);
        } else {
          // Partículas hexagonais para Tech
          const size = particle.size * 1.5;
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 * i) / 6;
            const x = Math.cos(angle) * size;
            const y = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }
        
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.15 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: variant === 'about'
            ? 'radial-gradient(circle at 30% 30%, rgba(110, 61, 215, 0.1) 0%, transparent 60%)'
            : 'radial-gradient(circle at 70% 70%, rgba(5, 230, 245, 0.1) 0%, transparent 60%)'
        }}
      />
    </div>
  );
};

export default FuturisticGrid; 