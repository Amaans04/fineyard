import type { Service } from "@/types/content";
import { sampleImages } from "@/constants/sample-content";

const defaultFaqs = [
  {
    id: "consultation",
    question: "How do I get started?",
    answer:
      "Book a consultation and we'll discuss your space, timeline, and design preferences. You'll receive a clear outline of next steps.",
  },
  {
    id: "timeline",
    question: "How long will my project take?",
    answer:
      "Timelines depend on scope. We'll provide an honest estimate during your consultation based on your specific requirements.",
  },
];

function createService(
  data: Omit<Service, "faqs" | "relatedProjectSlugs"> & {
    faqs?: Service["faqs"];
    relatedProjectSlugs?: string[];
  },
): Service {
  return {
    faqs: data.faqs ?? defaultFaqs,
    relatedProjectSlugs: data.relatedProjectSlugs ?? ["indiranagar-residence", "whitefield-villa"],
    ...data,
  };
}

export const services: Service[] = [
  createService({
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    summary: "Functional, elegant kitchens designed around how you cook, gather, and live.",
    description:
      "We design modular kitchens that balance workflow, storage, and aesthetics. Every layout is tailored to your cooking habits — not pulled from a standard catalogue.",
    heroImage: sampleImages.service1,
    gallery: [sampleImages.service1, sampleImages.project3, sampleImages.studio2],
    benefits: ["Optimized workflow", "Premium hardware", "Concealed storage", "Durable surfaces"],
    features: [
      { title: "Layout Planning", description: "Work triangle, prep zones, and appliance placement designed for efficiency." },
      { title: "Material Curation", description: "Countertops, shutters, and hardware selected for beauty and daily use." },
      { title: "Lighting Design", description: "Task and ambient lighting layered for function and atmosphere." },
    ],
    materials: ["Quartz", "Walnut", "Brass Hardware", "Back-painted Glass"],
  }),
  createService({
    slug: "living-room",
    title: "Living Room Design",
    summary: "Warm, balanced living spaces designed for gathering and everyday comfort.",
    description:
      "The living room sets the tone for your home. We design spaces that feel inviting, functional, and timeless — with furniture, lighting, and finishes that work together effortlessly.",
    heroImage: sampleImages.service2,
    gallery: [sampleImages.service2, sampleImages.project1, sampleImages.linen],
    benefits: ["Furniture planning", "Layered lighting", "Acoustic comfort", "Material harmony"],
    features: [
      { title: "Spatial Planning", description: "Furniture layouts that encourage conversation and comfort." },
      { title: "Feature Walls", description: "Texture, paneling, or art walls that anchor the room." },
      { title: "Custom Joinery", description: "Media units and display storage designed to disappear." },
    ],
    materials: ["Oak", "Linen", "Stone", "Brass"],
  }),
  createService({
    slug: "bedroom",
    title: "Bedroom Design",
    summary: "Restful retreats designed for comfort, calm, and personal expression.",
    description:
      "Bedrooms should feel like a sanctuary. We focus on lighting, textures, and storage that create a sense of calm while reflecting your personal style.",
    heroImage: sampleImages.bedroom,
    gallery: [sampleImages.bedroom, sampleImages.project2, sampleImages.wardrobe],
    benefits: ["Calming palettes", "Integrated storage", "Layered textiles", "Soft lighting"],
    features: [
      { title: "Headboard Design", description: "Custom upholstery or paneling as a focal point." },
      { title: "Wardrobe Integration", description: "Seamless storage that maintains visual calm." },
      { title: "Ambient Lighting", description: "Reading, mood, and task lighting thoughtfully layered." },
    ],
    materials: ["Upholstery", "Walnut", "Linen", "Textured Paint"],
  }),
  createService({
    slug: "wardrobe",
    title: "Wardrobe Design",
    summary: "Custom wardrobes that maximize storage while maintaining visual elegance.",
    description:
      "We design wardrobes around your lifestyle — how you dress, what you store, and how you use your space every morning.",
    heroImage: sampleImages.wardrobe,
    gallery: [sampleImages.wardrobe, sampleImages.bedroom, sampleImages.project3],
    benefits: ["Custom internals", "Soft-close hardware", "Mirror integration", "Lighting inside"],
    features: [
      { title: "Internal Planning", description: "Drawers, hanging, and accessory storage mapped to your wardrobe." },
      { title: "Finish Selection", description: "Veneers, laminates, and handles curated for longevity." },
      { title: "Space Optimization", description: "Floor-to-ceiling solutions that use every inch wisely." },
    ],
    materials: ["Walnut Veneer", "Leather Handles", "Mirror", "LED Strip"],
  }),
  createService({
    slug: "false-ceiling",
    title: "False Ceiling Design",
    summary: "Architectural ceiling designs that enhance light, acoustics, and spatial character.",
    description:
      "Ceilings are often overlooked. We use false ceiling design to define zones, hide services, and introduce layered lighting that transforms how a room feels.",
    heroImage: sampleImages.studio1,
    gallery: [sampleImages.studio1, sampleImages.service2, sampleImages.project1],
    benefits: ["Layered lighting", "Acoustic improvement", "Zone definition", "Clean services"],
    features: [
      { title: "Cove Lighting", description: "Indirect light that creates depth and warmth." },
      { title: "Feature Panels", description: "Wood, metal, or fabric inserts for visual interest." },
      { title: "Acoustic Treatment", description: "Materials selected to reduce echo in large rooms." },
    ],
    materials: ["Gypsum", "Wood Panels", "Metal Inserts", "Fabric"],
  }),
  createService({
    slug: "lighting-design",
    title: "Lighting Design",
    summary: "Layered lighting plans that shape mood, function, and architectural character.",
    description:
      "Lighting transforms spaces. We design layered schemes — ambient, task, and accent — that enhance materials and support how you live.",
    heroImage: sampleImages.project2,
    gallery: [sampleImages.project2, sampleImages.service2, sampleImages.studio3],
    benefits: ["Mood control", "Energy efficiency", "Material enhancement", "Scene settings"],
    features: [
      { title: "Lighting Layers", description: "Ambient, task, and accent lighting designed together." },
      { title: "Fixture Selection", description: "Decorative and architectural fixtures curated for each room." },
      { title: "Automation Ready", description: "Dimmable and smart-ready systems where appropriate." },
    ],
    materials: ["Brass Fixtures", "Linear LED", "Pendant Lights", "Recessed Spots"],
  }),
  createService({
    slug: "space-planning",
    title: "Space Planning",
    summary: "Intelligent layouts that optimize flow, function, and the feeling of space.",
    description:
      "Before any finishes are chosen, we map how you move through your home. Space planning ensures every square foot earns its place.",
    heroImage: sampleImages.project3,
    gallery: [sampleImages.project3, sampleImages.commercial, sampleImages.studio2],
    benefits: ["Optimized flow", "Furniture mapping", "Storage planning", "Future flexibility"],
    features: [
      { title: "Circulation Analysis", description: "How you move between rooms shapes the layout." },
      { title: "Furniture Placement", description: "Scale and positioning planned before procurement." },
      { title: "Zoning Strategy", description: "Public and private areas defined with intention." },
    ],
    materials: ["Drafting", "3D Models", "Material Boards", "Furniture Plans"],
  }),
  createService({
    slug: "turnkey-interiors",
    title: "Turnkey Interiors",
    summary: "Complete end-to-end interior execution — from concept to keys in hand.",
    description:
      "Turnkey interiors mean one team, one vision, one point of accountability. We manage design, procurement, and execution so you don't have to coordinate multiple vendors.",
    heroImage: sampleImages.project1,
    gallery: [sampleImages.project1, sampleImages.project2, sampleImages.service1],
    benefits: ["Single accountability", "Timeline management", "Quality control", "Transparent updates"],
    features: [
      { title: "Design to Delivery", description: "Complete project management from concept to handover." },
      { title: "Vendor Coordination", description: "All trades managed under one studio." },
      { title: "Site Supervision", description: "Regular visits to ensure craftsmanship standards." },
    ],
    materials: ["Full Material Palette", "Custom Joinery", "Flooring", "Lighting"],
    relatedProjectSlugs: ["indiranagar-residence", "whitefield-villa", "koramangala-loft"],
  }),
  createService({
    slug: "villa-interiors",
    title: "Villa Interiors",
    summary: "Bespoke villa interiors that honor architecture and elevate everyday living.",
    description:
      "Villas demand a different scale of thinking. We design interiors that complement architectural volumes while creating intimate, livable spaces throughout.",
    heroImage: sampleImages.project2,
    gallery: [sampleImages.project2, sampleImages.project1, sampleImages.studio1],
    benefits: ["Volume-aware design", "Indoor-outdoor flow", "Premium finishes", "Landscape integration"],
    features: [
      { title: "Architectural Harmony", description: "Interiors that respect and enhance the villa's structure." },
      { title: "Room-by-Room Planning", description: "Each space designed for its specific purpose and mood." },
      { title: "Landscape Connection", description: "Materials and views that connect inside and out." },
    ],
    materials: ["Natural Stone", "Oak", "Marble", "Linen"],
    relatedProjectSlugs: ["whitefield-villa", "indiranagar-residence"],
  }),
  createService({
    slug: "commercial",
    title: "Commercial Interiors",
    summary: "Professional workspaces and retail environments that communicate brand and function.",
    description:
      "Commercial interiors must work harder — impressing clients, supporting teams, and reflecting brand values. We design spaces that do all three.",
    heroImage: sampleImages.commercial,
    gallery: [sampleImages.commercial, sampleImages.studio2, sampleImages.project3],
    benefits: ["Brand alignment", "Acoustic design", "Durable finishes", "Flexible layouts"],
    features: [
      { title: "Reception Design", description: "First impressions shaped through material and light." },
      { title: "Work Zone Planning", description: "Open, focus, and collaboration areas balanced." },
      { title: "Meeting Rooms", description: "Privacy, acoustics, and technology integrated." },
    ],
    materials: ["Acoustic Panels", "Glass", "Oak Veneer", "Brass"],
    relatedProjectSlugs: ["mg-road-office"],
  }),
];

export function getAllServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
