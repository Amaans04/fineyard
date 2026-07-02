import type { ReactNode } from "react";

import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={cn(isCenter && "justify-center")}>{eyebrow}</Eyebrow>
      ) : null}
      <Heading
        as="h2"
        size={size === "large" ? "h1" : "h2"}
        align={align}
        className={titleClassName}
      >
        {title}
      </Heading>
      {description ? (
        <Text
          size="lg"
          align={align}
          className={cn("max-w-2xl text-body", isCenter && "mx-auto")}
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
}
