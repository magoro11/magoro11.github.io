"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Code, Users, GitBranch, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experienceItems } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

const typeIcons = {
  project: Code,
  freelance: Briefcase,
  leadership: Users,
  opensource: GitBranch,
  internship: GraduationCap,
};

const typeColors = {
  project: "from-cyan-500 to-blue-600",
  freelance: "from-purple-500 to-pink-600",
  leadership: "from-amber-500 to-orange-600",
  opensource: "from-green-500 to-emerald-600",
  internship: "from-blue-500 to-indigo-600",
};

export function Experience() {
  const { t } = useI18n();
  const [expandedId, setExpandedId] = useState<string | null>(experienceItems[0]?.id ?? null);

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent hidden sm:block" />

          {experienceItems.map((item, i) => {
            const Icon = typeIcons[item.type];
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full text-left cursor-pointer group"
                >
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div
                      className={cn(
                        "hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-r items-center justify-center shrink-0 ring-4 ring-[#0a0a0f] group-hover:scale-105 transition-transform",
                        typeColors[item.type]
                      )}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    <div className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-cyan-400 text-sm font-medium">{item.period}</span>
                          <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                          <p className="text-white/50 text-sm">{item.organization}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/40 mt-1"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/60 text-sm leading-relaxed mt-4 mb-4">
                              {item.description}
                            </p>
                            <ul className="space-y-2 mb-4">
                              {item.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className="text-white/50 text-sm flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                            {item.technologies && (
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <Badge key={tech}>{tech}</Badge>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
