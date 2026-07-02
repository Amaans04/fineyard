import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fine Yard",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
        compact
      />
      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-6">
          <Text>
            Content on this website is provided for general information about Fine
            Yard&apos;s interior design services. Project timelines, pricing, and
            scope are confirmed in writing during the consultation process.
          </Text>
          <Text>
            Images shown represent design direction and completed projects. Actual
            outcomes vary based on scope, materials, and site conditions.
          </Text>
        </div>
      </Section>
    </>
  );
}
