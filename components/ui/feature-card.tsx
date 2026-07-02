import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { GlassCard } from "@/components/ui/glass-card";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  accent?: boolean;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  accent = false,
}: FeatureCardProps) {
  return (
    <GlassCard
      as="article"
      hover="lift"
      className={cn(
        "group h-full",
        accent && "hover:border-gold/40",
        className,
      )}
    >
      {Icon ? (
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-border bg-background transition-all duration-300 group-hover:border-gold/30 group-hover:bg-beige/30">
          <Icon
            className="size-5 text-twilight transition-transform duration-300 group-hover:rotate-6"
            strokeWidth={1.5}
          />
        </div>
      ) : null}
      <Heading as="h3" size="h5" className="mb-3">
        {title}
      </Heading>
      <Text size="base">{description}</Text>
    </GlassCard>
  );
}

type FeatureCardGridProps = {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
};

export function FeatureCardGrid({
  children,
  className,
  columns = 3,
}: FeatureCardGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-8", columnClasses[columns], className)}>
      {children}
    </div>
  );
}
