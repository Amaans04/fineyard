import {
  Cormorant_Garamond,
  Inter,
  Manrope,
} from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const subheadingFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-subheading",
  display: "swap",
});

export const fontVariables = [
  headingFont.variable,
  bodyFont.variable,
  subheadingFont.variable,
].join(" ");
