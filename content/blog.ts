import type { BlogPost } from "@/types/content";
import { sampleImages } from "@/constants/sample-content";

export const blogPosts: BlogPost[] = [
  {
    slug: "apartment-interior-ideas-bengaluru",
    title: "Apartment Interior Ideas for Bengaluru Homes",
    excerpt:
      "Thoughtful design strategies to make apartment living feel spacious, calm, and unmistakably yours.",
    category: "Design Tips",
    coverImage: sampleImages.project1,
    author: "Fine Yard Studio",
    publishedAt: "2026-01-15",
    readingTime: "8 min read",
    content: [
      {
        type: "paragraph",
        value:
          "Apartments in Bengaluru come with their own rhythm — compact footprints, abundant light in some rooms, and the need for smart storage everywhere. The best apartment interiors don't fight these constraints; they work with them.",
      },
      {
        type: "heading",
        value: "Start with how you live",
      },
      {
        type: "paragraph",
        value:
          "Before choosing a style, map your daily routines. Where do you work, unwind, and gather? This shapes every layout decision more than any trend ever could.",
      },
      {
        type: "list",
        value: [
          "Define zones within open plans using furniture, not walls",
          "Invest in concealed storage at entry and living areas",
          "Use a restrained palette — two main materials and one accent",
          "Layer lighting instead of relying on a single overhead source",
        ],
      },
      {
        type: "heading",
        value: "Materials that age well",
      },
      {
        type: "paragraph",
        value:
          "In apartments, surfaces get daily use. Choose materials that improve with time — natural wood, stone, and quality hardware rather than trendy finishes that date quickly.",
      },
    ],
    faqs: [
      {
        id: "budget",
        question: "What budget should I plan for a full apartment interior?",
        answer:
          "Budgets vary widely based on scope and finishes. A consultation helps us understand your space and provide a realistic range.",
      },
    ],
  },
  {
    slug: "modular-kitchen-planning-guide",
    title: "The Complete Modular Kitchen Planning Guide",
    excerpt:
      "Everything you need to consider before designing a kitchen that works as beautifully as it looks.",
    category: "Kitchen Design",
    coverImage: sampleImages.service1,
    author: "Fine Yard Studio",
    publishedAt: "2026-02-02",
    readingTime: "10 min read",
    content: [
      {
        type: "paragraph",
        value:
          "A kitchen is the most functional room in any home. Good design here saves time every single day — not just on the day you move in.",
      },
      {
        type: "heading",
        value: "The work triangle still matters",
      },
      {
        type: "paragraph",
        value:
          "Sink, stove, and refrigerator should form an efficient triangle. In Indian kitchens, also consider prep space, masala storage, and ventilation.",
      },
      {
        type: "list",
        value: [
          "Plan appliance locations before finalizing cabinetry",
          "Include deep drawers for pots and pans",
          "Use pull-out units for corner spaces",
          "Plan task lighting under upper cabinets",
        ],
      },
    ],
  },
  {
    slug: "best-marble-for-homes",
    title: "Choosing the Best Marble for Your Home",
    excerpt:
      "A practical guide to selecting marble that suits Bengaluru's climate, your lifestyle, and your design vision.",
    category: "Material Guides",
    coverImage: sampleImages.studio1,
    author: "Fine Yard Studio",
    publishedAt: "2026-02-18",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        value:
          "Marble brings unmatched elegance to interiors. But not all marble suits every application — understanding where and how to use it prevents costly mistakes.",
      },
      {
        type: "heading",
        value: "High-traffic vs. feature areas",
      },
      {
        type: "paragraph",
        value:
          "Use harder, less porous varieties in kitchens and entryways. Save softer, more dramatic veining for feature walls, bathroom vanities, and accent surfaces.",
      },
    ],
  },
  {
    slug: "wardrobe-planning-guide",
    title: "Wardrobe Planning Guide for Indian Homes",
    excerpt:
      "How to design wardrobes that store more, look cleaner, and match how you actually dress.",
    category: "Storage",
    coverImage: sampleImages.wardrobe,
    author: "Fine Yard Studio",
    publishedAt: "2026-03-05",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        value:
          "Most wardrobe problems aren't about size — they're about internal planning. A well-designed interior doubles the usefulness of the same footprint.",
      },
      {
        type: "list",
        value: [
          "Map long hang, short hang, and folded storage separately",
          "Include dedicated accessory and shoe zones",
          "Plan lighting inside deep wardrobes",
          "Use soft-close hardware throughout",
        ],
      },
    ],
  },
];

export const blogCategories = [
  "All",
  "Design Tips",
  "Kitchen Design",
  "Material Guides",
  "Storage",
  "Space Planning",
  "Luxury Homes",
] as const;

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
