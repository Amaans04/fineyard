export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = typeof import("@/config/site").siteConfig;
