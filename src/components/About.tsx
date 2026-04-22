"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-2">
            Say my Name<span className="text-accent">.</span>
          </h2>
          <div className="w-24 h-2 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full group"
          >
            {/* Decorative brutalist background offset */}
            <div className="absolute inset-0 bg-accent transform translate-x-4 translate-y-4 border border-accent opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            
            <div className="absolute inset-0 bg-card border-2 border-border overflow-hidden hover:border-accent transition-colors duration-500 z-10 flex items-center justify-center">
              {/* NOTE: Replace this src with your own local photo, e.g., src="/profile.jpg" */}
              <img 
                src="./profile.jpeg" 
                alt="G Priyadharsan" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              
              {/* Brutalist accents */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-accent z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-accent z-20" />
            </div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl text-foreground font-mono leading-relaxed mb-8">
              I&apos;m an engineer who obsesses over <span className="text-accent">performance</span> and{" "}
              <span className="text-accent">design</span>. Specializing in modern web architectures, 
              I transform complex requirements into seamless, brutally effective products.
            </p>
            
            <p className="text-lg text-foreground/70 mb-12 max-w-lg">
              Beyond the visual aesthetic, I focus on scalable backend systems and state-of-the-art frontend tooling. No fluff, just clean code and high impact.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
              <div>
                <div className="text-5xl md:text-6xl font-black font-heading tracking-tighter mb-2 text-accent">
                  {/* Note: counting up requires more complex logic, keeping it simple but bold for now per brutalist style, or we can use Framer Motion useSpring later */}
                  10+
                </div>
                <div className="text-sm uppercase tracking-widest font-bold text-foreground/60">
                  Tech Stack
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black font-heading tracking-tighter mb-2 text-accent">
                  5+
                </div>
                <div className="text-sm uppercase tracking-widest font-bold text-foreground/60">
                  Projects Delivered
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
