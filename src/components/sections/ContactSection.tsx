import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Efeito de círculos pulsantes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#64ffda]/20"
            initial={{ width: 100, height: 100, opacity: 0 }}
            animate={{
              width: [100, 500],
              height: [100, 500],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            className="font-mono text-[#64ffda] mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            04. Próximos Passos?
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vamos Conversar!
          </motion.h2>
          <motion.p
            className="text-[#8892b0] mb-12 text-lg"
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
            whileHover={{ scale: 1.1 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 relative overflow-hidden group"
              asChild
            >
              <a href="mailto:gustavo@example.com" className="relative z-10">
                Diga Olá!
                <motion.div
                  className="absolute inset-0 bg-[#64ffda]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
