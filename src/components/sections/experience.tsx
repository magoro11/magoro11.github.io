"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Code, Users, GitBranch, GraduationCap, Wifi } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceItems } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

const typeIcons = {
  project:    Code,
  freelance:  Briefcase,
  leadership: Users,
  opensource: GitBranch,
  internship: GraduationCap,
  networking: Wifi,
};

const typeLabels: Record<string, string> = {
  project:    "Project",
  freelance:  "Freelance",
  leadership: "Leadership",
  opensource: "Open Source",
  internship: "Internship",
  networking: "Networking",
};

export function Experience() {
  const { t } = useI18n();
  const [expandedId, setExpandedId] = useState<string | null>(experienceItems[0]?.id ?? null);

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="space-y-3">
          {experienceItems.map((item, i) => {
            const Icon = typeIcons[item.type];
            const isOpen = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : item.id)}
                  className={cn(
                    "w-full text-left cursor-pointer rounded-xl border transition-colors duration-150",
                    isOpen
                      ? "border-[--border-2] bg-[--surface]"
                      : "border-[--border] bg-[--surface] hover:border-[--border-2]"
                  )}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    {/* Icon */}
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center border border-[--border-2] shrink-0"
                      style={{ background: "var(--accent-glow)" }}
                    >
                      <Icon size={16} className="text-[--accent-light]" />
                    </div>

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                        <span className="font-semibold text-[--text-primary] text-sm">{item.title}</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-[--border] text-[--text-muted]">
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-[--text-muted]">
                        <span>{item.organization}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[--text-muted] shrink-0"
                    >
                      <ChevronDown size={17} />
                    </motion.div>
                  </div>

                  {/* Expanded */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-[--border]">
                          <p className="text-[--text-secondary] text-sm leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {item.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2.5 text-sm text-[--text-muted]">
                                <span
                                  className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: "var(--accent-light)" }}
                                  aria-hidden="true"
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                          {item.technologies && (
                            <div className="flex flex-wrap gap-1.5">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded text-[10px] font-medium border border-[--border-2] text-[--text-muted]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
