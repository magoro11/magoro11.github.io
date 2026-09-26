"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { id: "experiences", value: 4, suffix: "+", label: "Development experiences" },
  { id: "projects", value: 5, suffix: "+", label: "Major projects" },
  { id: "stack", value: "Full-Stack + Backend", suffix: "", label: "" },
  { id: "ai-data", value: "AI & Data Engineering", suffix: "", label: "" },
];

const milestones = [
  { year: "2025", title: "Systems & Networking", detail: "Built practical experience across IT operations, Wi-Fi, CCTV, and web administration." },
  { year: "2026", title: "Full-Stack Engineering", detail: "Shipped production features across React, Node.js, APIs, databases, and cloud tooling." },
  { year: "Now", title: "AI-Adjacent Products", detail: "Building Project LOOP, a multi-tenant feedback-intelligence platform powered by Claude AI." },
  { year: "Next", title: "Data & Systems", detail: "Growing toward reliable full-stack and AI-adjacent engineering work end to end." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5 } },
};

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: copy + stats ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-5"
          >
            <motion.p variants={fadeUp} className="text-[--text-secondary] text-lg leading-relaxed">
              {t.about.p1}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[--text-secondary] leading-relaxed">
              {t.about.p2}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[--text-secondary] leading-relaxed">
              {t.about.p3}
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl border border-[--border] bg-[--surface] text-center"
                >
                  <p className="text-2xl font-bold text-[--text-primary] tracking-tight">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-[--text-muted] mt-1 leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: timeline ── */}
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Line */}
                {i < milestones.length - 1 && (
                  <div
                    className="absolute left-[27px] top-10 bottom-0 w-px"
                    style={{ background: "linear-gradient(to bottom, var(--border-2), transparent)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Year badge */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    className="w-14 h-8 rounded-lg text-xs font-semibold flex items-center justify-center border border-[--border-2] text-[--accent-light]"
                    style={{ background: "var(--accent-glow)" }}
                  >
                    {m.year}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-[--text-primary] font-semibold mb-1">{m.title}</h3>
                  <p className="text-[--text-muted] text-sm leading-relaxed">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
