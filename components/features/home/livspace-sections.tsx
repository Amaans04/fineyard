"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { sampleImages } from "@/constants/sample-content";

const categories = [
  {
    title: "Living Room",
    href: "/services/living-room",
    image: sampleImages.service2,
  },
  {
    title: "Kitchen",
    href: "/services/modular-kitchen",
    image: sampleImages.service1,
  },
  {
    title: "Bedroom",
    href: "/services/bedroom",
    image: sampleImages.bedroom,
  },
  {
    title: "Wardrobe",
    href: "/services/wardrobe",
    image: sampleImages.wardrobe,
  },
  {
    title: "Villa",
    href: "/services/villa-interiors",
    image: sampleImages.project2,
  },
  {
    title: "Commercial",
    href: "/services/commercial",
    image: sampleImages.commercial,
  },
] as const;

export function DesignCategoryRail() {
  return (
    <FadeIn>
      <div className="relative -mx-6 md:-mx-12 lg:-mx-20">
        <div className="flex gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:px-12 lg:px-20 [&::-webkit-scrollbar]:hidden">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="shrink-0"
            >
              <Link
                href={category.href}
                className="group block w-[152px] sm:w-[168px]"
              >
                <div className="ios-glass-card relative aspect-[3/4] overflow-hidden rounded-[22px]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="168px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spruce/90 via-spruce/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <p className="font-subheading text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
                      {category.title}
                    </p>
                    <ArrowUpRight
                      className="size-4 text-gold opacity-0 transition-all group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

type PromoStripProps = {
  className?: string;
};

export function PromoStrip({ className }: PromoStripProps) {
  const promos = [
    {
      eyebrow: "Free Consultation",
      title: "Home to beautiful interiors",
      cta: "Book free consultation",
      href: "/contact",
      tone: "spruce" as const,
    },
    {
      eyebrow: "End-to-End",
      title: "One-stop shop for all things interiors",
      cta: "Explore services",
      href: "/services",
      tone: "gold" as const,
    },
  ];

  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {promos.map((promo) => (
        <Link
          key={promo.title}
          href={promo.href}
          className={cn(
            "ios-glass-card group relative overflow-hidden rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8",
            promo.tone === "spruce"
              ? "bg-gradient-to-br from-spruce/95 to-twilight/90 text-white"
              : "bg-gradient-to-br from-beige/80 to-white text-heading",
          )}
        >
          <p
            className={cn(
              "font-subheading text-[10px] font-semibold tracking-[0.14em] uppercase",
              promo.tone === "spruce" ? "text-gold" : "text-spruce",
            )}
          >
            {promo.eyebrow}
          </p>
          <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight md:text-3xl">
            {promo.title}
          </h3>
          <span
            className={cn(
              "mt-6 inline-flex items-center gap-2 font-subheading text-xs font-semibold tracking-[0.08em] uppercase",
              promo.tone === "spruce" ? "text-white/90" : "text-spruce",
            )}
          >
            {promo.cta}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        </Link>
      ))}
    </div>
  );
}

const trustItems = [
  { value: "120+", label: "Projects completed" },
  { value: "8+", label: "Years experience" },
  { value: "146", label: "Quality checks" },
  { value: "98%", label: "Client satisfaction" },
  { value: "15+", label: "Cities served" },
  { value: "1 Studio", label: "Dedicated PM per project" },
] as const;

export function TrustRail() {
  return (
    <div className="-mx-6 md:-mx-12 lg:-mx-20">
      <div className="flex gap-3 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:px-12 lg:px-20 [&::-webkit-scrollbar]:hidden">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="ios-glass-card shrink-0 rounded-2xl px-5 py-4 text-center"
          >
            <p className="font-heading text-2xl font-medium text-spruce">{item.value}</p>
            <p className="mt-1 max-w-[120px] font-subheading text-[10px] font-semibold tracking-[0.08em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
