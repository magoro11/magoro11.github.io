"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParticleBackground } from "@/components/effects/particle-background";
import { FloatingShapes } from "@/components/effects/floating-shapes";
import Image from "next/image";

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 align-middle"
        />
      )}
    </span>
  );
}

export function Hero() {
  const { t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <ParticleBackground />
      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.hero.available}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/60 text-lg mb-2">
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {t.hero.name}
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl text-cyan-400/90 font-medium mb-6 h-8"
          >
            <TypewriterText text={t.hero.title} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <MagneticButton>
              <Button asChild size="lg">
                <a href="#projects">{t.hero.viewWork}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">{t.hero.getInTouch}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="glass" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download size={18} />
                  {t.hero.downloadResume}
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              { Icon: GitHubIcon, href: "https://github.com/brightonmagoro", label: "GitHub" },
              { Icon: LinkedInIcon, href: "https://linkedin.com/in/brightonmagoro", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:brightonmagoro@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <span className="flex items-center gap-1 text-white/40 text-sm ml-2">
              <MapPin size={14} />
              Nairobi, Kenya
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-xl"
            />
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-cyan-500/20"
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-600/30 via-blue-700/30 to-purple-700/30 flex items-center justify-center">
                <Image
                  src="/profile.svg"
                  alt="Brighton Magoro - Software Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
