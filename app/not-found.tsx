import Link from "next/link";

import { Container } from "@/components/layout/container";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Heading, Text } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background pt-28 pb-20">
      <Container>
        <div className="mx-auto max-w-xl space-y-8 text-center">
          <p className="font-subheading text-xs font-semibold tracking-[0.16em] text-twilight uppercase">
            404
          </p>
          <Heading as="h1" size="h1" align="center">
            This page doesn&apos;t exist.
          </Heading>
          <Text size="lg" align="center">
            The page you&apos;re looking for may have moved. Explore our projects
            or return home.
          </Text>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <LuxuryButton href="/">Return Home</LuxuryButton>
            <LuxuryButton href="/projects" variant="secondary">
              View Projects
            </LuxuryButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted">
            <Link href="/services" className="hover:text-twilight">
              Services
            </Link>
            <Link href="/contact" className="hover:text-twilight">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-twilight">
              Blog
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
