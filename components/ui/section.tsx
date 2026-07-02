import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "white" | "beige" | "twilight";
  spacing?: "default" | "compact" | "hero";
  containerSize?: "default" | "reading" | "hero";
  bordered?: boolean;
};

const backgroundClasses = {
  default: "bg-background",
  white: "bg-white",
  beige: "bg-beige/35",
  twilight: "bg-twilight text-white",
};

const spacingClasses = {
  default: "section-spacing",
  compact: "py-16 md:py-20",
  hero: "py-28 md:py-40",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  spacing = "default",
  containerSize = "default",
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        bordered && "border-y border-border",
        className,
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
