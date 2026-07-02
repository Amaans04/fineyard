import { PageHero } from "@/components/layout/page-hero";
import { BlogListing } from "@/components/features/blog/blog-listing";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Section } from "@/components/ui/section";
import { getAllPosts } from "@/content/blog";
import { sampleImages } from "@/constants/sample-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Blog | Fine Yard Bengaluru",
  description:
    "Design tips, material guides, and luxury home inspiration from Fine Yard — Bengaluru's premium interior design studio.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Ideas for Timeless Living"
        description="Practical guides and design insights for homeowners planning premium interiors in Bengaluru."
        image={sampleImages.studio3}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        compact
      />

      <BlogListing posts={posts} />

      <Section background="beige" spacing="compact">
        <CtaBanner
          title="Planning your own project?"
          description="Book a consultation and bring your ideas to life with Fine Yard."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
