"use client";

import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { MouseGlow } from "@/components/effects/mouse-glow";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { CommandPalette } from "@/components/features/command-palette";
import { Chatbot } from "@/components/features/chatbot";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { GitHubStats } from "@/components/sections/github-stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Blog } from "@/components/sections/blog";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useKeyboardShortcuts({
    onCommandPalette: useCallback(() => setCommandOpen(true), []),
    onToggleTheme: useCallback(
      () => setTheme(theme === "dark" ? "light" : "dark"),
      [setTheme, theme]
    ),
  });

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <MouseGlow />
      <ScrollProgress />
      <Navbar onOpenCommandPalette={() => setCommandOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubStats />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
