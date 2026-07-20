"use client";

import { useLenis } from "lenis/react";
import { useRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLenis((lenis) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${lenis.progress})`;
    }
  });

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      ref={barRef}
      aria-hidden
      className="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-gold will-change-transform"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
