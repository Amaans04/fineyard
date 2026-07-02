import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceCard } from "@/components/ui/service-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/ui/cta-banner";
import { getAllServices } from "@/content/services";
import { sampleImages } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services | Fine Yard Bengaluru",
  description:
    "Explore Fine Yard's luxury interior design services — modular kitchens, living rooms, bedrooms, wardrobes, villa interiors, and more.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Shaped Around How You Live"
        description="Every service is tailored to your space, lifestyle, and vision — never pulled from a catalogue."
        image={sampleImages.service2}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
      />

      <Section background="white">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Every room, considered"
          description="From individual rooms to complete turnkey interiors — explore how we can help."
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <ServiceCard
                index={index}
                title={service.title}
                description={service.summary}
                image={service.heroImage}
                href={`/services/${service.slug}`}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Not sure where to start?"
          description="Book a consultation and we'll help you define the right scope for your project."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="View Projects"
          secondaryHref="/projects"
        />
      </Section>
    </>
  );
}
