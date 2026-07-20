import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading tracking-tight text-heading", {
  variants: {
    size: {
      displayXl: "text-display-xl font-medium",
      display: "text-display font-medium",
      hero: "text-hero font-medium",
      h1: "text-[clamp(2.25rem,4vw,3.5rem)] font-medium",
      h2: "text-[clamp(2rem,3.5vw,3rem)] font-medium",
      h3: "text-[clamp(1.75rem,3vw,2.5rem)] font-medium",
      h4: "text-[clamp(1.5rem,2.5vw,2rem)] font-medium",
      h5: "text-xl font-medium md:text-2xl",
      h6: "text-lg font-medium md:text-xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "h2",
    align: "left",
  },
});

const textVariants = cva("text-body", {
  variants: {
    size: {
      lg: "text-lg leading-[1.7]",
      base: "text-base leading-[1.7]",
      sm: "text-sm leading-[1.6]",
      caption: "text-xs leading-[1.6] text-muted",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type HeadingProps = VariantProps<typeof headingVariants> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: ReactNode;
  className?: string;
};

export function Heading({ as, size, align, children, className }: HeadingProps) {
  const classes = cn(headingVariants({ size, align }), className);
  const tag = as ?? sizeToElement(size);

  switch (tag) {
    case "h1":
      return <h1 className={classes}>{children}</h1>;
    case "h2":
      return <h2 className={classes}>{children}</h2>;
    case "h3":
      return <h3 className={classes}>{children}</h3>;
    case "h4":
      return <h4 className={classes}>{children}</h4>;
    case "h5":
      return <h5 className={classes}>{children}</h5>;
    case "h6":
      return <h6 className={classes}>{children}</h6>;
    default:
      return <p className={classes}>{children}</p>;
  }
}

function sizeToElement(size: HeadingProps["size"]): ElementType {
  switch (size) {
    case "displayXl":
    case "display":
    case "hero":
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    default:
      return "h2";
  }
}

type TextProps = VariantProps<typeof textVariants> & {
  as?: "p" | "span" | "div";
  children: ReactNode;
  className?: string;
};

export function Text({
  as: Component = "p",
  size,
  align,
  children,
  className,
}: TextProps) {
  return (
    <Component className={cn(textVariants({ size, align }), className)}>
      {children}
    </Component>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gold" | "light";
};

export function Eyebrow({ children, className, variant = "default" }: EyebrowProps) {
  const variantClasses = {
    default: "text-spruce",
    gold: "text-gold",
    light: "text-beige",
  };

  return (
    <p
      className={cn(
        "flex items-center gap-3 font-subheading text-xs font-semibold tracking-[0.16em] uppercase",
        variantClasses[variant],
        className,
      )}
    >
      <span className="gold-line shrink-0" aria-hidden />
      {children}
    </p>
  );
}
