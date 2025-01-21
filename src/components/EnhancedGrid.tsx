import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedGridProps {
  opacity?: number;
  color?: string;
  lineSpacing?: number;
  animated?: boolean;
  variant?: 'cyber' | 'neon' | 'matrix';
}

const EnhancedGrid: React.FC<EnhancedGridProps> = ({
  opacity = 0.15,
  color = '#a5b4fc',
  lineSpacing = 60,
  animated = true,
  variant = 'cyber'
}) => {
  const glowIntensity = '10px';
  const baseColor = color;
  const glowColor = `${color}33`; // 33 = 20% opacity

  const gridStyles = {
    cyber: {
      backgroundImage: `
        linear-gradient(${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px),
        linear-gradient(90deg, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px),
        linear-gradient(45deg, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px),
        linear-gradient(-45deg, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px)
      `,
      backgroundSize: `${lineSpacing}px ${lineSpacing}px, ${lineSpacing}px ${lineSpacing}px, ${lineSpacing * 2}px ${lineSpacing * 2}px, ${lineSpacing * 2}px ${lineSpacing * 2}px`,
      filter: `drop-shadow(0 0 ${glowIntensity} ${glowColor})`,
    },
    neon: {
      backgroundImage: `
        repeating-linear-gradient(to right, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px, transparent ${lineSpacing}px),
        repeating-linear-gradient(to bottom, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 1px, transparent 1px, transparent ${lineSpacing}px)
      `,
      filter: `drop-shadow(0 0 ${glowIntensity} ${glowColor}) blur(0.5px)`,
    },
    matrix: {
      backgroundImage: `
        linear-gradient(0deg, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 2px, transparent 2px),
        linear-gradient(90deg, ${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 2px, transparent 2px)
      `,
      backgroundSize: `${lineSpacing}px ${lineSpacing}px`,
      filter: `drop-shadow(0 0 ${glowIntensity} ${glowColor})`,
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          ...gridStyles[variant],
          backgroundPosition: 'center center',
        }}
        animate={animated ? {
          backgroundPosition: ['0% 0%', '100% 100%'],
        } : undefined}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${glowColor} 100%)`,
          opacity: 0.4,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Scanlines Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
          backgroundSize: '100% 4px',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default EnhancedGrid;
