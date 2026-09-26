"use client";

import { useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Briefcase,
  Mail,
  BookOpen,
  Download,
  Sun,
  Moon,
  Search,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useTheme } from "next-themes";
import { projects } from "@/lib/data/projects";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { setTheme, theme } = useTheme();
  const [search, setSearch] = useState("");

  const navigate = useCallback(
    (href: string) => {
      onOpenChange(false);
      setSearch("");
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [onOpenChange]
  );

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg z-[90]"
          >
            <Command
              className="bg-[#12121a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              loop
            >
              <div className="flex items-center gap-3 px-4 border-b border-white/10">
                <Search size={18} className="text-white/40" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search navigation, projects, actions..."
                  className="w-full py-4 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-white/40 text-sm">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs text-white/40 px-2 py-1">
                  {[
                    { icon: Home, label: "Home", href: "#home" },
                    { icon: User, label: "About", href: "#about" },
                    { icon: Code, label: "Skills", href: "#skills" },
                    { icon: FolderOpen, label: "Projects", href: "#projects" },
                    { icon: Briefcase, label: "Experience", href: "#experience" },
                    { icon: Mail, label: "Contact", href: "#contact" },
                    { icon: BookOpen, label: "Blog", href: "#blog" },
                  ].map(({ icon: Icon, label, href }) => (
                    <Command.Item
                      key={href}
                      onSelect={() => navigate(href)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer data-[selected=true]:bg-cyan-500/10 data-[selected=true]:text-cyan-400"
                    >
                      <Icon size={16} />
                      {label}
                    </Command.Item>
                  ))}
                </Command.Group>

                {filteredProjects.length > 0 && (
                  <Command.Group heading="Projects" className="text-xs text-white/40 px-2 py-1 mt-2">
                    {filteredProjects.map((project) => (
                      <Command.Item
                        key={project.id}
                        onSelect={() => navigate("#projects")}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer data-[selected=true]:bg-cyan-500/10"
                      >
                        <FolderOpen size={16} />
                        {project.title}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}

                <Command.Group heading="Actions" className="text-xs text-white/40 px-2 py-1 mt-2">
                  <Command.Item
                    onSelect={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer data-[selected=true]:bg-cyan-500/10"
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    Toggle Theme
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open("/resume.pdf", "_blank");
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer"
                  >
                    <Download size={16} />
                    Download Resume
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open("https://github.com/magoro11", "_blank");
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer"
                  >
                    <GitHubIcon size={16} />
                    GitHub Profile
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open("https://www.linkedin.com/in/brighton-magoro-b3aa45364/", "_blank");
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer"
                  >
                    <LinkedInIcon size={16} />
                    LinkedIn Profile
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
