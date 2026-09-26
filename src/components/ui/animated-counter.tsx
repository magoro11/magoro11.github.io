"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = typeof value === "number" ? value : 0;
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && typeof value === "number") motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    if (typeof value !== "number") return;
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, value]);

  return (
    <motion.span ref={ref} className={className}>
      {typeof value === "string" ? value : `${numericValue}${suffix}`}
    </motion.span>
  );
}
