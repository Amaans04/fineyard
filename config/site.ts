export const siteConfig = {
  name: "Fine Yard",
  tagline: "Luxury Interior Design Studio",
  description:
    "Fine Yard designs timeless luxury interiors for homes, villas, apartments, and commercial spaces in Bengaluru.",
  url: "https://fineyard.in",
  locale: "en_IN",
  location: {
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
  },
  contact: {
    email: "hello@fineyard.in",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    address: "JP Nagar, Bengaluru, Karnataka 560078",
  },
  social: {
    instagram: "https://instagram.com/fineyard",
    facebook: "https://facebook.com/fineyard",
    linkedin: "https://linkedin.com/company/fineyard",
    pinterest: "https://pinterest.com/fineyard",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Founder", href: "/founder" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Modular Kitchen", href: "/services/modular-kitchen" },
    { label: "Living Room", href: "/services/living-room" },
    { label: "Bedroom", href: "/services/bedroom" },
    { label: "Wardrobe", href: "/services/wardrobe" },
    { label: "Villa Interiors", href: "/services/villa-interiors" },
    { label: "Commercial", href: "/services/commercial" },
  ],
  resources: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const primaryCta = {
  label: "Book a Consultation",
  href: "/contact",
} as const;
