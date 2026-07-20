"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  Home09Icon,
  Menu01Icon,
  Share08Icon,
  SofaSingleIcon,
} from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { useMobileNav } from "@/components/layout/mobile-nav-context";
import { ToolbarDock, type ToolbarDockItem } from "@/components/ui/toolbar-dock";
import { primaryCta, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const ICON = { className: "h-full w-full", strokeWidth: 2 } as const;

export function MobileToolbar() {
  const router = useRouter();
  const { openMenu } = useMobileNav();

  const items = useMemo<ToolbarDockItem[]>(
    () => [
      {
        id: "home",
        label: "Home",
        icon: <HugeiconsIcon icon={Home09Icon} {...ICON} />,
        onClick: () => router.push("/"),
      },
      {
        id: "services",
        label: "Services",
        icon: <HugeiconsIcon icon={SofaSingleIcon} {...ICON} />,
        onClick: () => router.push("/services"),
      },
      {
        id: "projects",
        label: "Projects",
        icon: <HugeiconsIcon icon={Home09Icon} {...ICON} />,
        onClick: () => router.push("/projects"),
      },
      {
        id: "book",
        label: "Book Consultation",
        icon: <HugeiconsIcon icon={Calendar03Icon} {...ICON} />,
        badge: true,
        onClick: () => router.push(primaryCta.href),
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        icon: <HugeiconsIcon icon={Share08Icon} {...ICON} />,
        onClick: () => {
          window.open(
            `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
            "_blank",
            "noopener,noreferrer",
          );
        },
      },
      {
        id: "menu",
        label: "Menu",
        icon: <HugeiconsIcon icon={Menu01Icon} {...ICON} />,
        onClick: openMenu,
      },
    ],
    [openMenu, router],
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 lg:hidden",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      <div className="relative">
        <ToolbarDock items={items} defaultCollapsed={false} />
      </div>
    </div>
  );
}
