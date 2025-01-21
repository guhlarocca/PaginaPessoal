import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  color: string;
}

const sections: Section[] = [
  { id: 'about', color: '#6E3DD7' },
  { id: 'experiencia', color: '#4B6EE1' },
  { id: 'tech', color: '#28AAEB' },
  { id: 'projetos', color: '#05E6F5' },
  { id: 'contact', color: '#05E6F5' }
];

const EnergyLine = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id === 'about') {
              setShowLine(true);
            }
            if (entry.target.id === 'hero') {
              setShowLine(false);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      if (heroElement) observer.unobserve(heroElement);
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {showLine && (
        <motion.div 
          className="fixed right-0 top-0 h-full z-50 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-[150px] h-full">
            <svg className="w-full h-full" viewBox="0 0 150 800" preserveAspectRatio="none">
              <defs>
                {/* Gradiente estático para linhas inativas */}
                <linearGradient id="inactiveGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="800">
                  <stop offset="0%" stopColor="#6E3DD7" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#05E6F5" stopOpacity="0.1" />
                </linearGradient>
                
                {/* Gradiente animado para linhas ativas */}
                <linearGradient id="activeGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="800">
                  <stop offset="0%" stopColor="#6E3DD7">
                    <animate
                      attributeName="stop-color"
                      values="#6E3DD7; #4B6EE1; #28AAEB; #05E6F5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="25%" stopColor="#4B6EE1">
                    <animate
                      attributeName="stop-color"
                      values="#4B6EE1; #28AAEB; #05E6F5; #6E3DD7"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="#28AAEB">
                    <animate
                      attributeName="stop-color"
                      values="#28AAEB; #05E6F5; #6E3DD7; #4B6EE1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="75%" stopColor="#05E6F5">
                    <animate
                      attributeName="stop-color"
                      values="#05E6F5; #6E3DD7; #4B6EE1; #28AAEB"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#05E6F5">
                    <animate
                      attributeName="stop-color"
                      values="#05E6F5; #6E3DD7; #4B6EE1; #28AAEB"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>

                {/* Gradiente para pontos de conexão */}
                <radialGradient id="dotGradient">
                  <stop offset="0%" stopColor="#6E3DD7">
                    <animate
                      attributeName="stop-color"
                      values="#6E3DD7; #4B6EE1; #28AAEB; #05E6F5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#05E6F5">
                    <animate
                      attributeName="stop-color"
                      values="#05E6F5; #6E3DD7; #4B6EE1; #28AAEB"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </radialGradient>
              </defs>

              {/* Linha vertical principal (fundo) */}
              <line
                x1="75"
                y1="0"
                x2="75"
                y2="800"
                stroke="url(#inactiveGradient)"
                strokeWidth="2"
              />

              {/* Todas as linhas horizontais (fundo) */}
              {sections.map((section, index) => {
                const y = 200 + (index * 150);
                return (
                  <g key={`background-${section.id}`}>
                    <line
                      x1="75"
                      y1={y}
                      x2="140"
                      y2={y}
                      stroke="url(#inactiveGradient)"
                      strokeWidth="2"
                    />
                    {index < sections.length - 1 && [1, 2].map((_, i) => (
                      <line
                        key={`background-inter-${i}`}
                        x1="75"
                        y1={y + (50 * (i + 1))}
                        x2="120"
                        y2={y + (50 * (i + 1))}
                        stroke="url(#inactiveGradient)"
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                );
              })}

              {/* Linhas que acendem */}
              {sections.map((section, index) => {
                const y = 200 + (index * 150);
                const nextY = 200 + ((index + 1) * 150);
                const isActive = activeSection === section.id;
                const nextIsActive = index < sections.length - 1 && activeSection === sections[index + 1].id;
                const wasActive = sections.findIndex(s => s.id === activeSection) > index;

                return (
                  <g key={section.id}>
                    {/* Linha vertical que acende */}
                    <motion.line
                      x1="75"
                      y1={y}
                      x2="75"
                      y2={nextY}
                      stroke="url(#activeGradient)"
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isActive || nextIsActive || wasActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Ponto de conexão */}
                    <motion.circle
                      cx="75"
                      cy={y}
                      r="3"
                      fill="url(#dotGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isActive || wasActive ? 1 : 0,
                        scale: isActive ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Linhas horizontais que acendem */}
                    <motion.line
                      x1="75"
                      y1={y}
                      x2="140"
                      y2={y}
                      stroke="url(#activeGradient)"
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isActive || wasActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {index < sections.length - 1 && [1, 2].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="75"
                        y1={y + (50 * (i + 1))}
                        x2="120"
                        y2={y + (50 * (i + 1))}
                        stroke="url(#activeGradient)"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnergyLine;
