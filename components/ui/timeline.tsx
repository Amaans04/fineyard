"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function Timeline({
  items,
  orientation = "vertical",
  className,
}: TimelineProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-[20px] border border-dashed border-border p-8 text-center text-body">
        Process details coming soon.
      </div>
    );
  }

  if (orientation === "horizontal") {
    return (
      <>
        {/* Mobile & tablet: vertical */}
        <ol className={cn("relative space-y-8 xl:hidden", className)}>
          <span className="absolute top-2 bottom-2 left-5 w-px bg-border" aria-hidden />
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.04}>
              <li className="relative pl-14">
                <span className="absolute top-1 left-0 flex size-10 items-center justify-center rounded-full border border-gold/30 bg-white font-subheading text-xs font-semibold text-spruce">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-medium text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        {/* Desktop: horizontal grid */}
        <div className={cn("relative hidden xl:block", className)}>
          <div className="absolute top-5 right-0 left-0 h-px bg-border" />
          <ol className="grid grid-cols-7 gap-6">
            {items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.04}>
                <li className="relative pt-1">
                  <span className="mb-4 flex size-10 items-center justify-center rounded-full border border-gold/30 bg-white font-subheading text-xs font-semibold text-spruce">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </>
    );
  }

  return (
    <ol className={cn("relative space-y-10", className)}>
      <span className="absolute top-2 bottom-2 left-5 w-px bg-border" aria-hidden />
      {items.map((item, index) => (
        <FadeIn key={item.id} delay={index * 0.06}>
          <li className="relative pl-14">
            <span className="absolute top-1 left-0 flex size-10 items-center justify-center rounded-full border border-gold/30 bg-white font-subheading text-xs font-semibold text-spruce">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-2xl font-medium text-heading">
              {item.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-body">
              {item.description}
            </p>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
