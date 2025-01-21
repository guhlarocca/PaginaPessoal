import { useEffect, useState, lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TimelineLine from "./TimelineLine";
import SpaceShip from "./SpaceShip";
import EnergyLine from "./EnergyLine";

// Lazy load components
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const TechSection = lazy(() => import("./sections/TechSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const Background3D = lazy(() => import("./effects/Background3D"));
const DataStream = lazy(() => import("./effects/DataStream"));

// Loading component with improved animation
const LoadingFallback = () => (
  <div className="min-h-screen bg-space-dark flex items-center justify-center">
    <div className="relative">
      <div className="absolute -inset-4 bg-cosmic-gradient opacity-75 blur-lg animate-cosmic-pulse rounded-full" />
      <div className="relative px-8 py-4 bg-space-light rounded-full shadow-cosmic">
        <span className="text-starlight-bright font-mono">Carregando...</span>
      </div>
    </div>
  </div>
);

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    const style = document.createElement('style');
    style.textContent = `
      html, body {
        overflow: auto !important;
        height: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experiencia', 'tech', 'projetos', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 300) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0a0118] text-white selection:bg-purple-500/30 selection:text-white">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <EnergyLine />
        <main>
          <TimelineLine activeSection={activeSection} />
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
            style={{ 
              scaleX,
              background: 'linear-gradient(to right, #6E3DD7, #4B6EE1, #28AAEB, #05E6F5)',
              animation: 'progressGradient 2s linear infinite'
            }}
          />
          <style>
            {`
              @keyframes progressGradient {
                0% {
                  background: linear-gradient(to right, #6E3DD7, #4B6EE1, #28AAEB, #05E6F5);
                }
                25% {
                  background: linear-gradient(to right, #4B6EE1, #28AAEB, #05E6F5, #6E3DD7);
                }
                50% {
                  background: linear-gradient(to right, #28AAEB, #05E6F5, #6E3DD7, #4B6EE1);
                }
                75% {
                  background: linear-gradient(to right, #05E6F5, #6E3DD7, #4B6EE1, #28AAEB);
                }
                100% {
                  background: linear-gradient(to right, #6E3DD7, #4B6EE1, #28AAEB, #05E6F5);
                }
              }
            `}
          </style>
          {/* Background Elements */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full pointer-events-none"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3 + 0.2,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              
              {/* Subtle purple glow */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(91, 33, 182, 0.03) 0%, rgba(0, 0, 0, 0) 70%)',
                }}
              />
            </div>
            <div className="pointer-events-none">
              <Background3D />
              <DataStream />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechSection />
            <ProjectsSection />
            <ContactSection />
            <div className="bg-black">
              <SpaceShip />
            </div>
          </div>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
