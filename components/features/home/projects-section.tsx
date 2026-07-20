"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { FilterChips } from "@/components/ui/filter-chips";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { homeInstagram, homeProjects, projectFilters } from "@/constants/home-content";
import { sampleImages } from "@/constants/sample-content";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return homeProjects;
    return homeProjects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  return (
    <Section background="warm">
      <SectionHeading
        eyebrow="Featured Work"
        title="Spaces Designed Around You"
        description="Explore interiors where thoughtful planning, premium materials, and timeless aesthetics come together."
        className="mb-10"
      />

      <FilterChips
        items={[...projectFilters]}
        activeId={activeFilter}
        onChange={setActiveFilter}
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.05}>
            <ProjectCard
              title={project.title}
              location={project.location}
              category={project.category}
              image={project.image}
              href={project.href}
              featured={project.featured}
              priority={index === 0}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

export function FounderPreviewSection() {
  return (
    <Section background="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-gold/25 luxury-shadow-lg">
            <Image
              src={sampleImages.founder}
              alt="Haseeb, Founder of Fine Yard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spruce/50 via-transparent to-transparent" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading
            eyebrow="The Founder"
            title="Meet the Vision Behind Fine Yard"
            description="Fine Yard was built around a simple belief: great interiors begin with understanding the people who will live in them."
          />
          <div className="mt-8">
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 font-subheading text-sm font-medium tracking-[0.04em] text-spruce uppercase transition-colors hover:text-gold"
            >
              Read the Story
              <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function InstagramSection() {
  return (
    <Section background="beige">
      <SectionHeading
        eyebrow="Studio Life"
        title="Moments From the Studio"
        description="A glimpse into materials, spaces, and the craft behind every Fine Yard project."
        className="mb-12"
      />
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {homeInstagram.map((image, index) => (
          <FadeIn key={image} delay={index * 0.04} className="mb-4 break-inside-avoid">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Fine Yard on Instagram — image ${index + 1}`}
              className="group relative block overflow-hidden rounded-[20px] border border-gold/15 transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_16px_48px_rgba(3,87,24,0.1)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Fine Yard studio gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-spruce/0 transition-colors duration-300 group-hover:bg-spruce/40" />
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
