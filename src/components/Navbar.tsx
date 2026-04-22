"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple intersection logic for active links
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter">
          <span className="text-accent">[</span>G Priyadharsan<span className="text-accent">]</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                activeSection === link.href.substring(1) ? "text-accent" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-end md:items-start group cursor-default">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors duration-300">
              Available
            </span>
          </div>
          <div className="text-[10px] font-mono text-foreground/50 mt-1 uppercase tracking-widest">
            {time ? `IND // ${time}` : "SYNCING..."}
          </div>
        </div>
      </div>
    </nav>
  );
}
