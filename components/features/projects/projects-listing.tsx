"use client";

import { useMemo, useState } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { FilterChips } from "@/components/ui/filter-chips";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/content";

const filters = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "apartments", label: "Apartments" },
  { id: "villas", label: "Villas" },
  { id: "commercial", label: "Commercial" },
];

type ProjectsListingProps = {
  projects: Project[];
};

export function ProjectsListing({ projects }: ProjectsListingProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.filter === activeFilter);
  }, [activeFilter, projects]);

  return (
    <Section background="white">
      <SectionHeading
        eyebrow="Portfolio"
        title="Spaces Designed Around the Way You Live"
        description="Explore a curated collection of interiors where thoughtful planning, premium materials, and timeless aesthetics come together."
        className="mb-10"
      />

      <FilterChips
        items={filters}
        activeId={activeFilter}
        onChange={setActiveFilter}
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.04}>
            <ProjectCard
              title={project.title}
              location={project.location}
              category={project.category}
              image={project.coverImage}
              href={`/projects/${project.slug}`}
              featured={project.featured}
              priority={index === 0}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
