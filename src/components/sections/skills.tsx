"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/data/skills";
import { Monitor, Server, Database, Wrench, Cloud } from "lucide-react";

const iconMap = { Monitor, Server, Database, Wrench, Cloud };

// Three tiers — removes the "I made up these percentages" feel
function tier(level: number): { label: string; color: string } {
  if (level >= 88) return { label: "Expert",        color: "text-[--accent-light] bg-[--accent-glow] border-[rgba(124,106,247,0.25)]" };
  if (level >= 78) return { label: "Proficient",    color: "text-[--text-secondary] bg-[--surface-2] border-[--border-2]" };
  return               { label: "Familiar",        color: "text-[--text-muted] bg-[--surface] border-[--border]" };
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Monitor;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.07, duration: 0.45 }}
                className="p-6 rounded-2xl border border-[--border] bg-[--surface] hover:border-[--border-2] transition-colors duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-[--border-2]"
                    style={{ background: "var(--accent-glow)" }}
                  >
                    <Icon size={17} className="text-[--accent-light]" />
                  </div>
                  <h3 className="font-semibold text-[--text-primary]">{cat.title}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const t = tier(skill.level);
                    return (
                      <span
                        key={`${cat.id}-${skill.name}`}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${t.color}`}
                        title={t.label}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[--border]">
                  {(["Expert", "Proficient", "Familiar"] as const).map((l) => {
                    const map: Record<string, string> = {
                      Expert:    "text-[--accent-light] bg-[--accent-glow]",
                      Proficient: "text-[--text-secondary] bg-[--surface-2]",
                      Familiar:  "text-[--text-muted] bg-[--surface]",
                    };
                    return (
                      <span key={l} className={`text-[10px] font-medium ${map[l]} px-2 py-0.5 rounded-full`}>
                        {l}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
