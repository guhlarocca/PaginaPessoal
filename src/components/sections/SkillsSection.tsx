import React from "react";
import { motion } from "framer-motion";
import { Database, Server, Code, Shield, Gauge, Workflow } from "lucide-react";

const SkillsSection = () => {
  const experiences = [
    {
      title: "DBA Senior @ Empresa Atual",
      date: "2018 - Presente",
      icon: Database,
      points: [
        "Gerenciamento e otimização de grandes bases de dados SQL Server, garantindo alta performance e disponibilidade",
        "Implementação de estratégias de backup, recovery e disaster recovery para garantir a segurança dos dados",
        "Desenvolvimento de procedures, views e funções otimizadas para melhor desempenho do sistema",
        "Monitoramento proativo e resolução de problemas de performance em ambientes críticos",
      ],
    },
    {
      title: "Desenvolvedor Web Full Stack",
      date: "2020 - Presente",
      icon: Code,
      points: [
        "Desenvolvimento de aplicações web modernas utilizando React, TypeScript e Node.js",
        "Criação de APIs RESTful e integração com diversos sistemas e bancos de dados",
        "Implementação de soluções responsivas e otimizadas para melhor experiência do usuário",
        "Utilização de práticas modernas de desenvolvimento como CI/CD e metodologias ágeis",
      ],
    },
    {
      title: "DBA SQL Server",
      date: "2010 - 2018",
      icon: Server,
      points: [
        "Administração e manutenção de ambientes SQL Server em larga escala",
        "Implementação de soluções de alta disponibilidade e disaster recovery",
        "Otimização de queries e procedimentos armazenados para melhor performance",
        "Migração e upgrade de versões do SQL Server em ambientes críticos",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Efeito de grid hexagonal */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-[#64ffda] rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
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
              <span className="text-[#64ffda]">02.</span> Experiência
              Profissional
            </h2>
            <div className="h-[1px] w-32 sm:w-60 bg-[#233554]"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 last:mb-0"
              >
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-[#112240] rounded-lg">
                    <exp.icon className="w-6 h-6 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="text-[#ccd6f6] text-xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-sm text-[#8892b0]">
                      {exp.date}
                    </p>
                  </div>
                </motion.div>
                <ul className="space-y-4 ml-12">
                  {exp.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-[#8892b0] group"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-[#64ffda] mt-1.5 group-hover:rotate-90 transition-transform duration-300">
                        ▹
                      </span>
                      <span className="group-hover:text-[#ccd6f6] transition-colors duration-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
