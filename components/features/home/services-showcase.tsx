"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { luxuryEase } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const featuredServices = services.slice(0, 6);

export function ServicesShowcaseSection() {
  const reducedMotion = useReducedMotion();

  return (
    <Section background="warm" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <SectionHeading
        eyebrow="What We Design"
        title="Every Room, Thoughtfully Crafted"
        description="From modular kitchens to villa interiors — end-to-end design and execution under one trusted studio."
        className="mb-16"
      />

      <Stagger>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <StaggerItem key={service.slug}>
              <motion.article
                whileHover={reducedMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.4, ease: luxuryEase }}
                className="group overflow-hidden rounded-[24px] border border-border/80 bg-white luxury-shadow"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spruce/85 via-spruce/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                    <span className="absolute top-5 left-5 font-heading text-4xl font-medium text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-subheading text-[10px] font-semibold tracking-[0.12em] text-gold uppercase">
                        Interior Service
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-medium text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full border border-gold/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </div>
                  </div>
                  <p className="border-t border-border/60 px-6 py-4 text-sm leading-relaxed text-body">
                    {service.summary}
                  </p>
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </div>
      </Stagger>

      <FadeIn delay={0.2} className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-subheading text-sm font-medium tracking-[0.06em] text-spruce uppercase transition-colors hover:text-gold"
        >
          View All Services
          <ArrowUpRight className="size-4" strokeWidth={1.5} />
        </Link>
      </FadeIn>
    </Section>
  );
}
