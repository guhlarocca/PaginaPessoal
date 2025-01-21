import React from 'react';

const Grid = () => {
  return (
    <div className="absolute inset-0 bg-[#0a0118] bg-opacity-50">
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #28AAEB 1px, transparent 1px), linear-gradient(to bottom, #28AAEB 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          opacity: 0.1
        }}
      />
    </div>
  );
};

export default Grid;
