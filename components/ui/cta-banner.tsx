import type { ReactNode } from "react";

import { LuxuryButton } from "@/components/ui/luxury-button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "beige" | "twilight" | "white" | "premium";
  className?: string;
};

const variantClasses = {
  beige: "border-gold/20 bg-gradient-beige text-heading",
  twilight: "border-twilight bg-twilight text-white",
  white: "border-border bg-white text-heading luxury-shadow",
  premium:
    "border-gold/25 bg-transparent text-white shadow-[inset_0_1px_0_rgba(198,167,106,0.2)]",
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "beige",
  className,
}: CtaBannerProps) {
  const isDark = variant === "twilight" || variant === "premium";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border p-8 md:p-12",
        variantClasses[variant],
        className,
      )}
    >
      {variant === "premium" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        />
      ) : null}

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-4">
          {eyebrow ? (
            <p
              className={cn(
                "font-subheading text-xs font-semibold tracking-[0.12em] uppercase",
                isDark ? "text-gold" : "text-spruce",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <Heading
            as="h2"
            size="h2"
            className={cn(isDark && "text-white")}
          >
            {title}
          </Heading>
          {description ? (
            <Text
              size="lg"
              className={cn(isDark ? "text-white/80" : "text-body")}
            >
              {description}
            </Text>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LuxuryButton
            href={primaryHref}
            variant={isDark ? "gold" : "primary"}
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryLabel}
          </LuxuryButton>
          {secondaryLabel && secondaryHref ? (
            <LuxuryButton
              href={secondaryHref}
              variant={isDark ? "outline" : "secondary"}
              size="lg"
              className="w-full sm:w-auto"
            >
              {secondaryLabel}
            </LuxuryButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
