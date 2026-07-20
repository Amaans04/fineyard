import {
  Compass,
  Gem,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Accordion } from "@/components/ui/accordion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard, FeatureCardGrid } from "@/components/ui/feature-card";
import { MaterialSwatchGrid } from "@/components/ui/material-swatch";
import { MetricGrid } from "@/components/ui/metric-counter";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Timeline } from "@/components/ui/timeline";
import {
  DesignCategoryRail,
  PromoStrip,
  TrustRail,
} from "@/components/features/home/livspace-sections";
import {
  FounderPreviewSection,
  InstagramSection,
  ProjectsSection,
} from "@/components/features/home/projects-section";
import { HeroSection } from "@/components/features/home/hero-section";
import { PageLoader } from "@/components/features/home/page-loader";
import { ServicesShowcaseSection } from "@/components/features/home/services-showcase";
import {
  homeFaqs,
  homeFeatures,
  homeMaterials,
  homeMetrics,
  homeProcess,
  homeTestimonials,
} from "@/constants/home-content";
import { sampleImages } from "@/constants/sample-content";
import { siteConfig } from "@/config/site";

const featureIcons = [Sparkles, ShieldCheck, Gem, Users, Compass, Layers];

export function Homepage() {
  return (
    <>
      <PageLoader />
      <HeroSection />

      <Section background="white" spacing="compact" bordered className="border-gold/15">
        <TrustRail />
      </Section>

      <Section background="default" spacing="compact">
        <PromoStrip />
      </Section>

      <Section background="warm">
        <SectionHeading
          eyebrow="Design Ideas"
          title="Inspiration for Home Interiors"
          description="Explore room-by-room design ideas curated for premium Bengaluru homes."
          className="mb-10"
        />
        <DesignCategoryRail />
      </Section>

      <Section background="white" spacing="compact" bordered className="border-gold/15">
        <MetricGrid metrics={[...homeMetrics]} />
      </Section>

      <ServicesShowcaseSection />

      <Section background="default">
        <SectionHeading
          eyebrow="Why Fine Yard"
          title="Crafted With Intention"
          description="Every project reflects thoughtful planning, premium craftsmanship, and a seamless client experience."
          className="mb-16"
        />
        <Stagger>
          <FeatureCardGrid columns={3}>
            {homeFeatures.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <FeatureCard
                  icon={featureIcons[index]}
                  title={feature.title}
                  description={feature.description}
                  accent
                />
              </StaggerItem>
            ))}
          </FeatureCardGrid>
        </Stagger>
      </Section>

      <ProjectsSection />

      <Section background="beige">
        <SectionHeading
          eyebrow="Our Process"
          title="From Vision to Handover"
          description="A calm, structured journey from first conversation to the moment you walk into your finished space."
          className="mb-16"
        />
        <Timeline items={[...homeProcess]} orientation="horizontal" />
      </Section>

      <Section background="white">
        <SectionHeading
          eyebrow="Materials"
          title="Textures That Tell a Story"
          description="Premium finishes selected for beauty, durability, and the way they feel in everyday life."
          className="mb-16"
        />
        <MaterialSwatchGrid materials={[...homeMaterials]} />
      </Section>

      <Section background="warm">
        <SectionHeading
          eyebrow="Transformation"
          title="Before & After"
          description="Drag to explore how thoughtful design reshapes the way a space looks and feels."
          className="mb-12"
        />
        <FadeIn>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
            afterImage={sampleImages.project1}
          />
        </FadeIn>
      </Section>

      <Section background="white">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trust Built Over Time"
          className="mb-12"
        />
        <TestimonialCarousel items={[...homeTestimonials]} />
      </Section>

      <FounderPreviewSection />
      <InstagramSection />

      <Section background="default">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked"
          className="mb-12"
        />
        <Accordion items={[...homeFaqs]} />
      </Section>

      <Section background="premium" spacing="compact">
        <CtaBanner
          eyebrow="Begin Your Project"
          title="Let's Design Your Dream Space."
          description="Every project begins with a conversation. Share your vision and we'll guide you from concept to completion."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Us"
          secondaryHref={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
          variant="premium"
        />
      </Section>
    </>
  );
}
