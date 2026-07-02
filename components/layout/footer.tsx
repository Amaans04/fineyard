import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { footerNavigation, primaryCta, siteConfig } from "@/config/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v6M8 8v.01M12 17v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedInIcon,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-8">
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-transparent.png"
                alt={siteConfig.name}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-body">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:text-twilight"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-subheading text-xs font-semibold tracking-[0.12em] text-muted uppercase">
              Company
            </h2>
            <ul className="space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-body transition-colors hover:text-twilight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-subheading text-xs font-semibold tracking-[0.12em] text-muted uppercase">
              Services
            </h2>
            <ul className="space-y-4">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-body transition-colors hover:text-twilight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 font-subheading text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                Stay Inspired
              </h2>
              <p className="mb-6 text-base leading-relaxed text-body">
                Receive curated design insights, material guides, and project
                stories from our studio.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="h-14 flex-1 rounded-2xl border border-border bg-background px-5 text-base text-heading outline-none transition-all placeholder:text-muted focus:border-twilight focus:ring-2 focus:ring-twilight/10"
                />
                <LuxuryButton type="submit" size="default">
                  Subscribe
                </LuxuryButton>
              </form>
            </div>

            <div className="space-y-4 text-base text-body">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 transition-colors hover:text-twilight"
              >
                <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-twilight"
              >
                <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[28px] border border-border bg-beige/35">
          <div className="flex min-h-[280px] flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl space-y-4">
              <p className="font-subheading text-xs font-semibold tracking-[0.12em] text-twilight uppercase">
                Begin Your Project
              </p>
              <h2 className="font-heading text-4xl font-medium tracking-tight text-heading md:text-5xl">
                Let&apos;s design a space that feels unmistakably yours.
              </h2>
            </div>
            <LuxuryButton href={primaryCta.href} size="lg">
              {primaryCta.label}
            </LuxuryButton>
          </div>
        </div>

        <div className="mt-16 aspect-[16/7] overflow-hidden rounded-[24px] border border-border bg-[linear-gradient(135deg,#F4E8C1_0%,#FAFAF8_45%,#ECECEC_100%)]">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <div className="space-y-2">
              <p className="font-subheading text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                Studio Location
              </p>
              <p className="font-heading text-2xl text-heading">
                {siteConfig.location.city}, {siteConfig.location.country}
              </p>
              <p className="text-sm text-body">
                Google Maps integration — Phase 5
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerNavigation.resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-twilight"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
