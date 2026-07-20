"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { FilterChips } from "@/components/ui/filter-chips";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogCategories } from "@/content/blog";
import type { BlogPost } from "@/types/content";

type BlogListingProps = {
  posts: BlogPost[];
};

export function BlogListing({ posts }: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const filters = useMemo(() => {
    const categories = new Set(posts.map((post) => post.category));
    return [
      { id: "All", label: "All" },
      ...blogCategories
        .filter((category) => category !== "All" && categories.has(category))
        .map((category) => ({ id: category, label: category })),
    ];
  }, [posts]);

  return (
    <Section background="white">
      <SectionHeading
        eyebrow="Insights"
        title="Design knowledge, curated"
        description="Guides, ideas, and practical advice for premium interiors in Bengaluru."
        className="mb-10"
      />

      <FilterChips
        items={filters}
        activeId={activeCategory}
        onChange={setActiveCategory}
        panelId="blog-posts-panel"
        className="mb-12"
      />

      {filtered.length === 0 ? (
        <div
          id="blog-posts-panel"
          role="tabpanel"
          className="rounded-[20px] border border-dashed border-border p-12 text-center"
        >
          <p className="font-heading text-2xl text-heading">No articles yet</p>
          <p className="mt-3 text-body">
            We&apos;re preparing content for this category. Try another filter or
            check back soon.
          </p>
        </div>
      ) : (
      <div id="blog-posts-panel" role="tabpanel" className="grid gap-8 md:grid-cols-2">
        {filtered.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.04}>
            <article className="group overflow-hidden rounded-[24px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(31,25,100,0.08)]">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-subheading text-xs font-semibold tracking-[0.1em] text-twilight uppercase">
                      {post.category}
                    </p>
                    <ArrowUpRight
                      className="size-4 text-twilight transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2 className="font-heading text-2xl font-medium text-heading md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="text-base leading-relaxed text-body">{post.excerpt}</p>
                  <p className="text-sm text-muted">
                    {post.author} · {post.readingTime}
                  </p>
                </div>
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
      )}
    </Section>
  );
}
