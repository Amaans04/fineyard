import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "rounded-[20px] border transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default:
          "ios-glass-card shadow-[0_8px_32px_rgba(3,87,24,0.08)]",
        solid: "border-border/80 bg-white/90 shadow-[0_8px_32px_rgba(3,87,24,0.06)] backdrop-blur-sm",
        beige: "border-border/60 bg-beige/40",
        elevated:
          "border-border bg-white shadow-[0_20px_60px_rgba(31,25,100,0.08)]",
      },
      padding: {
        none: "p-0",
        sm: "p-6",
        md: "p-8",
        lg: "p-10",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(31,25,100,0.1)]",
      },
    },
    defaultVariants: {
      variant: "solid",
      padding: "md",
      hover: "none",
    },
  },
);

type GlassCardProps = VariantProps<typeof glassCardVariants> & {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className,
  variant,
  padding,
  hover,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component className={cn(glassCardVariants({ variant, padding, hover }), className)}>
      {children}
    </Component>
  );
}

export { glassCardVariants };
