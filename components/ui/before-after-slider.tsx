"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const startDrag = useCallback(
    (clientX: number) => {
      setIsDragging(true);
      updatePosition(clientX);
    },
    [updatePosition],
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(0, value - 2));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(100, value + 2));
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/10] cursor-ew-resize overflow-hidden rounded-[24px] border border-border bg-white select-none",
        className,
      )}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        startDrag(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!isDragging) return;
        updatePosition(event.clientX);
      }}
      onPointerUp={(event) => {
        setIsDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => setIsDragging(false)}
    >
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.2)]"
        style={{ left: `${position}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKeyDown}
        onPointerDown={(event) => {
          event.stopPropagation();
          event.currentTarget.setPointerCapture(event.pointerId);
          startDrag(event.clientX);
        }}
        className="absolute top-1/2 z-20 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-gold/50 bg-spruce text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        style={{ left: `${position}%`, touchAction: "none" }}
      >
        <span className="font-subheading text-[10px] font-semibold tracking-wider">
          ⇆
        </span>
      </div>

      <span className="absolute top-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-sm">
        {afterLabel}
      </span>
    </div>
  );
}
