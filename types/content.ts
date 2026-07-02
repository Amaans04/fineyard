export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  benefits: string[];
  features: { title: string; description: string }[];
  materials: string[];
  faqs: FaqItem[];
  relatedProjectSlugs: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  filter: string;
  coverImage: string;
  gallery: string[];
  summary: string;
  brief: string;
  objectives: string[];
  highlights: { title: string; description: string }[];
  materials: string[];
  story: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  content: { type: "heading" | "paragraph" | "list"; value: string | string[] }[];
  faqs?: FaqItem[];
};
