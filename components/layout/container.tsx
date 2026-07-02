import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
  size?: "default" | "reading" | "hero";
};

const sizeClasses = {
  default: "max-w-[1440px]",
  reading: "max-w-[720px]",
  hero: "max-w-[1600px]",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 md:px-12 xl:px-20",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
