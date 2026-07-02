import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Heading, Text } from "@/components/ui/typography";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/content/blog";
import type { Metadata } from "next";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        compact
      />

      <Section background="white" spacing="compact">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 border-b border-border pb-8 text-sm text-muted">
          <span>{post.author}</span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readingTime}
          </span>
        </div>
      </Section>

      <Section background="white" spacing="compact">
        <article className="mx-auto max-w-3xl space-y-8">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <Heading key={index} as="h2" size="h3">
                  {block.value as string}
                </Heading>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-3 pl-5">
                  {(block.value as string[]).map((item) => (
                    <li key={item} className="list-disc text-base leading-relaxed text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <Text key={index} size="lg">
                {block.value as string}
              </Text>
            );
          })}
        </article>
      </Section>

      <Section background="default" spacing="compact">
        <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-[24px] border border-border">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
      </Section>

      {post.faqs && post.faqs.length > 0 ? (
        <Section background="white">
          <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-12" />
          <div className="mx-auto max-w-3xl">
            <Accordion items={post.faqs} />
          </div>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section background="beige">
          <SectionHeading eyebrow="Continue Reading" title="Related articles" className="mb-12" />
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-[20px] border border-border bg-white p-8 transition-colors hover:border-twilight/30"
              >
                <p className="font-subheading text-xs tracking-[0.1em] text-twilight uppercase">
                  {item.category}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-medium text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-body">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section background="white" spacing="compact">
        <CtaBanner
          title="Ready to start your project?"
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
