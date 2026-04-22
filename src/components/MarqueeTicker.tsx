"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "REST APIs",
  "React", // Repeated for infinite scroll illusion
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "REST APIs",
];

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-accent text-background py-3 overflow-hidden border-y border-accent flex whitespace-nowrap relative z-10 font-bold font-mono tracking-widest uppercase text-sm">
      <motion.div
        className="flex gap-8 px-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-8">
            <span>{tech}</span>
            <span className="opacity-50">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
