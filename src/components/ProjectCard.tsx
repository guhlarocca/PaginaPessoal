import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  external: string;
  image: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tech,
  external,
  image,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-lg bg-black h-full transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-[300px]">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-purple-500 mix-blend-color opacity-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
          </div>
          
          {/* Content Overlay - Clickable */}
          <div className="absolute inset-0 z-20">
            <div className="h-full p-8 flex flex-col justify-end">
              {/* Title with Link */}
              <a
                href={external}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#e6f1ff] group-hover/link:text-purple-400">
                  {title}
                </h3>
                <ExternalLink 
                  size={18} 
                  className="text-purple-400 opacity-0 group-hover/link:opacity-100 transition-all duration-300" 
                />
              </a>

              {/* Description */}
              <p className="mt-4 text-[#a8b2d1] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="p-8 pt-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {tech.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * i }}
                className="text-xs font-mono text-[#a8b2d1] hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-purple-400 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
