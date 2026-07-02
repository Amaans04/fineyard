import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { LuxuryButton } from "@/components/ui/luxury-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Fine Yard",
  description: "Join Fine Yard — a Bengaluru luxury interior design studio.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Beautiful Spaces With Us"
        description="We're always interested in meeting talented designers, project managers, and craftsmen who share our commitment to timeless design."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        compact
      />
      <Section background="white">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-body">
            We don&apos;t have open positions listed at the moment, but we welcome
            thoughtful introductions from people passionate about premium interiors.
          </p>
          <LuxuryButton href={`mailto:hello@fineyard.in?subject=Career Inquiry`}>
            Send Your Portfolio
          </LuxuryButton>
        </div>
      </Section>
    </>
  );
}
