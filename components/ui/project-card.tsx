import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  title: string;
  location: string;
  category: string;
  image: string;
  href: string;
  featured?: boolean;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({
  title,
  location,
  category,
  image,
  href,
  featured = false,
  className,
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-border bg-white",
        featured && "md:col-span-2 md:row-span-2",
        className,
      )}
    >
      <Link href={href} className="block">
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[16/10]" : "aspect-[4/5]",
          )}
        >
          <Image
            src={image}
            alt={`${title} — ${location}`}
            fill
            priority={priority}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-twilight/80 via-twilight/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="mb-2 font-subheading text-xs font-semibold tracking-[0.12em] text-beige uppercase">
              {category}
            </p>
            <h3 className="font-heading text-2xl font-medium text-white md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/80">{location}</p>
          </div>
          <div className="absolute top-6 right-6 flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
            <ArrowUpRight className="size-5" strokeWidth={1.5} />
          </div>
          <span className="absolute top-0 left-6 h-0 w-px bg-gold transition-all duration-500 group-hover:h-16" />
        </div>
      </Link>
    </article>
  );
}

export function ProjectCardSkeleton({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-border bg-white",
        featured && "md:col-span-2 md:row-span-2",
      )}
    >
      <div
        className={cn(
          "animate-pulse bg-divider",
          featured ? "aspect-[16/10]" : "aspect-[4/5]",
        )}
      />
      <div className="space-y-3 p-6">
        <div className="h-3 w-24 animate-pulse rounded bg-divider" />
        <div className="h-6 w-3/4 animate-pulse rounded bg-divider" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-divider" />
      </div>
    </div>
  );
}

export function ProjectCardEmpty() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-background p-8 text-center">
      <p className="font-heading text-2xl text-heading">Projects arriving soon</p>
      <p className="mt-3 max-w-sm text-body">
        Our portfolio is being curated. Check back shortly for our latest work.
      </p>
    </div>
  );
}
