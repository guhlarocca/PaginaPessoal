import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import { ExternalLink } from "lucide-react";
import StarField from "../StarField";

const projects = [
  {
    title: "Blog Pessoal",
    description:
      "Blog pessoal onde compartilho minhas experiências e conhecimentos sobre Bancos de dados SQL Server.",
    tech: ["Wordpress"],
    links: {
      external: "https://gustavolarocca.com.br",
    },
    image: "/images/projects/blog.png",
  },
  {
    title: "One Point Service Desk",
    description: "Sistema de Service Desk desenvolvido para a One Point. Gerenciamento de chamados, relatórios, contratos, controle de horas e muito mais..",
    tech: ["Next.js","TypeScript", "Supabase", "TailwindCSS"],
    links: {
      external: "https://www.onepointservicedesk.com.br",
    },
    image: "/images/projects/onepoint.png",
  },
  {
    title: "Marasca Auto Peças",
    description: "Site institucional desenvolvido para a Marasca Auto Peças.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    links: {
      external: "https://www.marascaautopecas.com.br",
    },
    image: "/images/projects/marasca.png",
  },
  {
    title: "Móveis Manzolli",
    description: "Site institucional desenvolvido para a Móveis Manzolli, com portfólio de projetos e sistema para gerenciamento da galeria de fotos do site.",
    tech: ["Vite", "TailwindCSS","Framer Motion","Firebase"],
    links: {
      external: "https://www.moveismanzolli.com.br",
    },
    image: "/images/projects/manzolli.png",
  }
];

const ProjectsSection = () => {
  return (
    <section
      id="projetos"
      className="relative min-h-section lg:min-h-section-lg bg-[#050B18] py-20 px-6 sm:px-8 lg:px-16"
    >
      <StarField />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
              <span className="text-[#28AAEB] font-mono">04.</span> Projetos
            </h2>
            <div className="h-[1px] flex-grow bg-[#233554]" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                external={project.links.external}
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
