import React from "react";
import { motion } from "framer-motion";
import { Database, Code, Server, Shield, Gauge, Workflow } from "lucide-react";

const AboutSection = () => {
  const technologies = [
    "SQL Server",
    "T-SQL",
    "Performance Tuning",
    "React",
    "Node.js",
    "TypeScript",
  ];

  const skills = [
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Especialista em SQL Server",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção e backup de dados",
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Otimização de queries",
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Web moderno com React",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Efeito de código binário flutuante */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute whitespace-nowrap font-mono text-xs"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 100],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {"SELECT * FROM expertise WHERE passion = 1"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold font-mono">
              <span className="text-[#64ffda]">01.</span> Sobre Mim
            </h2>
            <div className="h-[1px] w-32 sm:w-60 bg-[#233554]"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="md:col-span-2 space-y-6 text-[#8892b0]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                Com mais de 13 anos de experiência como DBA SQL Server,
                desenvolvi uma paixão pela otimização e gerenciamento eficiente
                de dados. Minha jornada começou com administração de bancos de
                dados e evoluiu para incluir desenvolvimento web moderno.
              </p>
              <p>
                Atualmente, combino minha expertise em banco de dados com
                desenvolvimento web, criando soluções completas e eficientes.
                Especializado em performance tuning, segurança de dados e
                desenvolvimento de aplicações web escaláveis.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-[#112240] rounded-lg group hover:bg-[#1d2d4a] transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <skill.icon className="w-6 h-6 text-[#64ffda] mb-2 group-hover:rotate-12 transition-transform duration-300" />
                    <h3 className="text-[#ccd6f6] font-semibold mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-[#8892b0]">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-[#ccd6f6] font-mono mb-4">
                  Principais tecnologias:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {technologies.map((tech, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 font-mono text-sm group"
                      whileHover={{ x: 10, color: "#64ffda" }}
                    >
                      <span className="text-[#64ffda] group-hover:rotate-90 transition-transform duration-300">
                        ▹
                      </span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                  alt="Profile"
                  className="rounded filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-[#64ffda]/20"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -z-10"
                initial={{ x: 20, y: 20 }}
                whileHover={{ x: 25, y: 25 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
