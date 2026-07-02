import Image from "next/image";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/layout/page-hero";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { CtaBanner } from "@/components/ui/cta-banner";
import { MaterialSwatchGrid } from "@/components/ui/material-swatch";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Text } from "@/components/ui/typography";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/content/projects";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Fine Yard Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(slug);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.coverImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        compact
      />

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <SectionHeading eyebrow="Overview" title="The brief" />
            <Text size="lg" className="mt-6">
              {project.brief}
            </Text>
            <ul className="mt-8 space-y-3">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-base text-body">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {objective}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[20px] border border-border bg-background p-6 text-center"
                >
                  <p className="font-heading text-2xl font-medium text-heading">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-subheading text-xs tracking-[0.1em] text-muted uppercase">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section background="default">
        <SectionHeading eyebrow="Gallery" title="The finished space" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((image, index) => (
            <FadeIn key={image} delay={index * 0.04}>
              <div
                className={`relative overflow-hidden rounded-[24px] border border-border ${
                  index === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Highlights" title="Design decisions" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {project.highlights.map((highlight) => (
            <FadeIn key={highlight.title}>
              <div className="h-full rounded-[20px] border border-border bg-background p-8">
                <h3 className="font-heading text-2xl font-medium text-heading">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">
                  {highlight.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="beige">
        <SectionHeading eyebrow="Materials" title="Material palette" className="mb-12" />
        <MaterialSwatchGrid
          materials={project.materials.map((name, index) => ({
            name,
            texture: project.gallery[index % project.gallery.length],
            description: "Curated for this project",
          }))}
        />
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Transformation" title="Before & After" className="mb-12" />
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
          afterImage={project.coverImage}
        />
      </Section>

      <Section background="default">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <SectionHeading eyebrow="Design Story" title="From concept to completion" align="center" />
            <Text size="lg" align="center">
              {project.story}
            </Text>
          </div>
        </FadeIn>
      </Section>

      {related.length > 0 ? (
        <Section background="white">
          <SectionHeading eyebrow="Explore More" title="Related projects" className="mb-12" />
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard
                key={item.slug}
                title={item.title}
                location={item.location}
                category={item.category}
                image={item.coverImage}
                href={`/projects/${item.slug}`}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Inspired by this project?"
          description="Let's create something uniquely yours."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="View All Projects"
          secondaryHref="/projects"
        />
      </Section>
    </>
  );
}
