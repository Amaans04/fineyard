"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
};

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const reducedMotion = useReducedMotion();
  const baseId = useId();

  const toggleItem = (id: string) => {
    setOpenItems((current) => {
      if (allowMultiple) {
        return current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id];
      }

      return current.includes(id) ? [] : [id];
    });
  };

  if (items.length === 0) {
    return (
      <div className="rounded-[20px] border border-dashed border-border p-8 text-center text-body">
        No questions available yet.
      </div>
    );
  }

  return (
    <div className={cn("divide-y divide-border rounded-[20px] border border-border bg-white", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const triggerId = `${baseId}-${item.id}-trigger`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id} className="px-6 md:px-8">
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-twilight"
              >
                <span className="font-heading text-xl font-medium text-heading md:text-2xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-twilight transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={1.5}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-base leading-relaxed text-body">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
