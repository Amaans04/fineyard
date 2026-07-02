"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { FilterChips } from "@/components/ui/filter-chips";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeInstagram, homeProjects, projectFilters } from "@/constants/home-content";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return homeProjects;
    return homeProjects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  return (
    <Section background="white">
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
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
            description="Fine Yard was built around a simple belief: great interiors begin with understanding the people who will live in them."
          />
          <div className="mt-8">
            <a
              href="/founder"
              className="inline-flex items-center gap-2 font-subheading text-sm font-medium tracking-[0.04em] text-twilight uppercase transition-colors hover:text-gold"
            >
              Read the Story
              <span aria-hidden>→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function InstagramSection() {
  return (
    <Section background="default">
      <SectionHeading
        eyebrow="Studio Life"
        title="Moments From the Studio"
        description="A glimpse into materials, spaces, and the craft behind every Fine Yard project."
        className="mb-12"
      />
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {homeInstagram.map((image, index) => (
          <FadeIn key={image} delay={index * 0.04} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-[20px] border border-border">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Fine Yard studio gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-twilight/0 transition-colors duration-300 group-hover:bg-twilight/35" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
