"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, projectCategories } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-muted]" />
            <input
              type="text"
              placeholder={t.projects.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[--surface] border border-[--border] rounded-lg text-[--text-primary] placeholder:text-[--text-muted] text-sm outline-none focus:border-[--accent] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 cursor-pointer",
                  activeCategory === cat.id
                    ? "border-[--accent] text-[--accent-light] bg-[--accent-glow]"
                    : "border-[--border] text-[--text-muted] hover:border-[--border-2] hover:text-[--text-secondary]"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group rounded-2xl border border-[--border] bg-[--surface] overflow-hidden hover:border-[--border-2] transition-colors duration-200"
              >
                {/* Gradient header — replaces missing images */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} relative`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  {/* Category chip */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-black/40 text-white/80 border border-white/10">
                    {project.category}
                  </span>
                  {/* Arrow icon top-right on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-[--text-primary] mb-1.5 group-hover:text-[--accent-light] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[--text-muted] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium border border-[--border-2] text-[--text-muted]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 text-xs">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[--accent-light] hover:underline"
                      >
                        <ExternalLink size={12} />
                        Live demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[--text-muted] hover:text-[--text-secondary] transition-colors"
                      >
                        <GitHubIcon size={12} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[--text-muted] py-16 text-sm">No projects match your filter.</p>
        )}
      </div>
    </section>
  );
}
