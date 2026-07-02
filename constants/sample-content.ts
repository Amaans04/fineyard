export const sampleImages = {
  hero: "https://images.unsplash.com/photo-1618221192570-077c11f5a9a8?auto=format&fit=crop&w=1600&q=80",
  about: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  founder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  project1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  project2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  project3: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  service1: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
  service2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  bedroom: "https://images.unsplash.com/photo-1616594039964-40874a6f8b2f?auto=format&fit=crop&w=1200&q=80",
  wardrobe: "https://images.unsplash.com/photo-1595428774223-ef52624120b2?auto=format&fit=crop&w=1200&q=80",
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  walnut: "https://images.unsplash.com/photo-1615874959477-df991aeabc52?auto=format&fit=crop&w=600&q=80",
  brass: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=80",
  linen: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  studio1: "https://images.unsplash.com/photo-1618220179427-9c464a9d6524?auto=format&fit=crop&w=800&q=80",
  studio2: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  studio3: "https://images.unsplash.com/photo-1615876234916-2a0a0a0a0a0a?auto=format&fit=crop&w=800&q=80",
} as const;

export const sampleFaqs = [
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
] as const;

export const sampleProcess = [
  {
    id: "consultation",
    title: "Consultation",
    description: "Understand your lifestyle, preferences, and project goals.",
  },
  {
    id: "concept",
    title: "Concept",
    description: "Develop a tailored design direction aligned with your vision.",
  },
  {
    id: "planning",
    title: "Space Planning",
    description: "Optimize layout, flow, and functionality for everyday living.",
  },
  {
    id: "visualization",
    title: "3D Visualization",
    description: "Experience your space before execution begins.",
  },
  {
    id: "materials",
    title: "Material Selection",
    description: "Curate premium finishes with purpose and longevity in mind.",
  },
  {
    id: "execution",
    title: "Execution",
    description: "Oversee craftsmanship and quality at every stage.",
  },
  {
    id: "handover",
    title: "Handover",
    description: "Deliver a finished space ready to feel like home.",
  },
] as const;

export const processSnapshot = [
  { id: "discover", title: "Discover", description: "Listen, observe, and understand how you live." },
  { id: "plan", title: "Plan", description: "Shape layouts and design direction with intention." },
  { id: "visualize", title: "Visualize", description: "See your space before a single wall is touched." },
  { id: "build", title: "Build", description: "Execute with precision and transparent oversight." },
  { id: "deliver", title: "Deliver", description: "Hand over a home designed to last." },
] as const;
