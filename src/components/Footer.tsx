import React from 'react';
import Grid from './Grid';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/profile.php?id=100002131132382',
    label: 'Facebook'
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com/GustavoLarocca1',
    label: 'Twitter'
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/guh.larocca/',
    label: 'Instagram'
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/gustavo-larocca-39b068ba/',
    label: 'LinkedIn'
  }
];

const Footer = () => {
  return (
    <footer className="relative h-[150px] bg-[#050B18] overflow-hidden">
      <Grid />
      <article id="wrap" className="absolute inset-0">
        <article id="lightings">
          <section id="one">
            <section id="two">
              <section id="three">
                <section id="four">
                  <section id="five"></section>
                </section>
              </section>
            </section>
          </section>
        </article>
      </article>
      
      {/* Social Links */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-center items-center p-6 bg-gradient-to-t from-black/30">
        <div className="flex gap-6 mb-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                y: -3,
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="group relative"
              aria-label={social.label}
            >
              <div className="absolute -inset-2 rounded-full bg-[#28AAEB]/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <social.icon className="w-6 h-6 text-[#28AAEB] relative z-10 transition-colors duration-300 hover:text-[#28AAEB]" />
            </motion.a>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: socialLinks.length * 0.1 }}
          className="text-[#8892b0] text-sm"
        >
          <a
            href="https://github.com/GustavoLarocca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#28AAEB] transition-colors duration-300"
          >
            Desenvolvido por Gustavo Larocca
          </a>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
