"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

export type MaterialSwatchProps = {
  name: string;
  texture: string;
  description?: string;
  className?: string;
};

export function MaterialSwatch({
  name,
  texture,
  description,
  className,
}: MaterialSwatchProps) {
  return (
    <button
      type="button"
      className={cn(
        "group relative aspect-square overflow-hidden rounded-[20px] border border-border bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(31,25,100,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-twilight/40",
        className,
      )}
      aria-label={`View ${name} material`}
    >
      <Image
        src={texture}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-twilight/80 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-heading text-lg font-medium text-white">{name}</p>
        {description ? (
          <p className="mt-1 text-xs text-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        ) : null}
      </div>
    </button>
  );
}

type MaterialSwatchGridProps = {
  materials: MaterialSwatchProps[];
  className?: string;
};

export function MaterialSwatchGrid({ materials, className }: MaterialSwatchGridProps) {
  if (materials.length === 0) {
    return (
      <div className="rounded-[20px] border border-dashed border-border p-8 text-center text-body">
        Material library coming soon.
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7", className)}>
      {materials.map((material) => (
        <MaterialSwatch key={material.name} {...material} />
      ))}
    </div>
  );
}
