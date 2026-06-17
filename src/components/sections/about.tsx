"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useParallax } from "@/hooks/useParallax";
import { GraduationCap, Lightbulb, Target, BookOpen } from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Projects" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Technologies" },
];

const timeline = [
  {
    year: "2021",
    title: "Started Programming Journey",
    description: "Discovered passion for software development and began learning fundamentals.",
    icon: BookOpen,
  },
  {
    year: "2022",
    title: "Diploma in Software Development",
    description: "Formal education in software engineering principles and best practices.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Full-Stack Development",
    description: "Expanded into React, Node.js, and modern web technologies.",
    icon: Lightbulb,
  },
  {
    year: "2024",
    title: "Professional Growth",
    description: "Freelance projects, open source contributions, and career advancement.",
    icon: Target,
  },
];

export function About() {
  const { t } = useI18n();
  const parallaxRef = useParallax(0.2);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-white/70 leading-relaxed text-lg">{t.about.p1}</p>
            <p className="text-white/70 leading-relaxed">{t.about.p2}</p>
            <p className="text-white/70 leading-relaxed">{t.about.p3}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16 pb-10 last:pb-0 group"
              >
                <div className="absolute left-3 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center ring-4 ring-[#0a0a0f] group-hover:scale-110 transition-transform">
                  <item.icon size={12} className="text-white" />
                </div>
                <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                <h3 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
