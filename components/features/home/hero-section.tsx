"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { HeroShowcase } from "@/components/features/home/hero-showcase";
import { SplitTextReveal, TextReveal } from "@/components/motion/text-reveal";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Eyebrow, Text } from "@/components/ui/typography";
import { homeMetrics } from "@/constants/home-content";
import { sampleImages } from "@/constants/sample-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { luxuryEase, scaleInVariants } from "@/lib/motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="hero-bg-zoom relative h-full w-full">
          <Image
            src={sampleImages.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(198,167,106,0.18),transparent_45%)]" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-32 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <TextReveal delay={0}>
              <Eyebrow className="mb-8">Luxury Interior Design · Bengaluru</Eyebrow>
            </TextReveal>

            <h1 className="font-heading text-hero font-medium tracking-tight text-heading">
              <SplitTextReveal
                text="Designing Spaces That Feel Like Home."
                delay={0.1}
              />
            </h1>

            <TextReveal delay={0.35}>
              <Text size="lg" className="mt-8 max-w-xl text-body/90">
                Fine Yard crafts timeless interiors where architecture,
                functionality, and elegance exist in perfect harmony — tailored
                to how you live.
              </Text>
            </TextReveal>

            <TextReveal delay={0.48}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LuxuryButton href="/contact" size="lg">
                  Book a Consultation
                </LuxuryButton>
                <LuxuryButton href="/projects" variant="secondary" size="lg">
                  Explore Our Projects
                </LuxuryButton>
              </div>
            </TextReveal>

            {/* Inline trust strip */}
            <TextReveal delay={0.6}>
              <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gold/25 pt-10 sm:grid-cols-4">
                {homeMetrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-heading text-3xl font-medium text-twilight md:text-4xl">
                      {metric.value}
                      {metric.suffix}
                    </p>
                    <p className="mt-1 font-subheading text-[10px] font-semibold tracking-[0.12em] text-muted uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </TextReveal>
          </div>

          <motion.div
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={scaleInVariants}
            transition={{ duration: 1.1, ease: luxuryEase, delay: 0.25 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-3 -right-3 z-10 hidden items-center gap-2 rounded-full border border-gold/30 bg-white/90 px-4 py-2 backdrop-blur-sm lg:flex">
                <Sparkles className="size-3.5 text-gold" strokeWidth={1.5} />
                <span className="font-subheading text-[10px] font-semibold tracking-[0.1em] text-spruce uppercase">
                  Bespoke Design
                </span>
              </div>
              <HeroShowcase />
            </div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex lg:flex-col lg:items-center lg:gap-2"
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <span className="font-subheading text-[10px] font-medium tracking-[0.14em] text-spruce/70 uppercase">
            Scroll
          </span>
          <ChevronDown className="size-5 text-gold" strokeWidth={1.5} />
        </motion.div>
      </Container>
    </section>
  );
}
