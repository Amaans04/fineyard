"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { navigation, primaryCta, siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();

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

  // Close menu only when route changes — not when callback identity changes.
  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] lg:hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-twilight/20 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background px-6 py-8 shadow-2xl"
            initial={reducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="font-heading text-2xl font-semibold text-heading">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-full border border-border text-heading transition-colors hover:border-twilight/30 hover:bg-white"
                onClick={onClose}
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="flex flex-col gap-2 overflow-y-auto">
              {navigation.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.li
                    key={item.href}
                    initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block py-4 font-heading text-3xl font-medium tracking-tight transition-colors",
                        isActive ? "text-twilight" : "text-heading hover:text-twilight",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto space-y-6 pt-10">
              <LuxuryButton href={primaryCta.href} className="w-full" onClick={onClose}>
                {primaryCta.label}
              </LuxuryButton>
              <p className="text-sm text-muted">{siteConfig.contact.email}</p>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

type HeaderBarProps = {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
};

function HeaderBar({ onMenuToggle, isMenuOpen }: HeaderBarProps) {
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
                    isActive ? "text-twilight" : "text-heading/80 hover:text-twilight",
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

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="relative z-10 flex size-11 touch-manipulation items-center justify-center rounded-full border border-border bg-background/80 text-heading transition-colors hover:border-twilight/30 hover:bg-white lg:hidden"
          onClick={onMenuToggle}
        >
          {isMenuOpen ? (
            <X className="size-5" strokeWidth={1.5} />
          ) : (
            <Menu className="size-5" strokeWidth={1.5} />
          )}
        </button>
      </div>
    </>
  );
}

function HeaderShell({
  isScrolled,
  isHidden,
}: {
  isScrolled: boolean;
  isHidden: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

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
            "border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500",
            isScrolled || menuOpen
              ? "border-border/80 bg-background/90 shadow-[0_8px_32px_rgba(31,25,100,0.06)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Container
            as="div"
            className="relative flex h-[88px] items-center justify-between"
          >
            <HeaderBar onMenuToggle={toggleMenu} isMenuOpen={menuOpen} />
          </Container>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  );
}

export function Header() {
  const { isScrolled, isHidden } = useScrollPosition();

  return <HeaderShell isScrolled={isScrolled} isHidden={isHidden} />;
}
