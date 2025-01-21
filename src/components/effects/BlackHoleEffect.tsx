import React, { useEffect, useRef } from 'react';

const BlackHoleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/CodePen/script.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = '/CodePen/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="black-hole-container fixed inset-0 z-0">
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
};

export default BlackHoleEffect;
