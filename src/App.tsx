import { Suspense } from "react";
import Home from "./components/home";
import StarField from "./components/StarField";
import { motion } from "framer-motion";

const LoadingScreen = () => (
  <div className="min-h-screen bg-[#050B18] flex items-center justify-center relative overflow-hidden">
    <StarField />
    <motion.div
      className="relative z-10 bg-black/20 px-8 py-4 rounded-full backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-[#28AAEB] text-2xl font-mono flex items-center gap-1"
        animate={{ 
          filter: [
            'drop-shadow(0 0 5px #28AAEB) drop-shadow(0 0 10px #28AAEB)',
            'drop-shadow(0 0 15px #28AAEB) drop-shadow(0 0 20px #28AAEB)',
            'drop-shadow(0 0 5px #28AAEB) drop-shadow(0 0 10px #28AAEB)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Carregando
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        >...</motion.span>
      </motion.div>
    </motion.div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Home />
    </Suspense>
  );
}

export default App;
