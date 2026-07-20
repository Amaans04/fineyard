"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileNavProvider } from "@/components/layout/mobile-nav-context";
import { MobileToolbar } from "@/components/layout/mobile-toolbar";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <MobileNavProvider>
      <SmoothScroll>
        <ScrollProgress />
        <Header />
        <main id="main-content" className="flex-1 pb-28 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileToolbar />
      </SmoothScroll>
    </MobileNavProvider>
  );
}
