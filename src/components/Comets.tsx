import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Comets = () => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Criar um container para o portal
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '5';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const comets = Array.from({ length: 12 }, (_, i) => {
    const randomBias = Math.pow(Math.random(), 2);
    return {
      id: i,
      delay: (i * 0.25) % 3,
      offsetY: Math.random() * 30,
      duration: 2.5 + (2 * randomBias)
    };
  });

  const content = (
    <>
      {/* Faixa de luz transversal */}
      <div 
        className="absolute"
        style={{
          top: '-10%',
          left: '-10%',
          width: '45%',
          height: '40%',
          background: 'linear-gradient(125deg, transparent, rgba(255, 255, 255, 0.01) 10%, rgba(255, 255, 255, 0.02) 20%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.08) 55%, rgba(255, 255, 255, 0.02) 80%, rgba(255, 255, 255, 0.01) 90%, transparent)',
          transform: 'rotate(35deg) translateY(20%)',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(12px)',
          mixBlendMode: 'screen',
          opacity: 0.7
        }}
      />

      {/* Segunda camada de luz para mais naturalidade */}
      <div 
        className="absolute"
        style={{
          top: '-15%',
          left: '-15%',
          width: '55%',
          height: '50%',
          background: 'linear-gradient(125deg, transparent, rgba(255, 255, 255, 0.005) 20%, rgba(255, 255, 255, 0.02) 40%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.005) 80%, transparent)',
          transform: 'rotate(35deg) translateY(20%)',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(25px)',
          mixBlendMode: 'screen',
          opacity: 0.6
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        {comets.map(comet => (
          <motion.div
            key={comet.id}
            initial={{ 
              top: `${-12 + comet.offsetY}%`,
              left: '-5%',
              opacity: 0,
              rotate: 125,
              scale: 0.5
            }}
            animate={{ 
              top: [`${-12 + comet.offsetY}%`, `${-2 + comet.offsetY}%`, `${8 + comet.offsetY}%`],
              left: ['-5%', '10%', '25%'],
              opacity: [0, 0.15, 0],
              rotate: 125,
              scale: [0.5, 1, 1]
            }}
            transition={{
              duration: comet.duration,
              delay: comet.delay,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
              times: [0, 0.5, 1]
            }}
            style={{
              position: 'absolute',
              width: '2px',
              height: '15px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1))',
              boxShadow: '0 0 20px 2px rgba(255,255,255,0.2)',
              transformOrigin: 'center right'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(270deg)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(to left, rgba(255,255,255,0.9), transparent)',
                opacity: 0.4,
                transformOrigin: 'right center'
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );

  if (!portalContainer) return null;

  return createPortal(content, portalContainer);
};

export default Comets;
