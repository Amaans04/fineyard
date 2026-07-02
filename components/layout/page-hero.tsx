import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/breadcrumb";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  align = "left",
  className,
  compact = false,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        compact ? "pt-28 pb-16 md:pt-32" : "min-h-[70vh] pt-28 pb-20 md:min-h-[75vh] md:pt-32 md:pb-28",
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,248,0.94)_0%,rgba(250,250,248,0.82)_50%,rgba(31,25,100,0.12)_100%)]" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,232,193,0.45),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(31,25,100,0.06),transparent_35%)]"
        />
      )}

      <Container className="relative">
        {breadcrumbs ? (
          <Breadcrumb items={breadcrumbs} className="mb-8" />
        ) : null}

        <div className={cn("max-w-3xl space-y-6", isCenter && "mx-auto text-center")}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading as="h1" size={compact ? "h1" : "hero"} align={align}>
            {title}
          </Heading>
          {description ? (
            <Text size="lg" align={align} className={cn(isCenter && "mx-auto", "max-w-2xl")}>
              {description}
            </Text>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "flex flex-col gap-4 sm:flex-row",
                isCenter && "justify-center",
              )}
            >
              {primaryCta ? (
                <LuxuryButton href={primaryCta.href}>{primaryCta.label}</LuxuryButton>
              ) : null}
              {secondaryCta ? (
                <LuxuryButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </LuxuryButton>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function PageIntro({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-6 text-center", className)}>
      {title ? (
        <Heading as="h2" size="h3" align="center">
          {title}
        </Heading>
      ) : null}
      <Text size="lg" align="center">
        {children}
      </Text>
    </div>
  );
}

export function EditorialQuote({
  quote,
  className,
}: {
  quote: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "font-heading text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] font-medium tracking-tight text-heading",
        className,
      )}
    >
      {quote}
    </blockquote>
  );
}

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-subheading text-sm font-medium tracking-[0.04em] text-twilight uppercase transition-colors hover:text-gold"
    >
      {children}
    </Link>
  );
}
