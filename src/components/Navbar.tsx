import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 25, 47, 0)", "rgba(10, 25, 47, 0.85)"],
  );

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-6 py-4"
      style={{ background: headerBackground }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-[#64ffda] font-mono text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="relative group">
            GL
            <motion.div
              className="absolute -inset-1 border border-[#64ffda]/50 rounded opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-[#8892b0] hover:text-[#64ffda] font-mono text-sm relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <span className="text-[#64ffda] mr-2">{`0${i + 1}.`}</span>
              {item.name}
              <motion.div
                className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#64ffda] group-hover:w-full"
                transition={{ duration: 0.3 }}
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 font-mono text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Currículo
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-[#64ffda] z-50"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-[#0a192f]/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[#8892b0] hover:text-[#64ffda] font-mono text-lg"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <span className="text-[#64ffda] mr-2">{`0${i + 1}.`}</span>
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 font-mono text-lg"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Currículo
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
