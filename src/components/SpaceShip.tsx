import React from 'react';
import { motion } from 'framer-motion';
import StarField from './StarField';
import Grid from './Grid';

const SpaceShip = () => {
  return (
    <section className="relative min-h-screen bg-[#030912] overflow-hidden flex items-center justify-center">
      <Grid />
      <StarField />
      <motion.div
        className="absolute"
        animate={{
          x: [-300, 300],
          y: [-50, 50]
        }}
        transition={{
          x: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          },
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }
        }}
      >
        <img
          src="/nave.png"
          alt="Nave Espacial"
          className="w-64 h-auto"
          style={{
            filter: 'drop-shadow(0 0 20px rgb(40, 170, 235))'
          }}
        />
      </motion.div>
    </section>
  );
};

export default SpaceShip;