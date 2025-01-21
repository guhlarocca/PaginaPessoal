import React from "react";
import { motion } from "framer-motion";
import StarField from "../StarField";
import FuturisticGrid from "../FuturisticGrid";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-section lg:min-h-section-lg bg-[#050B18] py-20 px-6 sm:px-8 lg:px-16"
    >
      <FuturisticGrid variant="tech" />
      <StarField />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
                <span className="text-[#28AAEB] font-mono">01.</span> Sobre Mim
              </h2>
              <div className="h-[1px] flex-grow bg-[#233554]" />
            </div>
            
            <div className="space-y-4 text-[#8892b0]">
              <p>
                Olá! Me chamo Gustavo Larocca e atualmente sou DB Sales And CS Leader na Power Tuning.
                Tenho 33 anos e sou formado em Sistemas de Informação pelas Faculdades Integradas de Araraquara.
              </p>
              
              <p>
                Sou MCSE Data and Management Analytics, tenho 13 anos de experiência
                nesta área, além de ter conhecimentos em Programação WEB. Meu objetivo é sempre
                melhorar minhas habilidades, tanto técnicas quanto interpessoais.
              </p>

              <p>
                Nos momentos de lazer, adoro tocar violão, cantar, e compartilhar momentos
                especiais jogando video game com meu filho Matteo Larocca. Também dedico
                meu tempo livre para estudar Programação, música e tecnologia, buscando constantemente me atualizar.
              </p>

              <div className="pt-4">
                <h3 className="text-[#ccd6f6] font-mono text-sm mb-3">
                  Especialidades:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "SQL Server Replication",
                    "Log Shipping",
                    "Disaster Recovery",
                    "Tuning",
                    "Liderança",
                    "Customer Success"
                  ].map((tech, i) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="text-sm text-[#8892b0] flex items-center gap-2"
                    >
                      <span className="text-purple-500">▹</span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group mx-auto"
          >
            {/* Semi-circle border */}
            <div 
              className="absolute w-[calc(100%+4rem)] h-[calc(100%+4rem)] -top-8 -left-8"
              style={{
                borderTop: '3px solid rgba(40, 170, 235, 0.6)',
                borderLeft: '3px solid rgba(40, 170, 235, 0.6)',
                borderRight: '3px solid rgba(40, 170, 235, 0.6)',
                borderRadius: '100% 100% 0 0'
              }}
            />
            
            {/* Inner container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-full">
                <img
                  src="/profile.png"
                  alt="Gustavo Larocca"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
