"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setCurrent(next);
  }, []);

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = useCallback(() => go((current + 1) % testimonials.length, 1), [current, go]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const item = testimonials[current];

  return (
    <section id="testimonials" className="py-28 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />

        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-8 rounded-2xl border border-[--border] bg-[--surface]"
            >
              {/* Large opening quote mark */}
              <span
                className="block text-6xl leading-none font-serif mb-2 select-none"
                style={{ color: "var(--accent-glow)", fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="text-[--text-secondary] text-base leading-relaxed mb-8">
                {item.content}
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, #7c6af7, #6366f1)" }}
                  aria-hidden="true"
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="text-[--text-primary] font-semibold text-sm">{item.name}</p>
                  <p className="text-[--text-muted] text-xs">
                    {item.role}
                    <span aria-hidden="true"> · </span>
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className="cursor-pointer transition-all duration-200"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className="block rounded-full transition-all duration-200"
                    style={{
                      width:  i === current ? "20px" : "6px",
                      height: "6px",
                      background: i === current ? "var(--accent-light)" : "var(--border-2)",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-lg border border-[--border-2] flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:border-[--accent] transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-lg border border-[--border-2] flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:border-[--accent] transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
