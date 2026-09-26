"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const coursework = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Object-Oriented Programming",
  "Operating Systems",
  "Networking",
  "Data Science",
  "Routing & Switching",
];

export function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education & Certifications" subtitle="Foundations for building dependable systems" />
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">
          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl border border-[--border] bg-[--surface]"
          >
            <GraduationCap size={22} className="text-[--accent-light] mb-5" />
            <p className="text-xs uppercase tracking-[0.14em] text-[--text-muted] mb-2">B.Sc. Software Engineering</p>
            <h3 className="text-xl font-semibold text-[--text-primary] mb-6">Zetech University</h3>
            <p className="text-xs uppercase tracking-[0.14em] text-[--text-muted] mb-3">Relevant coursework</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-md border border-[--border-2] text-xs text-[--text-secondary]">{item}</span>
              ))}
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl border border-[--border] bg-[--surface]"
          >
            <Award size={22} className="text-[--accent-light] mb-5" />
            <p className="text-xs uppercase tracking-[0.14em] text-[--text-muted] mb-4">Certifications</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[--text-primary]">Introduction to Modern AI</h3>
                <p className="text-sm text-[--text-muted] mt-1">Cisco Networking Academy · 2026</p>
              </div>
              <div className="border-t border-[--border] pt-4">
                <h3 className="font-semibold text-[--text-primary]">AWS Certified Cloud Practitioner</h3>
                <p className="text-sm text-[--accent-light] mt-1">In Progress</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}