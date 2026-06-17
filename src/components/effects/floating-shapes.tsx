"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 8 },
  { size: 40, x: "80%", y: "15%", delay: 1, duration: 10 },
  { size: 80, x: "70%", y: "60%", delay: 2, duration: 12 },
  { size: 30, x: "20%", y: "70%", delay: 0.5, duration: 9 },
  { size: 50, x: "50%", y: "40%", delay: 1.5, duration: 11 },
  { size: 35, x: "90%", y: "80%", delay: 2.5, duration: 7 },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
