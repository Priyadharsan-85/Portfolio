"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl border-l-2 border-border ml-6 md:ml-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pl-8 md:pl-16 relative"
        >
          <div className="absolute w-4 h-4 rounded-full bg-accent -left-[9px] top-4 shadow-[0_0_10px_#00ff87]" />
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-2">
            Experience<span className="text-accent">.</span>
          </h2>
          <div className="w-24 h-2 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-16 pl-8 md:pl-16">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute w-4 h-4 rounded-full bg-border group-hover:bg-accent transition-colors duration-300 -left-[41px] md:-left-[73px] top-2 group-hover:shadow-[0_0_15px_#00ff87]" />
              
              <div className="bg-card border border-border p-8 hover:border-accent transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-accent font-mono text-sm tracking-wider mt-2 md:mt-0 font-bold">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg font-mono text-foreground/60 uppercase tracking-widest mb-4">
                  {item.company}
                </h4>
                <p className="text-foreground/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
