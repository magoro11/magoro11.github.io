"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { ThemeToggle } from "@/components/features/theme-toggle";
import { LanguageSwitcher } from "@/components/features/language-switcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "home"       as const, href: "#home" },
  { key: "about"      as const, href: "#about" },
  { key: "skills"     as const, href: "#skills" },
  { key: "projects"   as const, href: "#projects" },
  { key: "experience" as const, href: "#experience" },
  { key: "contact"    as const, href: "#contact" },
  { key: "blog"       as const, href: "#blog" },
] as const;

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for active section highlight
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.key);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[--bg]/85 backdrop-blur-xl border-b border-[--border] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="Brighton Magoro">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold tracking-tight transition-shadow duration-200 group-hover:shadow-[0_0_16px_rgba(124,106,247,0.4)]"
            style={{ background: "linear-gradient(135deg, #7c6af7, #6366f1)" }}
          >
            BM
          </div>
          <span className="font-semibold text-[--text-primary] text-sm hidden sm:block">Brighton</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-lg transition-colors duration-150",
                  isActive
                    ? "text-[--accent-light] bg-[--accent-glow]"
                    : "text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface]"
                )}
              >
                {t.nav[item.key]}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:flex items-center gap-2 px-2.5 py-1.5 text-xs text-[--text-muted] border border-[--border] rounded-lg hover:border-[--border-2] hover:text-[--text-secondary] transition-colors cursor-pointer"
            aria-label="Open command palette"
          >
            <Command size={13} />
            <span>⌘K</span>
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="lg:hidden p-1.5 text-[--text-secondary] hover:text-[--text-primary] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-[--border] bg-[--bg]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-2.5 text-sm rounded-lg transition-colors",
                      isActive
                        ? "text-[--accent-light] bg-[--accent-glow]"
                        : "text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface]"
                    )}
                  >
                    {t.nav[item.key]}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
