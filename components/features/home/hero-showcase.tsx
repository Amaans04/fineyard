"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { sampleImages } from "@/constants/sample-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { luxuryEase } from "@/lib/motion";

export function HeroShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:min-h-[520px]">
      {/* Main interior frame */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
        className="absolute inset-0 overflow-hidden rounded-[28px] border border-gold/25 luxury-shadow-lg"
      >
        <Image
          src={sampleImages.project1}
          alt="JP Nagar Residence — Fine Yard interior design"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-spruce/80 via-twilight/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(198,167,106,0.2),transparent_50%)]" />

        <div className="absolute inset-x-0 bottom-0 p-8">
          <p className="font-subheading text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            Featured Project
          </p>
          <p className="mt-2 font-heading text-2xl font-medium text-white md:text-3xl">
            JP Nagar Residence
          </p>
          <p className="mt-1 text-sm text-white/75">Bengaluru · Full Home Interior</p>
        </div>
      </motion.div>

      {/* Floating inset image */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24, x: 24 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, ease: luxuryEase, delay: 0.45 }}
        className="absolute -right-3 bottom-16 z-10 w-[42%] overflow-hidden rounded-[20px] border-2 border-white/90 shadow-[0_20px_60px_rgba(3,87,24,0.2)] sm:-right-4 sm:bottom-20 sm:w-[38%]"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={sampleImages.project2}
            alt="Whitefield Villa interior detail"
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Gold accent corner */}
      <div
        aria-hidden
        className="absolute top-6 left-6 h-12 w-px bg-gold/70"
      />
      <div
        aria-hidden
        className="absolute top-6 left-6 h-px w-12 bg-gold/70"
      />

      {/* Material badge */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: luxuryEase, delay: 0.65 }}
        className="absolute top-6 right-6 z-10 rounded-full border border-gold/30 bg-white/90 px-4 py-2 backdrop-blur-sm"
      >
        <p className="font-subheading text-[10px] font-semibold tracking-[0.1em] text-spruce uppercase">
          Premium Materials
        </p>
      </motion.div>
    </div>
  );
}
