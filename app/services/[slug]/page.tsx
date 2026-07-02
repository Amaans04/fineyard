import Image from "next/image";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/layout/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { Text } from "@/components/ui/typography";
import { getProjectBySlug } from "@/content/projects";
import { getAllServices, getServiceBySlug } from "@/content/services";
import { sampleProcess } from "@/constants/sample-content";
import type { Metadata } from "next";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Fine Yard Bengaluru`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = service.relatedProjectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        compact
      />

      <Section background="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Text size="lg" align="center">
              {service.description}
            </Text>
          </div>
        </FadeIn>
      </Section>

      <Section background="default">
        <SectionHeading eyebrow="Benefits" title="What you can expect" className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-[20px] border border-border bg-white px-6 py-5 text-base text-body"
            >
              {benefit}
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Gallery" title="Inspiration" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-3">
          {service.gallery.map((image, index) => (
            <FadeIn key={image} delay={index * 0.04}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border">
                <Image
                  src={image}
                  alt={`${service.title} inspiration ${index + 1}`}
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
        <SectionHeading eyebrow="Approach" title="How we deliver" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {service.features.map((feature) => (
            <FadeIn key={feature.title}>
              <div className="h-full rounded-[20px] border border-border bg-white p-8">
                <h3 className="font-heading text-2xl font-medium text-heading">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-body">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Process" title="Our approach" className="mb-12" />
        <Timeline items={[...sampleProcess.slice(0, 5)]} orientation="horizontal" />
      </Section>

      <Section background="default">
        <SectionHeading eyebrow="Materials" title="Finishes we work with" className="mb-12" />
        <div className="flex flex-wrap gap-3">
          {service.materials.map((material) => (
            <span
              key={material}
              className="rounded-full border border-border bg-white px-5 py-2.5 text-sm text-body"
            >
              {material}
            </span>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-12" />
        <Accordion items={service.faqs} />
      </Section>

      {relatedProjects.length > 0 ? (
        <Section background="beige">
          <SectionHeading eyebrow="Related Work" title="Projects in this category" className="mb-12" />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((project) =>
              project ? (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  location={project.location}
                  category={project.category}
                  image={project.coverImage}
                  href={`/projects/${project.slug}`}
                />
              ) : null,
            )}
          </div>
        </Section>
      ) : null}

      <Section background="white" spacing="compact">
        <CtaBanner
          title={`Ready to discuss your ${service.title.toLowerCase()}?`}
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
          secondaryLabel="View All Services"
          secondaryHref="/services"
        />
      </Section>
    </>
  );
}
