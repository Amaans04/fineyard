import type { Metadata, Viewport } from "next";

import { SiteChrome } from "@/components/layout/site-chrome";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#035718",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Luxury Interior Designers in Bengaluru | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "luxury interior designers Bengaluru",
    "home interior design studio",
    "premium interior company",
    "villa interior designers",
    "turnkey interiors Bengaluru",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Luxury Interior Designers in Bengaluru | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: "/brand/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Luxury Interior Design Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Luxury Interior Designers in Bengaluru | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/brand/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-clip bg-background text-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-twilight focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
