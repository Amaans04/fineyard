import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const luxuryButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[14px] font-subheading text-sm font-medium tracking-[0.02em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-twilight/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-twilight text-white shadow-[0_8px_32px_rgba(31,25,100,0.18)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(31,25,100,0.24)] active:translate-y-0",
        secondary:
          "border border-border bg-transparent text-heading hover:-translate-y-1 hover:border-twilight/30 hover:bg-white",
        ghost:
          "bg-transparent text-heading underline-offset-4 hover:text-twilight hover:underline",
        gold:
          "bg-gold text-white hover:-translate-y-1 hover:brightness-110 active:translate-y-0",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "size-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type LuxuryButtonProps = VariantProps<typeof luxuryButtonVariants> &
  Omit<ComponentPropsWithoutRef<"button">, "onClick"> & {
    href?: string;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
  };

export function LuxuryButton({
  className,
  variant,
  size,
  href,
  loading = false,
  disabled,
  children,
  onClick,
  ...props
}: LuxuryButtonProps) {
  const classes = cn(luxuryButtonVariants({ variant, size, className }));
  const isDisabled = disabled || loading;

  const content = (
    <>
      {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
      {children}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

export { luxuryButtonVariants };
