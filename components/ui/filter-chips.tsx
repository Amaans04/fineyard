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
  panelId?: string;
};

export function FilterChips({
  items,
  activeId,
  onChange,
  className,
  panelId = "filter-panel",
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
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 font-subheading text-xs font-medium tracking-[0.06em] uppercase transition-all duration-300",
              isActive
                ? "border-spruce bg-spruce text-white shadow-[0_8px_24px_rgba(3,87,24,0.22)]"
                : "border-border bg-white text-body hover:border-gold/40 hover:text-spruce",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
