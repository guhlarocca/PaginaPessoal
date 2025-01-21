import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import StarField from "../StarField";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[50vh] lg:min-h-[50vh] bg-[#050B18] py-12 px-6 sm:px-8 lg:px-16"
    >
      <StarField />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
              <span className="text-[#28AAEB] font-mono">05.</span> Vamos Conversar
            </h2>
            <div className="h-[1px] flex-grow bg-[#233554]" />
          </div>

          <div className="text-center space-y-4">
            <motion.p
              className="text-[#8892b0] text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Estou sempre aberto a novas oportunidades e desafios interessantes.
              Se você tem um projeto em mente ou só quer trocar uma ideia, minha
              caixa de entrada está sempre aberta!
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <a
                href="mailto:gustavo_larocca@hotmail.com"
                className="inline-block px-8 py-4 text-lg font-mono border-2 border-[#28AAEB] text-[#28AAEB] rounded hover:bg-[#28AAEB]/10 transition-colors duration-300"
              >
                Diga Olá
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
