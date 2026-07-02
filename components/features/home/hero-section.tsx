"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { sampleImages } from "@/constants/sample-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { luxuryEase } from "@/lib/motion";

const Hero3D = dynamic(
  () => import("@/components/features/home/hero-3d").then((mod) => mod.Hero3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] w-full items-center justify-center rounded-[24px] border border-border bg-beige/20 sm:h-[380px] lg:h-full lg:min-h-[480px]">
        <div className="size-8 animate-pulse rounded-full bg-gold/30" />
      </div>
    ),
  },
);

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const [enable3d, setEnable3d] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const isLowPower = navigator.hardwareConcurrency <= 4;

      setEnable3d(!prefersReduced && !isMobile && !isLowPower);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,248,0.92)_0%,rgba(250,250,248,0.72)_45%,rgba(31,25,100,0.18)_100%)]" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: luxuryEase }}
            >
              <Eyebrow className="mb-6">Luxury Interior Design · Bengaluru</Eyebrow>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: luxuryEase, delay: 0.12 }}
            >
              <Heading as="h1" size="hero" className="max-w-xl">
                Designing Spaces That Feel Like Home.
              </Heading>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: luxuryEase, delay: 0.24 }}
            >
              <Text size="lg" className="mt-6 max-w-xl">
                Fine Yard crafts timeless interiors where architecture,
                functionality, and elegance exist in perfect harmony.
              </Text>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: luxuryEase, delay: 0.36 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <LuxuryButton href="/contact">Book a Consultation</LuxuryButton>
              <LuxuryButton href="/projects" variant="secondary">
                Explore Our Projects
              </LuxuryButton>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
            className="relative"
          >
            {enable3d ? (
              <div className="overflow-hidden rounded-[28px] border border-white/30 bg-white/10 p-3 backdrop-blur-md">
                <Hero3D />
              </div>
            ) : (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border shadow-[0_24px_80px_rgba(31,25,100,0.12)] lg:aspect-auto lg:min-h-[480px]">
                <Image
                  src={sampleImages.project1}
                  alt="Fine Yard interior design showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="size-5 text-twilight/60" strokeWidth={1.5} />
        </motion.div>
      </Container>
    </section>
  );
}
