import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

const navItems = [
  { name: "Início", href: "#hero", number: "" },
  { name: "Sobre Mim", href: "#about", number: "01" },
  { name: "Experiência", href: "#experiencia", number: "02" },
  { name: "Tecnologias", href: "#tech", number: "03" },
  { name: "Projetos", href: "#projetos", number: "04" },
  { name: "Vamos Conversar", href: "#contact", number: "05" },
];

export type NavItem = {
  name: string;
  href: string;
  number: string;
};

export { navItems };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const [headerBackdropBlur, setHeaderBackdropBlur] = useState("none");
  const [headerShadow, setHeaderShadow] = useState("none");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHeaderBackground("rgba(0, 0, 0, 0.8)");
        setHeaderBackdropBlur("blur(8px)");
        setHeaderShadow("0 10px 30px -10px rgba(0, 0, 0, 0.7)");
      } else {
        setHeaderBackground("transparent");
        setHeaderBackdropBlur("none");
        setHeaderShadow("none");
      }

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 bg-black backdrop-blur-md h-[60px] transition-all duration-300`}
        style={{
          backgroundColor: headerBackground,
          backdropFilter: headerBackdropBlur,
          WebkitBackdropFilter: headerBackdropBlur,
          boxShadow: headerShadow,
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 pointer-events-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute -inset-2 rounded-lg bg-[#28AAEB]/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative text-xl font-bold text-[#28AAEB]">
                GL
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm hover:text-[#28AAEB] transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-[#28AAEB]'
                      : 'text-[#ccd6f6]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      const navbarHeight = 100; // Altura do navbar + espaço extra
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  {item.number && (
                    <span className="text-[#28AAEB]">{item.number}.</span>
                  )} {item.name}
                </a>
              ))}

              {/* Botão do Currículo */}
              <motion.a
                href="/CV Gustavo Larocca.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#28AAEB] text-[#28AAEB] rounded hover:bg-[#28AAEB]/10 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              >
                Currículo
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-1.5 text-[#28AAEB] hover:bg-[#28AAEB]/10 rounded-lg transition-colors md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Sidebar for Mobile */}
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}
