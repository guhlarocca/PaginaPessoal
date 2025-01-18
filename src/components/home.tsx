import { useEffect, useState, lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";

// Lazy load components
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const Background3D = lazy(() => import("./effects/Background3D"));
const DataStream = lazy(() => import("./effects/DataStream"));

// Loading component with improved animation
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a192f]">
    <div className="relative">
      <motion.div
        className="text-[#64ffda] font-mono text-xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Carregando...
      </motion.div>
      <motion.div
        className="absolute -inset-4 border border-[#64ffda]/30 rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  </div>
);

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] relative">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#64ffda]/20 z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Background Effects */}
        <Background3D />
        <DataStream />

        {/* Noise Texture Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-10 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main Content */}
        <div className="relative z-20">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>

        {/* Mouse Trail Effect */}
        <div className="fixed inset-0 pointer-events-none z-30">
          <motion.div
            className="w-4 h-4 rounded-full bg-[#64ffda]/20 absolute"
            animate={{
              x: 100,
              y: 100,
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
