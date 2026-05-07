"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCheck, FiX } from "react-icons/fi";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    
    // NOTE: Access Key is securely fetched from environment variables
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        formRef.current?.reset();
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase mb-8">
            Let&apos;s Build <br className="hidden md:block" />
            <span className="text-accent">Something.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-mono text-foreground/60 mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to reality? Drop me a message and let&apos;s craft an experience.
          </p>

          <form ref={formRef} className="w-full max-w-2xl mx-auto flex flex-col gap-6 text-left mb-20" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-sm uppercase tracking-widest text-foreground/60 focus-within:text-accent transition-colors">Name</label>
              <input type="text" id="name" name="name" className="bg-background border-2 border-border p-4 text-foreground font-mono focus:outline-none focus:border-accent transition-colors w-full placeholder:text-foreground/20" placeholder="YOUR NAME" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-sm uppercase tracking-widest text-foreground/60 focus-within:text-accent transition-colors">Email</label>
              <input type="email" id="email" name="email" className="bg-background border-2 border-border p-4 text-foreground font-mono focus:outline-none focus:border-accent transition-colors w-full placeholder:text-foreground/20" placeholder="YOUR@EMAIL.COM" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm uppercase tracking-widest text-foreground/60 focus-within:text-accent transition-colors">Message</label>
              <textarea id="message" name="message" rows={5} className="bg-background border-2 border-border p-4 text-foreground font-sans focus:outline-none focus:border-accent transition-colors resize-none w-full placeholder:text-foreground/20" placeholder="Let's craft an experience..." required></textarea>
            </div>

            {error && (
              <div className="p-4 border border-red-500 bg-red-500/10 text-red-500 font-mono text-sm flex items-center gap-2">
                <FiX className="shrink-0" /> {error}
              </div>
            )}

            {isSuccess && (
              <div className="p-4 border border-accent bg-accent/10 text-accent font-mono text-sm flex items-center gap-2">
                <FiCheck className="shrink-0" /> Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 px-8 py-4 ${isSubmitting ? 'bg-border text-foreground/50 cursor-not-allowed' : 'bg-accent text-background hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0,255,135,0.6)] shadow-[0_0_20px_rgba(0,255,135,0.3)]'} font-bold text-lg uppercase tracking-wider transition-colors flex items-center justify-center gap-3 w-full group`}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <FiMail className="group-hover:-rotate-12 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="flex gap-8 justify-center">
            <a href="https://github.com/Priyadharsan-85" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-2">
              <FiGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/g-priyadharsan-42436a315?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-2">
              <FiLinkedin size={32} />
            </a>

          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-accent opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
