import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fine Yard",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        compact
      />
      <Section background="white">
        <div className="prose-custom mx-auto max-w-3xl space-y-6">
          <Text>
            Fine Yard respects your privacy. Information submitted through our
            consultation form is used solely to respond to your inquiry and will
            not be shared with third parties without your consent.
          </Text>
          <Text>
            We may use cookies and analytics to improve website performance. You
            can contact us at hello@fineyard.in for any privacy-related questions.
          </Text>
        </div>
      </Section>
    </>
  );
}
