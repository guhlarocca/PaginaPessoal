import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title = "Título do Projeto",
  description = "Uma breve descrição do projeto e suas principais características.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  tags = ["React", "TypeScript", "Tailwind"],
  githubUrl = "#",
  liveUrl = "#",
  featured = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative transition-all duration-300 hover:translate-y-[-5px] ${
        featured ? "md:grid md:grid-cols-12 items-center gap-4" : ""
      }`}
    >
      <div
        className={`relative z-10 ${
          featured ? "md:col-span-7 md:col-start-6" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-lg group">
          <div className="absolute inset-0 bg-[#64ffda]/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
          <img
            src={image}
            alt={title}
            className="w-full object-cover aspect-video filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className={`relative z-20 ${
          featured ? "md:col-span-7 md:col-start-1 md:row-start-1" : "mt-4"
        }`}
      >
        <div className={featured ? "text-right" : ""}>
          <p className="font-mono text-[#64ffda] text-sm mb-2 transition-transform duration-300 hover:translate-x-2">
            Projeto em Destaque
          </p>
          <h3 className="text-[#ccd6f6] text-2xl font-bold mb-4 hover:text-[#64ffda] transition-colors duration-300">
            {title}
          </h3>
          <div
            className={`bg-[#112240] p-6 rounded-lg ${
              featured ? "md:text-right" : ""
            } hover:bg-[#1d2d4a] transition-all duration-300 hover:translate-y-[-5px]`}
          >
            <p className="text-[#8892b0]">{description}</p>
          </div>
          <ul
            className={`flex flex-wrap gap-3 mt-4 ${
              featured ? "justify-end" : ""
            }`}
          >
            {tags.map((tag, index) => (
              <li
                key={index}
                className="font-mono text-sm text-[#8892b0] transition-all duration-300 hover:text-[#64ffda] hover:translate-y-[-2px]"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className={`flex gap-4 mt-4 ${featured ? "justify-end" : ""}`}>
            {[
              { icon: Github, url: githubUrl },
              { icon: ExternalLink, url: liveUrl },
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
