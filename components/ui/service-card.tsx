import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  href,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[20px] border border-border bg-white transition-all duration-300 hover:-translate-y-2 hover:border-twilight/20 hover:shadow-[0_20px_60px_rgba(31,25,100,0.08)]",
        className,
      )}
    >
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-twilight/10 transition-colors duration-300 group-hover:bg-twilight/20" />
          <span className="absolute top-5 left-5 font-heading text-5xl font-medium text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="space-y-3 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <Heading as="h3" size="h5">
              {title}
            </Heading>
            <ArrowUpRight
              className="size-5 shrink-0 text-twilight transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </div>
          <Text size="sm">{description}</Text>
        </div>
      </Link>
    </article>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-white">
      <div className="aspect-[16/10] animate-pulse bg-divider" />
      <div className="space-y-3 p-8">
        <div className="h-6 w-2/3 animate-pulse rounded bg-divider" />
        <div className="h-4 w-full animate-pulse rounded bg-divider" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-divider" />
      </div>
    </div>
  );
}
