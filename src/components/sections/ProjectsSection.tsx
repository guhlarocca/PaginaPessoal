import React from "react";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Monitoramento SQL Server",
      description:
        "Plataforma web para monitoramento em tempo real de instâncias SQL Server, com alertas automáticos, análise de performance e dashboards interativos. Integração com múltiplos servidores e histórico detalhado de métricas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: [
        "SQL Server",
        "React",
        "Node.js",
        "SignalR",
        "Performance Monitoring",
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Ferramenta de Otimização de Queries",
      description:
        "Aplicação web para análise e otimização automática de queries SQL. Identifica gargalos de performance, sugere índices e fornece recomendações de melhorias baseadas em machine learning e boas práticas de DBA.",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903",
      tags: ["T-SQL", "Python", "React", "Machine Learning", "SQL Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Dashboard de Gestão de Backup",
      description:
        "Sistema centralizado para gestão de backups SQL Server com interface moderna e responsiva. Monitoramento de jobs, validação automática de backups e restauração com poucos cliques.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      tags: ["SQL Server", "React", "TypeScript", "PowerShell", "Azure"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Efeito de código SQL animado */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute whitespace-pre"
            style={{
              top: `${i * 10}%`,
              left: Math.random() * 100 + "%",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 100],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {`SELECT *
FROM Projects
WHERE quality = 'High'
ORDER BY impact DESC;`}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold font-mono">
              <span className="text-[#64ffda]">03.</span> Projetos em Destaque
            </h2>
            <div className="h-[1px] w-32 sm:w-60 bg-[#233554]"></div>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
