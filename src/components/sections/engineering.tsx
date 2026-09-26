"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Compass, Hammer, Lightbulb, Rocket, Search, TestTube2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { number: "01", title: "Understand", detail: "Requirements and architecture", icon: Search },
  { number: "02", title: "Design", detail: "APIs, database schemas and system structure", icon: Compass },
  { number: "03", title: "Build", detail: "Frontend, backend and integrations", icon: Hammer },
  { number: "04", title: "Test", detail: "Validation, debugging and edge cases", icon: TestTube2 },
  { number: "05", title: "Deploy", detail: "CI/CD and cloud deployment", icon: Rocket },
  { number: "06", title: "Improve", detail: "Monitoring, performance and iteration", icon: Lightbulb },
];

export function Engineering() {
  return (
    <section id="engineering" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How I Build Software" subtitle="Engineering thinking over tech collecting" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[--border] bg-[--border]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-[--surface] p-6 min-h-44"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-[--accent-light]">{step.number}</span>
                  <Icon size={18} className="text-[--text-muted]" />
                </div>
                <h3 className="text-lg font-semibold text-[--text-primary] mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[--text-muted]">{step.detail}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[--text-muted]">
          <CheckCircle2 size={16} className="text-[--success]" />
          Maintainable systems are built through deliberate iteration.
        </div>
      </div>
    </section>
  );
}