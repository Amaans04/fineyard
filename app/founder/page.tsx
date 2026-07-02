import {
  Ear,
  Eye,
  Hammer,
  MessageCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { PageHero, EditorialQuote } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FeatureCard, FeatureCardGrid } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Timeline } from "@/components/ui/timeline";
import { Text } from "@/components/ui/typography";
import { homeTestimonials } from "@/constants/home-content";
import { sampleImages } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Haseeb | Founder of Fine Yard",
  description:
    "Meet Haseeb, founder of Fine Yard — a Bengaluru interior design studio built on listening first and designing timeless homes with intention.",
};

const founderTimeline = [
  { id: "interest", title: "Early Interest in Design", description: "A curiosity for how spaces shape the way people live." },
  { id: "learning", title: "Learning Space Planning & Materials", description: "Developing an eye for layout, light, and material quality." },
  { id: "craftsmen", title: "Collaborating with Craftsmen", description: "Understanding execution through close work with skilled trades." },
  { id: "launch", title: "Launching Fine Yard", description: "Building a studio focused on personalized, timeless interiors." },
  { id: "studio", title: "Building a Studio Focused on Timeless Interiors", description: "Growing a team that shares a commitment to thoughtful design." },
];

const principles = [
  { title: "Listen First", description: "Every project begins with understanding how you live.", icon: Ear },
  { title: "Design With Purpose", description: "Nothing is added without reason.", icon: Sparkles },
  { title: "Details Matter", description: "The smallest finishes define the largest impressions.", icon: Eye },
  { title: "Honest Communication", description: "Clear timelines, transparent updates, no surprises.", icon: MessageCircle },
  { title: "Quality Over Trends", description: "Homes designed to remain elegant for years.", icon: TrendingUp },
  { title: "Craftsmanship Above Everything", description: "Execution standards that match the design vision.", icon: Hammer },
];

const inspirations = [
  "Natural Light",
  "Architecture",
  "Minimalism",
  "Stone",
  "Wood",
  "Textures",
  "Balance",
  "Functionality",
];

const involvement = [
  "Initial consultation",
  "Design review",
  "Space planning",
  "Material guidance",
  "Execution oversight",
  "Final walkthrough",
];

const studioGallery = [
  sampleImages.studio1,
  sampleImages.studio2,
  sampleImages.studio3,
  sampleImages.service1,
  sampleImages.wardrobe,
  sampleImages.linen,
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="The Vision Behind Fine Yard"
        title="Meet Haseeb"
        description="Fine Yard was built around a simple belief: great interiors begin with understanding the people who will live in them."
        image={sampleImages.founder}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Founder" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Projects", href: "/projects" }}
      />

      <Section background="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="font-subheading text-sm font-medium tracking-[0.08em] text-twilight uppercase">
              Founder & Principal Interior Designer
            </p>
            <Text size="lg">
              Haseeb believes that every home should reflect the people who live inside
              it. Rather than beginning with furniture or finishes, every project starts
              with conversations — understanding routines, aspirations, preferences, and
              how a family experiences its space.
            </Text>
            <Text size="lg">
              This philosophy guides every design decision at Fine Yard, from planning
              and material selection to lighting, textures, and final styling.
            </Text>
          </div>
        </FadeIn>
      </Section>

      <Section background="beige" spacing="compact">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <EditorialQuote quote="Beautiful interiors are not created by adding more. They are created by removing everything that isn't meaningful." />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border">
              <Image
                src={sampleImages.project1}
                alt="Fine Yard design philosophy in practice"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Journey" title="The path to Fine Yard" className="mb-16" />
        <Timeline items={founderTimeline} />
      </Section>

      <Section background="default">
        <SectionHeading eyebrow="Principles" title="How Haseeb leads every project" className="mb-16" />
        <Stagger>
          <FeatureCardGrid columns={3}>
            {principles.map((item) => (
              <StaggerItem key={item.title}>
                <FeatureCard {...item} accent />
              </StaggerItem>
            ))}
          </FeatureCardGrid>
        </Stagger>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="A Day in the Studio" title="Where ideas take shape" className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studioGallery.map((image, index) => (
            <FadeIn key={image} delay={index * 0.04}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-border">
                <Image
                  src={image}
                  alt={`Fine Yard studio moment ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="beige">
        <SectionHeading eyebrow="Inspirations" title="What shapes the work" className="mb-12" />
        <div className="flex flex-wrap gap-3">
          {inspirations.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-white px-5 py-2.5 font-subheading text-xs font-medium tracking-[0.06em] text-heading uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section background="white" spacing="compact">
        <FadeIn>
          <EditorialQuote
            quote="I don't believe great interiors should demand attention. I believe they should quietly improve the way people live every day."
            className="mx-auto max-w-4xl text-center"
          />
        </FadeIn>
      </Section>

      <Section background="default">
        <SectionHeading
          eyebrow="Behind Every Project"
          title="Personal involvement at every stage"
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {involvement.map((item) => (
            <div
              key={item}
              className="rounded-[20px] border border-border bg-white px-6 py-5 text-base text-body"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Client Stories" title="What clients say" className="mb-12" />
        <TestimonialCarousel items={[...homeTestimonials]} />
      </Section>

      <Section background="beige">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <SectionHeading
              eyebrow="A Note From Haseeb"
              title="Thank you for considering Fine Yard"
              align="center"
            />
            <Text size="lg" align="center">
              Designing a home is deeply personal, and I believe every project deserves
              thoughtful attention, honest collaboration, and a commitment to lasting quality.
              Whether your project is a single room or an entire home, our goal is always
              the same — to create spaces that feel timeless, comfortable, and unmistakably yours.
            </Text>
          </div>
        </FadeIn>
      </Section>

      <Section background="white" spacing="compact">
        <CtaBanner
          title="Let's Build Something You'll Love Coming Home To."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="Schedule a Call"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
