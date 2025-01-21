import React from 'react';
import { motion } from 'framer-motion';

interface TimelineLineProps {
  activeSection: string;
}

const TimelineLine: React.FC<TimelineLineProps> = ({ activeSection }) => {
  const sections = [
    { id: 'about', label: 'Sobre Mim', number: '01', color: '#1E3A8A' },
    { id: 'experiencia', label: 'Experiência', number: '02', color: '#4B6EE1' },
    { id: 'tech', label: 'Tecnologias', number: '03', color: '#28AAEB' },
    { id: 'projetos', label: 'Projetos', number: '04', color: '#05E6F5' },
    { id: 'contact', label: 'Vamos Conversar', number: '05', color: '#05E6F5' }
  ];

  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 h-[60vh] z-50 hidden lg:block">
      <div className="relative h-full">
        {/* Linha de fundo */}
        <div
          className="absolute left-[9px] top-0 h-full w-[2px] bg-[#1E293B]"
        />

        {/* Barra de progresso */}
        <motion.div
          className="absolute left-[9px] top-0 w-[2px] origin-top"
          style={{
            background: `linear-gradient(to bottom, #1E3A8A, #4B6EE1, #28AAEB, #05E6F5)`,
            height: sections.findIndex(s => s.id === activeSection) > 0 
              ? `${(sections.findIndex(s => s.id === activeSection) * 100) / (sections.length - 1)}%` 
              : '0%',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Pontos na linha */}
        {sections.map((section, index) => {
          const active = isActive(section.id);
          const isCompleted = sections.findIndex(s => s.id === activeSection) > index;
          
          return (
            <div
              key={section.id}
              className="absolute left-0 transform -translate-x-1/2"
              style={{
                top: `${(index * 100) / (sections.length - 1)}%`,
              }}
            >
              <motion.div
                className={`
                  relative w-5 h-5 rounded-full 
                  transition-all duration-500
                  ${active ? 'scale-125' : 'scale-100 hover:scale-110'}
                `}
                style={{
                  backgroundColor: active || isCompleted ? section.color : '#1E293B',
                  borderColor: section.color,
                  borderWidth: '2px',
                  boxShadow: active 
                    ? `0 0 15px ${section.color}80, inset 0 0 8px ${section.color}80` 
                    : isCompleted 
                      ? `0 0 10px ${section.color}40` 
                      : 'none'
                }}
                initial={false}
                animate={{
                  scale: active ? 1.25 : 1,
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
              >
                {/* Efeito de brilho interno */}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${section.color}40 0%, transparent 70%)`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className={`
                  absolute -right-8 whitespace-nowrap font-mono text-sm
                  transition-all duration-300
                  ${active ? `text-[${section.color}]` : isCompleted ? `text-[${section.color}]/80` : 'text-[#8892b0]'}
                `}>
                  {section.number}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineLine;
