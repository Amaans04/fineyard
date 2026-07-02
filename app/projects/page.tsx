import { PageHero } from "@/components/layout/page-hero";
import { ProjectsListing } from "@/components/features/projects/projects-listing";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Section } from "@/components/ui/section";
import { getAllProjects } from "@/content/projects";
import { sampleImages } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Projects | Fine Yard Portfolio",
  description:
    "Explore Fine Yard's portfolio of luxury interior design projects — apartments, villas, and commercial spaces across Bengaluru.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Spaces Designed Around the Way You Live"
        description="Explore a curated collection of interiors where thoughtful planning, premium materials, and timeless aesthetics come together."
        image={sampleImages.project2}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <ProjectsListing projects={projects} />

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Inspired by what you see?"
          description="Let's create something uniquely yours."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="Our Process"
          secondaryHref="/process"
        />
      </Section>
    </>
  );
}
