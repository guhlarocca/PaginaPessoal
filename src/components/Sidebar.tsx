import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { NavItem } from "./Navbar";
import "../styles/sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

const MobileSpaceShip = () => {
  return (
    <motion.div
      className="absolute bottom-20 right-8 w-full pointer-events-none z-0 opacity-40"
      animate={{
        x: [-50, 50],
        y: [-20, 20]
      }}
      transition={{
        x: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }
      }}
    >
      <img
        src="/nave.png"
        alt="Nave Espacial"
        className="w-32 h-auto ml-auto"
        style={{
          filter: 'drop-shadow(0 0 20px rgb(40, 170, 235))'
        }}
      />
    </motion.div>
  );
};

export function Sidebar({ isOpen, onClose, navItems, activeSection }: SidebarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      onClose();
      setTimeout(() => {
        const navbarHeight = 100;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={isOpen ? { x: 0 } : { x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-y-0 right-0 w-[75%] bg-black shadow-lg z-50"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#28AAEB]/5 to-transparent" />
            </div>

            <div className="relative flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8 relative">
                <MobileSpaceShip />
                <div className="space-y-6">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`block relative group ${
                        activeSection === item.href.replace("#", "")
                          ? "menu-item-active"
                          : "text-white/70 px-4 py-2"
                      }`}
                      onClick={(e) => handleClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="relative font-mono text-base group-hover:text-[#28AAEB] transition-colors duration-300">
                        <span className={`mr-3 ${activeSection === item.href.replace("#", "") ? "text-[#28AAEB]" : "text-[#28AAEB]/70 group-hover:text-[#28AAEB]"}`}>
                          {item.number}.
                        </span>
                        {item.name}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="/CV Gustavo Larocca.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-[#28AAEB] text-[#28AAEB] rounded hover:bg-[#28AAEB]/10 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                >
                  Currículo
                </motion.a>
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}