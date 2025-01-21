import React, { useEffect, useRef, useState, useCallback } from "react";

const DataStream = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] =
    useState<Array<{ x: number; y: number; speed: number; content: string }>>();
  const animationFrameRef = useRef<number>();

  const createParticles = useCallback(() => {
    if (!containerRef.current) return [];
    const width = containerRef.current.offsetWidth;
    return Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: -20,
      speed: Math.random() * 1 + 0.5,
      content: Math.random() > 0.5 ? "1" : "0",
    }));
  }, []);

  const updateParticles = useCallback(() => {
    if (!containerRef.current) return;
    const height = containerRef.current.offsetHeight;
    const width = containerRef.current.offsetWidth;

    setParticles((prev) => {
      if (!prev) return createParticles();
      return prev.map((particle) => ({
        ...particle,
        y: particle.y > height ? -20 : particle.y + particle.speed,
        x: particle.y > height ? Math.random() * width : particle.x,
      }));
    });

    animationFrameRef.current = requestAnimationFrame(updateParticles);
  }, [createParticles]);

  useEffect(() => {
    setParticles(createParticles());
    updateParticles();

    const resizeObserver = new ResizeObserver(() => {
      setParticles(createParticles());
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [createParticles, updateParticles]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ contain: "strict" }}
    >
      {particles?.map((particle, i) => (
        <div
          key={i}
          className="absolute text-[#64ffda] font-mono text-sm will-change-transform"
          style={{
            transform: `translate3d(${particle.x}px, ${particle.y}px, 0)`,
            opacity: 0.2,
          }}
        >
          {particle.content}
        </div>
      ))}
    </div>
  );
};

export default React.memo(DataStream);
