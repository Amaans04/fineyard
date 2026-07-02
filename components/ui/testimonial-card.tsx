import Image from "next/image";

import { GlassCard } from "@/components/ui/glass-card";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
  projectType: string;
  image?: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  location,
  projectType,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <GlassCard
      as="article"
      variant="solid"
      padding="lg"
      className={cn("flex h-full flex-col justify-between", className)}
    >
      <div>
        <span aria-hidden className="font-heading text-5xl leading-none text-gold/50">
          &ldquo;
        </span>
        <Text size="lg" className="mt-4 text-heading">
          {quote}
        </Text>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-border bg-beige/40">
          {image ? (
            <Image src={image} alt={name} fill className="object-cover" sizes="56px" />
          ) : (
            <div className="flex h-full items-center justify-center font-heading text-xl text-twilight">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-subheading text-sm font-semibold text-heading">{name}</p>
          <p className="text-sm text-muted">
            {location} · {projectType}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <GlassCard padding="lg" className="space-y-6">
      <div className="space-y-3">
        <div className="h-8 w-8 animate-pulse rounded bg-divider" />
        <div className="h-4 w-full animate-pulse rounded bg-divider" />
        <div className="h-4 w-full animate-pulse rounded bg-divider" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-divider" />
      </div>
      <div className="flex items-center gap-4 border-t border-border pt-6">
        <div className="size-14 animate-pulse rounded-full bg-divider" />
        <div className="space-y-2">
          <div className="h-4 w-28 animate-pulse rounded bg-divider" />
          <div className="h-3 w-36 animate-pulse rounded bg-divider" />
        </div>
      </div>
    </GlassCard>
  );
}
