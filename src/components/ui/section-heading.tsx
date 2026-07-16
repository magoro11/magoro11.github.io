"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  id,
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={`mb-14 ${isLeft ? "text-left" : "text-center"}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[--accent-light] mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--text-primary] tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
