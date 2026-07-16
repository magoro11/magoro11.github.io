"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(id);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(id);
  }, [onComplete]);

  const pct = Math.min(Math.floor(progress), 100);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: "var(--bg)" }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
            style={{ background: "linear-gradient(135deg, #7c6af7, #6366f1)" }}
          >
            BM
          </div>
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[--text-secondary] text-sm mb-8 tracking-wide"
        >
          Brighton Magoro
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-px bg-[--border] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #7c6af7, #6366f1)",
            }}
            transition={{ duration: 0.08 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
