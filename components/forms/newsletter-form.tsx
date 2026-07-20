"use client";

import { useState } from "react";

import { LuxuryButton } from "@/components/ui/luxury-button";
import { FormSuccess } from "@/components/ui/form-field";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FormSuccess message="You're subscribed. Welcome to the studio." />
    );
  }

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="h-14 flex-1 rounded-2xl border border-border bg-background px-5 text-base text-heading outline-none transition-all placeholder:text-muted focus:border-twilight focus:ring-2 focus:ring-twilight/10"
      />
      <LuxuryButton type="submit" size="default">
        Subscribe
      </LuxuryButton>
    </form>
  );
}
