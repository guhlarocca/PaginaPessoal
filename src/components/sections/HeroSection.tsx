import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import StarField from "../StarField";
import Comets from "../Comets";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Criar um novo estilo para sobrescrever o CSS do CodePen
    const style = document.createElement('style');
    style.textContent = `
      html, body {
        cursor: none !important;
      }
      
      a, button, [role="button"] {
        cursor: none !important;
      }

      .experience {
        position: absolute !important;
        height: 100% !important;
        width: 100% !important;
        top: 0 !important;
        left: 0 !important;
        pointer-events: none !important;
        touch-action: none !important;
        user-select: none !important;
        z-index: 1 !important;
      }
      #canvas {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        touch-action: none !important;
        pointer-events: none !important;
        z-index: 1 !important;
      }
      .cursor {
        pointer-events: none !important;
        position: fixed !important;
        z-index: 999 !important;
        mix-blend-mode: difference !important;
        transition: all 0.1s ease-out !important;
      }
      .hero-section {
        position: relative !important;
        z-index: 2 !important;
        cursor: none !important;
      }
      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(40, 170, 235, 0.03);
        mix-blend-mode: screen;
        pointer-events: none;
        z-index: 2;
      }
      @media (max-width: 768px) {
        .hero-section {
          background-color: #000000 !important;
          display: flex !important;
          align-items: flex-start !important;
          padding: 0 !important;
          min-height: 100vh !important;
          height: 100vh !important;
          overflow: hidden !important;
          justify-content: flex-start !important;
        }
        .experience {
          z-index: 1 !important;
          top: 35vh !important;
          height: 65vh !important;
        }
        .hero-content {
          text-align: left !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          padding-left: 1rem !important;
          padding-top: 5.5rem !important;
          z-index: 2 !important;
          position: relative !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.8rem !important;
        }
        .hero-content .intro-text {
          font-size: 1.1rem !important;
          margin: 0 !important;
          color: rgb(40, 170, 235) !important;
        }
        .hero-content h1 {
          font-size: 2.2rem !important;
          line-height: 1.1 !important;
          text-align: left !important;
          margin: 0 !important;
          padding: 0 !important;
          letter-spacing: -0.02em !important;
        }
        .hero-content .typewriter-container {
          font-size: 1.6rem !important;
          line-height: 1.1 !important;
          margin: 0 !important;
          padding: 0 !important;
          height: auto !important;
          min-height: 2rem !important;
        }
        .hero-content p {
          font-size: 1rem !important;
          line-height: 1.4 !important;
          padding-right: 1rem !important;
          padding-left: 0 !important;
          text-align: left !important;
          margin: 0 !important;
        }
        .hero-content button {
          margin-top: 0.2rem !important;
          padding: 0.7rem 1.5rem !important;
          width: fit-content !important;
          font-size: 0.95rem !important;
        }
      }

      @media (max-width: 380px) {
        .hero-content {
          padding-top: 4.5rem !important;
          padding-left: 0.75rem !important;
        }
        .hero-content h1 {
          font-size: 2rem !important;
          line-height: 1 !important;
          letter-spacing: -0.03em !important;
        }
        .hero-content .typewriter-container {
          font-size: 1.4rem !important;
          min-height: 1.8rem !important;
        }
        .hero-content p {
          font-size: 0.95rem !important;
          line-height: 1.35 !important;
          padding-right: 0.75rem !important;
        }
        .hero-content button {
          padding: 0.6rem 1.3rem !important;
          font-size: 0.9rem !important;
        }
        .experience {
          top: 40vh !important;
          height: 60vh !important;
        }
      }

      @media (min-width: 769px) {
        .hero-content {
          padding-left: 8rem !important;
          max-width: none !important;
        }
        .hero-content p {
          max-width: 600px !important;
        }
        .experience {
          width: 100% !important;
          height: 100% !important;
        }
      }

      .hero-content {
        text-align: left;
        width: 100%;
        max-width: 800px;
        margin: 0;
        padding-left: 2rem;
        z-index: 2;
        position: relative;
      }

      .hero-content .intro-text {
        font-size: 1.25rem;
        color: rgb(40, 170, 235);
        margin-bottom: 0.5rem;
      }

      .hero-content h1 {
        font-size: 4rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        text-align: left;
      }

      .hero-content .typewriter-container {
        font-size: 2.5rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        height: auto;
        min-height: 3rem;
      }

      .hero-content p {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        max-width: 600px;
        color: #94a3b8;
        text-align: left;
      }

      .hero-content button {
        padding: 1rem 2rem;
        font-size: 1.125rem;
        color: white;
        background: transparent;
        border: 2px solid rgb(40, 170, 235);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        width: fit-content;
      }

      .hero-content button:hover {
        background: rgb(40, 170, 235);
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);

    // Carregar o script do buraco negro apenas se não existir
    if (!document.querySelector('script[src="/CodePen/script.js"]')) {
      const script = document.createElement('script');
      script.src = '/CodePen/script.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Carregar os estilos apenas se não existirem
    if (!document.querySelector('link[href="/CodePen/style.css"]')) {
      const link = document.createElement('link');
      link.href = '/CodePen/style.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Mouse movement handler
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Prevenir zoom
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
      document.head.removeChild(style);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(40, 170, 235, 0.5)",
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(40, 170, 235, 0.2)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }
    }
  };

  const fadeUpSpring = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-section relative min-h-screen bg-[#050B18] flex flex-col justify-center py-20 overflow-hidden"
    >
      <StarField />
      <div id="experience" className="experience"></div>
      <div className="absolute inset-0 pointer-events-none">
        <Comets />
      </div>
      <div className="relative z-30 w-full pointer-events-auto">
        {/* Mouse Follower */}
        <motion.div
          variants={variants}
          className="cursor hidden lg:block fixed w-4 h-4 rounded-full pointer-events-none z-50"
          animate={cursorVariant}
        />

        <div className="max-w-screen-xl mx-0 px-0">
          <div className="hero-content text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="intro-text"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Olá, meu nome é
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#ccd6f6] text-5xl sm:text-6xl md:text-7xl font-bold mix-blend-difference"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Gustavo Larocca
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="typewriter-container text-[#28AAEB] text-4xl sm:text-5xl md:text-6xl font-bold h-[70px]"
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "< Codando />",
                    "< Comendo />",
                    "< Dormindo />",
                    "< Brincando com Teteo />",
                    "< Trabalhando />",
                    "< Estudando />"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  wrapperClassName: "text-[#28AAEB]",
                  cursorClassName: "text-[#28AAEB]",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[#8892b0] max-w-xl text-lg"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Sou apaixonado por Tecnologia,<br/>
              Banco de dados e Programação WEB,<br/>
              Venha me conhecer um pouco melhor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="flex gap-4 mt-12"
                variants={fadeUpSpring}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <motion.button
                  className="px-7 py-4 border border-[#28AAEB] text-[#28AAEB] font-mono rounded hover:bg-[#28AAEB]/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                  onClick={() => {
                    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Confira meu trabalho!
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
