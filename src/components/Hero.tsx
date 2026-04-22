"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MarqueeTicker from "./MarqueeTicker";
import { useState, useEffect } from "react";

const roles = [
  ["Full Stack", "Developer."],
  ["AI", "Builder."],
  ["Creative", "Thinker."]
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl">
          <div className="h-[120px] sm:h-[140px] md:h-[180px] lg:h-[240px] mb-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                  exit: {
                    opacity: 0,
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="absolute inset-0"
              >
                {roles[currentRoleIndex].map((line, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.h1
                      variants={{
                        hidden: { y: "100%" },
                        visible: { y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                        exit: { y: "-100%", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
                      }}
                      className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.9] uppercase"
                    >
                      {index === 1 ? <span className="text-accent">{line}</span> : line}
                    </motion.h1>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-3xl font-mono text-foreground/80 max-w-2xl mb-12 border-l-4 border-accent pl-6 py-2"
          >
            I build fast, scalable, and beautiful web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-accent text-background font-bold text-lg uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(0,255,135,0.3)] hover:shadow-[0_0_30px_rgba(0,255,135,0.6)]"
            >
              View Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/149TuOsusCrOk5a1ZPf8KGAwTcuuePynK/view?usp=drive_link"
              className="px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-bold text-lg uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <MarqueeTicker />
      </div>

      {/* Decorative brutalist background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 border border-border opacity-20 transform rotate-12 -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent opacity-5 transform rotate-45 -z-10" />
    </section>
  );
}
