"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const ROLES = [
  "Software Engineer",
  "Backend-Focused Full-Stack Engineer",
  "AI-Powered Application Builder",
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
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-16"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.18] pointer-events-none"
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
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 xl:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div className="max-w-2xl">

            {/* Availability pill */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-[0.14em] uppercase border border-[--border-2] text-[--text-secondary] mb-8">
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
              className="text-5xl sm:text-6xl lg:text-[5.2rem] font-bold text-[--text-primary] leading-[0.98] mb-6"
            >
              {t.hero.greeting}{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--accent-light) 0%, var(--accent) 65%, #c65a43 100%)",
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
              className="text-lg sm:text-xl text-[--accent-light] font-medium mb-6 h-7"
            >
              <RoleCycler />
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[--text-secondary] text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
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
                { Icon: GitHubIcon, href: "https://github.com/magoro11", label: "GitHub" },
                { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/brighton-magoro-b3aa45364/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:brightonmagoro@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                    className="w-9 h-9 rounded-lg border border-[--border-2] flex items-center justify-center text-[--text-muted] hover:text-[--accent-light] hover:border-[--accent] transition-colors duration-200"
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

          {/* ── Right: Engineering snapshot ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-[--border-2] bg-[--surface]/90 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[--border] text-[--text-muted] text-xs">
                <span className="w-2 h-2 rounded-full bg-[#e8845b]" />
                <span className="w-2 h-2 rounded-full bg-[#e8c45b]" />
                <span className="w-2 h-2 rounded-full bg-[#75b982]" />
                <span className="ml-2 font-mono">brighton.ts</span>
              </div>
              <pre className="p-6 text-[13px] leading-7 font-mono text-[--text-secondary] overflow-x-auto">
                <code>{`const engineer = {\n  focus: ["Backend", "AI", "Cloud"],\n  stack: ["TypeScript", "Python", "PostgreSQL"],\n  mindset: "Build. Test. Deploy. Improve."\n};`}</code>
              </pre>
              <div className="px-6 pb-5 flex items-center gap-2 text-xs text-[--accent-light]">
                <span className="w-1.5 h-1.5 rounded-full bg-[--success] animate-pulse" />
                Systems thinking in progress
              </div>
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
