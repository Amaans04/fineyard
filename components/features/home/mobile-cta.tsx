"use client";

import Link from "next/link";

import { LuxuryButton } from "@/components/ui/luxury-button";
import { primaryCta } from "@/config/site";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

export function MobileStickyCta() {
  const { scroll } = useScrollPosition();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-500 sm:hidden",
        scroll > 400 ? "translate-y-0" : "translate-y-full",
      )}
    >
      <LuxuryButton href={primaryCta.href} className="w-full">
        {primaryCta.label}
      </LuxuryButton>
    </div>
  );
}

export function MobileWhatsAppCta() {
  return (
    <Link
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-40 flex size-12 touch-manipulation items-center justify-center rounded-full bg-spruce text-sm text-white shadow-lg transition-transform active:scale-95 sm:hidden"
    >
      WA
    </Link>
  );
}
