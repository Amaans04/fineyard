"use client";

import { cn } from "@/lib/utils";

type FilterChip = {
  id: string;
  label: string;
};

type FilterChipsProps = {
  items: FilterChip[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function FilterChips({
  items,
  activeId,
  onChange,
  className,
}: FilterChipsProps) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      role="tablist"
      aria-label="Filter options"
    >
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 font-subheading text-xs font-medium tracking-[0.06em] uppercase transition-all duration-300",
              isActive
                ? "border-twilight bg-twilight text-white shadow-[0_8px_24px_rgba(31,25,100,0.18)]"
                : "border-border bg-white text-body hover:border-twilight/30 hover:text-twilight",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
