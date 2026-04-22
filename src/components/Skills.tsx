"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-right"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-2">
            Tech Stack<span className="text-accent">.</span>
          </h2>
          <div className="w-24 h-2 bg-accent ml-auto" />
        </motion.div>

        <div className="flex flex-col gap-16">
          {skills.map((category, idx) => (
            <div key={category.category} className="max-w-5xl">
              <h3 className="text-2xl font-mono tracking-widest uppercase mb-8 text-foreground/50 border-b border-border pb-4">
                [{category.category}]
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group relative p-6 bg-card border border-border flex flex-col items-center justify-center gap-4 hover:border-accent transition-all duration-300"
                  >
                    <skill.Icon className="text-4xl text-foreground/40 group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-12" />
                    <span className="font-bold tracking-wide group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                    <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
