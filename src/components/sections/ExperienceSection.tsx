import React, { useState } from "react";
import { motion } from "framer-motion";
import StarField from "../StarField";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Power Tuning",
      position: "DB Sales And CS Leader",
      period: "2024 - Presente",
      responsibilities: [
        "Apoio nas vendas, processos de vendas e customer success",
        "Desenvolvimento de estratégias de crescimento",
        "Mentoria técnica para a equipe",
        "CRM",
        "Prospecção de clientes"
      ],
    },
    {
      company: "Power Tuning",
      position: "Team Leader",
      period: "2020 - 2024",
      responsibilities: [
        "Liderança de uma das equipes de DBA",
        "Otimização de performance",
        "Implementação de soluções de alta disponibilidade",
        "Replicação de dados",
        "Sustentação de ambientes",
        "Monitoramento",
        "Migração,upgrade de ambientes",
      ],
    },

    {
      company: "DBA Online",
      position: "Database Administrator",
      period: "2019 - 2020",
      responsibilities: [
        "Sustentação de ambientes",
        "Otimização de performance de queries",
        "Implementação de soluções de alta disponibilidade",
        "Replicação de dados",
        "Monitoramento com Nagios, Zabbix e Grafana",
        "Migração,upgrade de ambientes",
      ],
    },

    
    {
      company: "Moura Informática",
      position: "Lider Equipe DBA",
      period: "2011 - 2019",
      responsibilities: [
        "Conversão de banco de dados",
        "Gestão de ambientes cloud",
        "Integração de franquias",
        "Replicação de dados",
        "Gerenciamento de backups, usuários e permissões",
      ],
    },

    {
      company: "Hidral-Mac Industrial LTDA",
      position: "Operador de Computadores",
      period: "2009 - 2011",
      responsibilities: [
        "Montagem e Manutenção de Computadores",
        "Gerenciamento de redes",
        "Gerenciamento de servidores",
        "Instalação e configuração de sistemas operacionais",
        "Instalação e configuração de programas",
        "Instalação e configuração de hardware",
        "Instalação e configuração de software",
        "Instalação e configuração de impressoras",
        "Configurações sistema Sapiens e Vetorh (Senior Sistemas)",
      ],
    },

  ];

  return (
    <section
      id="experiencia"
      className="relative min-h-section lg:min-h-section-lg bg-[#050B18] py-20 px-6 sm:px-8 lg:px-16"
    >
      <StarField />
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
              <span className="text-[#28AAEB] font-mono">02.</span> Experiência
            </h2>
            <div className="h-[1px] flex-grow bg-[#233554]" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Tabs */}
            <div className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
              {experiences.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    px-4 py-3 text-sm font-mono text-left whitespace-nowrap
                    border-l-2 md:border-l-2 md:border-b-0
                    transition-all duration-300
                    ${activeTab === idx
                      ? 'border-[#28AAEB] text-[#28AAEB] bg-[#28AAEB]/10'
                      : 'border-[#233554] text-[#8892b0] hover:bg-[#28AAEB]/5 hover:text-[#28AAEB]'
                    }
                  `}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="space-y-4">
                <h3 className="text-xl text-[#ccd6f6] font-medium">
                  {experiences[activeTab].position}{" "}
                  <span className="text-[#28AAEB]">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className="text-[#8892b0] font-mono">
                  {experiences[activeTab].period}
                </p>
                <ul className="space-y-4">
                  {experiences[activeTab].responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#28AAEB] mt-1.5">▹</span>
                      <span className="text-[#8892b0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
