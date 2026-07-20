"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { heroLineVariants, luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "p" | "h1" | "h2";
};

export function TextReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={heroLineVariants}
      transition={{ duration: 0.9, ease: luxuryEase, delay }}
      className={cn("will-change-[transform,opacity]", className)}
    >
      {children}
    </Component>
  );
}

type SplitTextRevealProps = {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export function SplitTextReveal({
  text,
  className,
  lineClassName,
  delay = 0,
}: SplitTextRevealProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const line1 = words.slice(0, midpoint).join(" ");
  const line2 = words.slice(midpoint).join(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      <TextReveal as="span" delay={delay} className={cn("block", lineClassName)}>
        {line1}
      </TextReveal>
      {line2 ? (
        <TextReveal
          as="span"
          delay={delay + 0.12}
          className={cn("block", lineClassName)}
        >
          {line2}
        </TextReveal>
      ) : null}
    </span>
  );
}
