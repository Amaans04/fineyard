import {
  Compass,
  Gem,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { sampleImages, sampleProcess } from "@/constants/sample-content";

export const homeProjects = [
  {
    id: "jp-nagar-residence",
    title: "JP Nagar Residence",
    location: "Bengaluru",
    category: "Apartments",
    filter: "apartments",
    image: sampleImages.project1,
    href: "/projects/jp-nagar-residence",
    featured: true,
  },
  {
    id: "whitefield-villa",
    title: "Whitefield Villa",
    location: "Bengaluru",
    category: "Villa Interiors",
    filter: "villas",
    image: sampleImages.project2,
    href: "/projects/whitefield-villa",
    featured: false,
  },
  {
    id: "koramangala-loft",
    title: "Koramangala Loft",
    location: "Bengaluru",
    category: "Residential",
    filter: "residential",
    image: sampleImages.project3,
    href: "/projects/koramangala-loft",
    featured: false,
  },
  {
    id: "mg-road-office",
    title: "MG Road Office",
    location: "Bengaluru",
    category: "Commercial",
    filter: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    href: "/projects/mg-road-office",
    featured: false,
  },
] as const;

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "apartments", label: "Apartments" },
  { id: "villas", label: "Villas" },
  { id: "commercial", label: "Commercial" },
] as const;

export const homeFeatures = [
  {
    title: "Bespoke Design",
    description:
      "Every project is tailored to your lifestyle — never pulled from a catalogue.",
    icon: Sparkles,
  },
  {
    title: "Transparent Process",
    description:
      "Clear timelines, honest communication, and complete visibility at every stage.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Materials",
    description:
      "Curated finishes selected for beauty, durability, and timeless appeal.",
    icon: Gem,
  },
  {
    title: "Dedicated Project Manager",
    description:
      "A single point of contact guides your project from concept to completion.",
    icon: Users,
  },
  {
    title: "On-Time Delivery",
    description:
      "Structured planning ensures milestones are met with precision.",
    icon: Compass,
  },
  {
    title: "End-to-End Execution",
    description:
      "Design, procurement, and site management under one trusted studio.",
    icon: Layers,
  },
] as const;

export const homeMaterials = [
  {
    name: "Walnut",
    texture: sampleImages.walnut,
    description: "Warm grain, natural depth",
  },
  {
    name: "Oak",
    texture: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    description: "Light, organic texture",
  },
  {
    name: "Marble",
    texture: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80",
    description: "Italian veining, timeless",
  },
  {
    name: "Quartz",
    texture: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80",
    description: "Clean, refined surface",
  },
  {
    name: "Brass",
    texture: sampleImages.brass,
    description: "Soft metallic accent",
  },
  {
    name: "Linen",
    texture: sampleImages.linen,
    description: "Organic textile warmth",
  },
  {
    name: "Glass",
    texture: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    description: "Light, transparency, depth",
  },
] as const;

export const homeTestimonials = [
  {
    quote:
      "Fine Yard understood our lifestyle before suggesting a single finish. The process felt calm, professional, and deeply personal.",
    name: "Priya & Arjun",
    location: "JP Nagar",
    projectType: "Full Home Interior",
  },
  {
    quote:
      "Every detail was considered — from storage to lighting. Our villa feels elegant without trying too hard.",
    name: "Rahul Mehta",
    location: "Whitefield",
    projectType: "Villa Interior",
  },
  {
    quote:
      "Transparent communication and impeccable execution. We always knew what was happening and why.",
    name: "Ananya Desai",
    location: "Koramangala",
    projectType: "Apartment Renovation",
  },
] as const;

export const homeFaqs = [
  {
    id: "timeline",
    question: "How long does a typical interior project take?",
    answer:
      "Timelines vary by scope. A single room may take 6–8 weeks, while a full home typically spans 12–20 weeks from concept to handover.",
  },
  {
    id: "process",
    question: "Do you offer end-to-end project management?",
    answer:
      "Yes. Fine Yard manages the complete journey — design, material selection, vendor coordination, and execution oversight.",
  },
  {
    id: "consultation",
    question: "What happens during the first consultation?",
    answer:
      "We discuss your lifestyle, preferences, budget range, and timeline. You'll leave with clarity on process, scope, and next steps.",
  },
  {
    id: "locations",
    question: "Which areas in Bengaluru do you serve?",
    answer:
      "We work across Bengaluru including JP Nagar, Whitefield, Koramangala, HSR Layout, Jayanagar, and surrounding areas.",
  },
] as const;

export const homeInstagram = [
  sampleImages.project1,
  sampleImages.project2,
  sampleImages.service1,
  sampleImages.service2,
  sampleImages.project3,
  sampleImages.walnut,
] as const;

export const homeMetrics = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
] as const;

export { sampleProcess as homeProcess };
