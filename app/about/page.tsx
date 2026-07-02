import {
  Eye,
  Hammer,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { PageHero, EditorialQuote, InlineLink } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard, FeatureCardGrid } from "@/components/ui/feature-card";
import { MaterialSwatchGrid } from "@/components/ui/material-swatch";
import { MetricGrid } from "@/components/ui/metric-counter";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Timeline } from "@/components/ui/timeline";
import { Text } from "@/components/ui/typography";
import { homeMaterials, homeTestimonials } from "@/constants/home-content";
import { processSnapshot, sampleImages } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fine Yard | Luxury Interior Designers in Bengaluru",
  description:
    "Learn about Fine Yard — a Bengaluru interior design studio focused on timeless, bespoke interiors shaped around how you live.",
};

const values = [
  { title: "Intentional Design", description: "Every decision has a purpose.", icon: Eye },
  { title: "Craftsmanship", description: "Details matter.", icon: Hammer },
  { title: "Transparency", description: "Clear communication and honest execution.", icon: ShieldCheck },
  { title: "Collaboration", description: "Clients remain involved throughout the journey.", icon: HeartHandshake },
  { title: "Timelessness", description: "Design beyond trends.", icon: Palette },
];

const differentiators = [
  { title: "Personalized Design", description: "Every home reflects its owner's lifestyle, not a template.", icon: Sparkles },
  { title: "Premium Materials", description: "Finishes curated for beauty, durability, and longevity.", icon: Palette },
  { title: "End-to-End Management", description: "One studio accountable from concept to handover.", icon: Users },
  { title: "Transparent Communication", description: "Honest timelines and clear updates at every stage.", icon: ShieldCheck },
  { title: "Skilled Craftsmanship", description: "Execution standards that match the design vision.", icon: Hammer },
  { title: "Long-Term Quality", description: "Homes designed to remain elegant for years.", icon: Eye },
];

const teamDepartments = [
  { title: "Design", description: "Concept development, space planning, and material curation." },
  { title: "Project Management", description: "Timeline coordination, vendor management, and site oversight." },
  { title: "Execution", description: "On-site supervision ensuring craftsmanship standards." },
  { title: "Client Experience", description: "Dedicated support from first consultation to handover." },
];

const aboutMetrics = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 10000, suffix: "+", label: "Design Hours" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fine Yard"
        title="Designing Homes With Purpose, Not Just Style."
        description="Fine Yard believes every exceptional interior begins with understanding the people who will live within it. Every project is shaped around lifestyle, functionality, craftsmanship, and timeless aesthetics."
        image={sampleImages.about}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        primaryCta={{ label: "Meet the Founder", href: "/founder" }}
        secondaryCta={{ label: "Book a Consultation", href: "/contact" }}
      />

      <Section background="white">
        <FadeIn>
          <SectionHeading
            title="Our Story"
            description="We listen first. We understand how you live. We design with intention, execute with precision, and deliver lasting quality."
            align="center"
            className="mb-16"
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              "Listen first.",
              "Understand the client's lifestyle.",
              "Design with intention.",
              "Execute with precision.",
              "Deliver lasting quality.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-border bg-background px-6 py-5 text-base text-body"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section background="beige">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading eyebrow="Mission" title="What drives us every day" />
            <Text size="lg" className="mt-6">
              Design elegant interiors that enrich everyday living through thoughtful
              planning, premium materials, and meticulous execution.
            </Text>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading eyebrow="Vision" title="Where we're headed" />
            <Text size="lg" className="mt-6">
              Become one of India&apos;s most respected luxury interior design studios
              by creating spaces that remain timeless for generations.
            </Text>
          </FadeIn>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Core Values" title="What we stand for" className="mb-16" />
        <FeatureCardGrid columns={3}>
          {values.map((value) => (
            <FeatureCard key={value.title} {...value} accent />
          ))}
        </FeatureCardGrid>
      </Section>

      <Section background="default">
        <SectionHeading
          eyebrow="Why We're Different"
          title="Not a package. A partnership."
          className="mb-16"
        />
        <Stagger>
          <FeatureCardGrid columns={3}>
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard {...item} accent />
              </StaggerItem>
            ))}
          </FeatureCardGrid>
        </Stagger>
      </Section>

      <Section background="white" spacing="compact">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <EditorialQuote quote="Luxury is not about excess. Luxury is about creating spaces that quietly improve everyday life." />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border">
              <Image
                src={sampleImages.project2}
                alt="Fine Yard interior design philosophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section background="beige">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border">
              <Image
                src={sampleImages.founder}
                alt="Haseeb, Founder of Fine Yard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="The Founder"
              title="Meet the Vision Behind Fine Yard"
              description="Haseeb leads every project with a belief that great interiors begin with understanding people — not picking furniture."
            />
            <div className="mt-8">
              <InlineLink href="/founder">Read the Founder Story →</InlineLink>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Our Team" title="The people behind the work" className="mb-16" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamDepartments.map((dept) => (
            <FadeIn key={dept.title}>
              <div className="h-full rounded-[20px] border border-border bg-background p-8">
                <h3 className="font-heading text-2xl font-medium text-heading">{dept.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-body">{dept.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="default">
        <SectionHeading
          eyebrow="Our Process"
          title="Discover → Deliver"
          description="A calm, structured journey from first conversation to finished space."
          className="mb-16"
        />
        <Timeline items={[...processSnapshot]} orientation="horizontal" />
        <div className="mt-12 text-center">
          <InlineLink href="/process">Explore the full process →</InlineLink>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Materials" title="Quality you can feel" className="mb-16" />
        <MaterialSwatchGrid materials={[...homeMaterials.slice(0, 6)]} />
      </Section>

      <Section background="beige">
        <SectionHeading eyebrow="Client Stories" title="Trust built over time" className="mb-12" />
        <TestimonialCarousel items={[...homeTestimonials]} />
      </Section>

      <Section background="white" spacing="compact">
        <MetricGrid metrics={aboutMetrics} />
      </Section>

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Let's Create Something Timeless Together."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="View Projects"
          secondaryHref="/projects"
        />
      </Section>
    </>
  );
}
