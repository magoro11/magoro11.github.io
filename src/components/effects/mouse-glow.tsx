"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x - 180}px, ${y - 180}px)`;
    }
  }, [x, y]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[360px] h-[360px] rounded-full z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(124,106,247,0.10) 0%, rgba(99,102,241,0.05) 45%, transparent 70%)",
        filter: "blur(40px)",
        transition: "transform 120ms linear",
      }}
      aria-hidden="true"
    />
  );
}
