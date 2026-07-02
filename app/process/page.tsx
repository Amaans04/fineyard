import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { Text } from "@/components/ui/typography";
import { sampleImages, sampleProcess } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Interior Design Process | Fine Yard",
  description:
    "Discover Fine Yard's calm, structured interior design process — from consultation and concept to execution and handover.",
};

const processDetails = sampleProcess.map((step, index) => ({
  ...step,
  description: [
    "We begin by understanding your lifestyle, preferences, and project goals.",
    "A tailored design direction takes shape through mood boards and spatial ideas.",
    "Layouts are refined for flow, function, and furniture placement.",
    "3D visualizations help you experience the space before execution.",
    "Materials and finishes are curated for beauty and longevity.",
    "Our team oversees craftsmanship and quality at every stage.",
    "Your finished space is handed over — ready to feel like home.",
  ][index],
}));

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A Calm Journey From Vision to Handover"
        description="Our process is designed to remove uncertainty. You'll always know what's happening, why it's happening, and what comes next."
        image={sampleImages.studio2}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Projects", href: "/projects" }}
      />

      <Section background="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Text size="lg">
              Every Fine Yard project follows a structured path — but never a rigid
              template. We adapt the process to your scope, timeline, and preferences
              while maintaining clarity at every stage.
            </Text>
          </div>
        </FadeIn>
      </Section>

      <Section background="default">
        <SectionHeading
          eyebrow="Seven Steps"
          title="From first conversation to finished home"
          className="mb-16"
        />
        <Timeline items={processDetails} />
      </Section>

      <Section background="white">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Transparent Updates",
              copy: "Regular communication so you're never wondering what's happening on site.",
            },
            {
              title: "Single Point of Contact",
              copy: "A dedicated project manager guides you from concept to completion.",
            },
            {
              title: "Quality Oversight",
              copy: "Site visits and reviews ensure craftsmanship matches the design intent.",
            },
          ].map((item) => (
            <FadeIn key={item.title}>
              <div className="h-full rounded-[20px] border border-border bg-background p-8">
                <h3 className="font-heading text-2xl font-medium text-heading">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-body">{item.copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Ready to begin your project?"
          description="Book a consultation and we'll walk you through how our process applies to your space."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </Section>
    </>
  );
}
