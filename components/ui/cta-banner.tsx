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
  variant?: "beige" | "twilight" | "white";
  className?: string;
};

const variantClasses = {
  beige: "border-border bg-beige/35 text-heading",
  twilight: "border-twilight bg-twilight text-white",
  white: "border-border bg-white text-heading",
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
  const isTwilight = variant === "twilight";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[28px] border p-8 md:p-12",
        variantClasses[variant],
        className,
      )}
    >
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-4">
          {eyebrow ? (
            <p
              className={cn(
                "font-subheading text-xs font-semibold tracking-[0.12em] uppercase",
                isTwilight ? "text-beige" : "text-twilight",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <Heading
            as="h2"
            size="h2"
            className={cn(isTwilight && "text-white")}
          >
            {title}
          </Heading>
          {description ? (
            <Text
              size="lg"
              className={cn(isTwilight ? "text-white/80" : "text-body")}
            >
              {description}
            </Text>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LuxuryButton
            href={primaryHref}
            variant={isTwilight ? "gold" : "primary"}
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryLabel}
          </LuxuryButton>
          {secondaryLabel && secondaryHref ? (
            <LuxuryButton
              href={secondaryHref}
              variant={isTwilight ? "secondary" : "secondary"}
              size="lg"
              className={cn(
                "w-full sm:w-auto",
                isTwilight && "border-white/30 text-white hover:bg-white/10",
              )}
            >
              {secondaryLabel}
            </LuxuryButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
