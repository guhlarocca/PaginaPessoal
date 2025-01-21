import React from "react";
import { motion } from "framer-motion";
import StarField from "../StarField";
import FuturisticGrid from "../FuturisticGrid";
import { 
  DiGithubBadge, 
  DiReact, 
  DiNodejs, 
  DiPostgresql, 
  DiCode,
  DiJavascript,
  DiNpm,
  DiDatabase,
  DiTerminal
} from "react-icons/di";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiNetlify,
  SiSupabase,
  SiVite,
  SiFlutter,
  SiOpenai
} from "react-icons/si";
import { BiCircle } from "react-icons/bi";

interface TechIcon {
  Icon: React.ComponentType<any>;
  name: string;
  color: string;
}

const technologies: TechIcon[] = [
  { Icon: DiTerminal, name: "Azure", color: "#6E3DD7" },
  { Icon: DiDatabase, name: "SQL Server", color: "#4B6EE1" },
  { Icon: DiGithubBadge, name: "GitHub", color: "#28AAEB" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#05E6F5" },
  { Icon: DiReact, name: "React.js", color: "#6E3DD7" },
  { Icon: DiCode, name: "Lucide React", color: "#4B6EE1" },
  { Icon: SiTypescript, name: "TypeScript", color: "#28AAEB" },
  { Icon: SiVite, name: "Vite", color: "#05E6F5" },
  { Icon: DiNodejs, name: "Node.js", color: "#6E3DD7" },
  { Icon: DiJavascript, name: "JavaScript", color: "#4B6EE1" },
  { Icon: SiFramer, name: "Framer Motion", color: "#28AAEB" },
  { Icon: SiNetlify, name: "Netlify", color: "#05E6F5" },
  { Icon: SiSupabase, name: "Supabase", color: "#6E3DD7" },
  { Icon: DiPostgresql, name: "PostgreSQL", color: "#4B6EE1" },
  { Icon: SiFlutter, name: "FlutterFlow", color: "#28AAEB" },
  { Icon: BiCircle, name: "Bubble", color: "#05E6F5" },
  { Icon: SiOpenai, name: "OpenAI", color: "#6E3DD7" }
];

const TechSection = () => {
  return (
    <section
      id="tech"
      className="relative min-h-section lg:min-h-section-lg bg-[#050B18] py-20 px-6 sm:px-8 lg:px-16"
    >
      <FuturisticGrid variant="tech" />
      <StarField />
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
                <span className="text-[#28AAEB] font-mono">03.</span> Tecnologias
              </h2>
              <div className="h-[1px] flex-grow bg-[#233554]" />
            </div>
            <p className="text-[#8892b0] mt-4 max-w-2xl">
              Aqui estão algumas das tecnologias com as quais trabalho.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative">
                  <tech.Icon 
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <div
                    className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ background: tech.color }}
                  />
                </div>
                <span className="text-[#8892b0] text-sm text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
