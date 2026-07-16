"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Image from "next/image";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
];

function RoleCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
    >
      {ROLES[index]}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.35] pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial fade over grid at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, var(--bg) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="max-w-2xl">

            {/* Availability pill */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-[--border-2] text-[--text-secondary] mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[--success]"
                  style={{ boxShadow: "0 0 6px var(--success)" }}
                />
                {t.hero.available}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[--text-primary] leading-[1.08] mb-5"
            >
              {t.hero.greeting}{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #a99ff5 0%, #7c6af7 50%, #6366f1 100%)",
                }}
              >
                Brighton
                <br />
                Magoro
              </span>
            </motion.h1>

            {/* Role cycler */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl text-[--text-secondary] font-medium mb-6 h-7"
            >
              <RoleCycler />
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[--text-secondary] text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
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
                <Button variant="ghost" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download size={16} />
                    {t.hero.downloadResume}
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {[
                { Icon: GitHubIcon, href: "https://github.com/brightonmagoro", label: "GitHub" },
                { Icon: LinkedInIcon, href: "https://linkedin.com/in/brightonmagoro", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[--border-2] flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:border-[--accent] transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
              <span className="flex items-center gap-1.5 text-[--text-muted] text-sm ml-1">
                <MapPin size={13} />
                Nairobi, Kenya
              </span>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">
              {/* Accent ring */}
              <div
                className="absolute -inset-px rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,106,247,0.5) 0%, rgba(99,102,241,0.15) 60%, transparent 100%)",
                  borderRadius: "18px",
                }}
                aria-hidden="true"
              />
              {/* Photo frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[--border-2] bg-[--surface]">
                <Image
                  src="/profile.svg"
                  alt="Brighton Magoro — Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Small floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl border border-[--border-2] bg-[--surface] text-xs text-[--text-secondary] font-medium shadow-lg"
              >
                25+ projects shipped
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[--text-muted] hover:text-[--text-secondary] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
