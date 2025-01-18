import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Database,
  Code,
  Server,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "Gustavo Larocca",
  title = "DBA & Desenvolvedor Web",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-[#0a192f] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced matrix digital effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-[#64ffda] font-mono text-sm"
            style={{ left: `${i * 5}%` }}
            initial={{ y: -100 }}
            animate={{
              y: [null, window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j} className="my-2">
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Ícones flutuantes relacionados a banco de dados */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[Database, Server, Code].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={40} className="text-[#64ffda]" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#64ffda] font-mono"
          >
            Olá, meu nome é
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-6xl sm:text-7xl font-bold text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
          >
            {name}.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="text-5xl sm:text-6xl font-bold text-[#8892b0] hover:text-[#ccd6f6] transition-colors duration-300"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 50,
            }}
            className="max-w-xl text-[#8892b0] text-lg"
          >
            Especialista em Banco de Dados SQL Server com mais de 13 anos de
            experiência, combinando expertise em desenvolvimento web moderno.
            Focado em otimização de performance, segurança de dados e criação de
            soluções web escaláveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex space-x-6 pt-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              asChild
            >
              <a href="#projects">
                <span className="relative z-10">Explore meus projetos</span>
                <motion.div
                  className="absolute inset-0 bg-[#64ffda]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />
              </a>
            </Button>
          </motion.div>

          {/* Rest of the component remains the same */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
