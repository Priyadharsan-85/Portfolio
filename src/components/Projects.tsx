"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-card/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-2">
            Selected Work<span className="text-accent">.</span>
          </h2>
          <div className="w-24 h-2 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-background border border-border p-8 flex flex-col h-full hover:border-accent transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-accent group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 z-10" />

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors">
                    <FiGithub size={24} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors">
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <p className="text-foreground/70 font-sans mb-8 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 bg-border text-foreground/80 lowercase tracking-wider border border-transparent group-hover:border-accent/40 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
