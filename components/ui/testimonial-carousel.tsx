"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { TestimonialCard, type TestimonialCardProps } from "@/components/ui/testimonial-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  items: TestimonialCardProps[];
  className?: string;
  autoPlayMs?: number;
};

export function TestimonialCarousel({
  items,
  className,
  autoPlayMs = 7000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, autoPlayMs);

    return () => window.clearInterval(timer);
  }, [autoPlayMs, items.length, reducedMotion]);

  if (items.length === 0) {
    return (
      <div className="rounded-[20px] border border-dashed border-border p-8 text-center text-body">
        Testimonials coming soon.
      </div>
    );
  }

  const goTo = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={`${item.name}-${item.location}`} className="w-full shrink-0 px-0.5">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 ? (
        <>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {items.map((item, dotIndex) => (
                <button
                  key={`${item.name}-dot`}
                  type="button"
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  onClick={() => goTo(dotIndex)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    dotIndex === index
                      ? "w-8 bg-twilight"
                      : "w-3 bg-border hover:bg-gold/60",
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(index - 1)}
                className="flex size-10 items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-twilight/30 hover:text-twilight"
              >
                <ChevronLeft className="size-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(index + 1)}
                className="flex size-10 items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-twilight/30 hover:text-twilight"
              >
                <ChevronRight className="size-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
