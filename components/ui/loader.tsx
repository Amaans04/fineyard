"use client";

import { cn } from "@/lib/utils";

type LoaderProps = {
  className?: string;
  label?: string;
  fullScreen?: boolean;
};

export function Loader({
  className,
  label = "Loading Fine Yard",
  fullScreen = false,
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-6",
        fullScreen && "fixed inset-0 z-[100] bg-background",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-transparent.png"
        alt=""
        aria-hidden
        className="h-12 w-auto animate-pulse object-contain md:h-14"
      />
      <div className="relative h-px w-32 overflow-hidden bg-border">
        <span className="absolute inset-y-0 left-0 w-1/2 animate-[loader-shimmer_1.2s_ease-in-out_infinite] bg-gold" />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
