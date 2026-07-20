"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { Container } from "@/components/layout/container";
import { useMobileNav } from "@/components/layout/mobile-nav-context";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { navigation, primaryCta, siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();
  const { open, close } = useMobileNav();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    close();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[110] lg:hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-twilight/30 backdrop-blur-md"
            onClick={close}
          />

          <motion.nav
            ref={navRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="ios-sheet absolute inset-x-0 bottom-0 flex max-h-[85svh] flex-col px-6 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            initial={reducedMotion ? false : { y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 38 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) close();
            }}
          >
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-border" aria-hidden />

            <div className="mb-6 flex items-center justify-between">
              <span className="font-heading text-2xl font-semibold text-heading">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-white/80 text-heading backdrop-blur-sm transition-colors active:scale-95"
                onClick={close}
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="flex flex-col gap-1 overflow-y-auto">
              {navigation.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.li
                    key={item.href}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-4 font-heading text-xl font-medium tracking-tight transition-colors active:scale-[0.99]",
                        isActive
                          ? "bg-spruce/10 text-spruce"
                          : "text-heading hover:bg-beige/40",
                      )}
                    >
                      {item.label}
                      {isActive ? (
                        <span className="size-2 rounded-full bg-gold" aria-hidden />
                      ) : null}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-6 space-y-4 border-t border-border/80 pt-6">
              <LuxuryButton href={primaryCta.href} className="w-full" onClick={close}>
                {primaryCta.label}
              </LuxuryButton>
              <p className="text-center text-sm text-muted">{siteConfig.contact.email}</p>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function HeaderBar() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className="relative z-10 flex shrink-0 items-center"
        aria-label={`${siteConfig.name} home`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-transparent.png"
          alt={siteConfig.name}
          className="h-10 w-auto object-contain md:h-11"
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ul className="flex items-center gap-8 xl:gap-10">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative py-2 font-subheading text-[13px] font-medium tracking-[0.04em] uppercase transition-colors",
                    isActive ? "text-spruce" : "text-heading/80 hover:text-spruce",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative z-10 flex items-center gap-3">
        <LuxuryButton
          href={primaryCta.href}
          size="sm"
          className="hidden sm:inline-flex"
        >
          {primaryCta.label}
        </LuxuryButton>
      </div>
    </>
  );
}

export function Header() {
  const { isScrolled, isHidden } = useScrollPosition();
  const { open } = useMobileNav();

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 will-change-transform transition-transform duration-500 ease-out",
          isHidden ? "lg:-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500",
            isScrolled || open
              ? "ios-glass-nav border-b border-white/20 shadow-[0_8px_32px_rgba(3,87,24,0.08)]"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <Container
            as="div"
            className="relative flex h-[72px] items-center justify-between lg:h-[88px]"
          >
            <HeaderBar />
          </Container>
        </div>
      </header>

      <MobileNav />
    </>
  );
}
