import type { Project } from "@/types/content";
import { sampleImages } from "@/constants/sample-content";

export const projects: Project[] = [
  {
    slug: "indiranagar-residence",
    title: "Indiranagar Residence",
    location: "Indiranagar, Bengaluru",
    category: "Luxury Apartment",
    filter: "apartments",
    coverImage: sampleImages.project1,
    gallery: [sampleImages.project1, sampleImages.service2, sampleImages.bedroom],
    summary:
      "A calm, light-filled apartment designed around daily rituals — morning coffee, evening gatherings, and quiet retreat.",
    brief:
      "The clients wanted an apartment that felt spacious, warm, and effortlessly organized without losing character.",
    objectives: [
      "Maximize natural light across the living areas",
      "Create concealed storage without visual clutter",
      "Use a restrained palette of wood, stone, and linen",
    ],
    highlights: [
      { title: "Open Layout", description: "Living and dining flow seamlessly for everyday gatherings." },
      { title: "Custom Storage", description: "Built-in joinery keeps surfaces clear and calm." },
      { title: "Premium Finishes", description: "Walnut, marble, and brushed brass accents throughout." },
    ],
    materials: ["Walnut", "Italian Marble", "Linen", "Brass"],
    story:
      "We began by mapping how the family moved through the apartment at different times of day. That shaped every decision — from the orientation of the sofa to the placement of ambient lighting. The result is a home that feels considered, not decorated.",
    featured: true,
    metrics: [
      { label: "Area", value: "2,400 sq ft" },
      { label: "Timeline", value: "16 weeks" },
      { label: "Style", value: "Contemporary Warmth" },
    ],
  },
  {
    slug: "whitefield-villa",
    title: "Whitefield Villa",
    location: "Whitefield, Bengaluru",
    category: "Villa Interiors",
    filter: "villas",
    coverImage: sampleImages.project2,
    gallery: [sampleImages.project2, sampleImages.project1, sampleImages.studio1],
    summary:
      "A villa interior rooted in architectural simplicity — generous volumes, natural materials, and quiet luxury.",
    brief:
      "A young family sought a villa that balanced open entertaining spaces with intimate family zones.",
    objectives: [
      "Honor the villa's architectural proportions",
      "Integrate indoor-outdoor living",
      "Design for long-term durability",
    ],
    highlights: [
      { title: "Double-Height Living", description: "Vertical space celebrated with layered lighting." },
      { title: "Indoor-Outdoor Flow", description: "Terrace and living room connected through material continuity." },
      { title: "Natural Materials", description: "Stone, oak, and lime-wash walls create warmth." },
    ],
    materials: ["Oak", "Natural Stone", "Lime Wash", "Linen"],
    story:
      "The villa's existing architecture provided a strong foundation. Our role was to enhance — not overwrite — its character with materials and furniture that feel collected over time.",
    featured: false,
    metrics: [
      { label: "Area", value: "4,800 sq ft" },
      { label: "Timeline", value: "20 weeks" },
      { label: "Style", value: "Modern Classic" },
    ],
  },
  {
    slug: "koramangala-loft",
    title: "Koramangala Loft",
    location: "Koramangala, Bengaluru",
    category: "Contemporary Home",
    filter: "residential",
    coverImage: sampleImages.project3,
    gallery: [sampleImages.project3, sampleImages.wardrobe, sampleImages.service1],
    summary:
      "An urban loft transformed into a refined retreat with bold material contrasts and thoughtful zoning.",
    brief:
      "A professional couple needed a home that transitions from focused work mode to relaxed evenings.",
    objectives: [
      "Define work and leisure zones within an open plan",
      "Introduce warmth to an industrial shell",
      "Maximize vertical storage",
    ],
    highlights: [
      { title: "Zoned Living", description: "Subtle partitions create distinct moods without walls." },
      { title: "Material Contrast", description: "Dark walnut against light plaster and steel." },
      { title: "Smart Storage", description: "Floor-to-ceiling joinery in bedroom and entry." },
    ],
    materials: ["Walnut", "Quartz", "Steel", "Textured Paint"],
    story:
      "Lofts demand restraint. We let the existing structure speak while introducing furniture and finishes that soften the space and make it feel unmistakably personal.",
    featured: false,
    metrics: [
      { label: "Area", value: "1,800 sq ft" },
      { label: "Timeline", value: "14 weeks" },
      { label: "Style", value: "Urban Contemporary" },
    ],
  },
  {
    slug: "mg-road-office",
    title: "MG Road Office",
    location: "MG Road, Bengaluru",
    category: "Commercial Interior",
    filter: "commercial",
    coverImage: sampleImages.commercial,
    gallery: [sampleImages.commercial, sampleImages.project2, sampleImages.studio2],
    summary:
      "A professional workspace designed to communicate trust, clarity, and calm for a growing consultancy.",
    brief:
      "The client needed an office that impresses clients while supporting focused daily work for a team of twelve.",
    objectives: [
      "Create a welcoming reception experience",
      "Provide acoustic privacy for meeting rooms",
      "Use durable, premium finishes",
    ],
    highlights: [
      { title: "Reception Impact", description: "First impressions shaped through light and material." },
      { title: "Acoustic Design", description: "Meeting rooms engineered for privacy and comfort." },
      { title: "Flexible Work Zones", description: "Open desks, focus pods, and collaboration areas." },
    ],
    materials: ["Oak Veneer", "Acoustic Panels", "Glass", "Brass"],
    story:
      "Commercial spaces require a different rhythm than homes. Here, every decision balanced brand perception with the practical needs of a team that spends long hours at work.",
    featured: false,
    metrics: [
      { label: "Area", value: "3,200 sq ft" },
      { label: "Timeline", value: "12 weeks" },
      { label: "Style", value: "Professional Modern" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3) {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, limit);
}
