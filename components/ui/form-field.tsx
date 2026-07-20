import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";

import { cn } from "@/lib/utils";

export type LuxuryInputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

export function LuxuryInput({ className, error, ...props }: LuxuryInputProps) {
  return (
    <input
      className={cn(
        "h-14 w-full rounded-2xl border border-border bg-white px-5 text-base text-heading outline-none transition-all placeholder:text-muted focus:border-spruce focus:ring-2 focus:ring-spruce/10 disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-destructive focus:border-destructive focus:ring-destructive/10",
        className,
      )}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}

export type LuxuryTextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  error?: string;
};

export function LuxuryTextarea({
  className,
  error,
  ...props
}: LuxuryTextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-[160px] w-full resize-y rounded-2xl border border-border bg-white px-5 py-4 text-base text-heading outline-none transition-all placeholder:text-muted focus:border-spruce focus:ring-2 focus:ring-spruce/10 disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-destructive focus:border-destructive focus:ring-destructive/10",
        className,
      )}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}

export type LuxurySelectProps = ComponentPropsWithoutRef<"select"> & {
  error?: string;
};

export function LuxurySelect({
  className,
  error,
  children,
  ...props
}: LuxurySelectProps) {
  return (
    <select
      className={cn(
        "h-14 w-full appearance-none rounded-2xl border border-border bg-white px-5 text-base text-heading outline-none transition-all focus:border-spruce focus:ring-2 focus:ring-spruce/10 disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-destructive focus:border-destructive focus:ring-destructive/10",
        className,
      )}
      aria-invalid={error ? true : undefined}
      {...props}
    >
      {children}
    </select>
  );
}

type FormLabelProps = ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};

export function FormLabel({
  children,
  className,
  required,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn(
        "mb-2 block font-subheading text-sm font-medium text-heading",
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-1 text-spruce" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  const fieldChild = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-describedby"?: string }>, {
        ...(children.props as object),
        ...(error ? { "aria-describedby": `${htmlFor}-error` } : {}),
      })
    : children;

  return (
    <div className={cn("space-y-2", className)}>
      <FormLabel htmlFor={htmlFor} required={required}>
        {label}
      </FormLabel>
      {fieldChild}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormMessage({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}

export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      className="rounded-[20px] border border-spruce/20 bg-spruce/5 px-6 py-5 text-center"
      role="status"
    >
      <p className="font-heading text-2xl text-heading">{message}</p>
    </div>
  );
}
