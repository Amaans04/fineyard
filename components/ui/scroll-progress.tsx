"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLenis((lenis) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${lenis.progress})`;
    }
  });

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      if (!barRef.current) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

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
