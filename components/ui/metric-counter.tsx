"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MetricCounterProps = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
};

function animateValue(
  start: number,
  end: number,
  duration: number,
  onUpdate: (value: number) => void,
) {
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    onUpdate(Math.round(start + (end - start) * eased));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export function MetricCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  className,
  duration = 1800,
}: MetricCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(0, value, duration, setDisplayValue);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, reducedMotion, value]);

  const renderedValue = reducedMotion ? value : displayValue;

  return (
    <div ref={ref} className={cn("text-center md:text-left", className)}>
      <p className="font-heading text-5xl font-medium tracking-tight text-heading md:text-6xl">
        {prefix}
        {renderedValue}
        {suffix}
      </p>
      <p className="mt-3 font-subheading text-xs font-semibold tracking-[0.12em] text-muted uppercase">
        {label}
      </p>
    </div>
  );
}

type MetricGridProps = {
  metrics: Array<Omit<MetricCounterProps, "className">>;
  className?: string;
};

export function MetricGrid({ metrics, className }: MetricGridProps) {
  return (
    <div className={cn("grid gap-10 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {metrics.map((metric) => (
        <MetricCounter key={metric.label} {...metric} />
      ))}
    </div>
  );
}
