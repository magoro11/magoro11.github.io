"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
    }
  }, [x, y]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] z-0 transition-transform duration-100 ease-out"
      style={{
        background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
