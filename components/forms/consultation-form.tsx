"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { GlassCard } from "@/components/ui/glass-card";
import {
  FormField,
  FormMessage,
  FormSuccess,
  LuxuryInput,
  LuxurySelect,
  LuxuryTextarea,
} from "@/components/ui/form-field";
import { LuxuryButton } from "@/components/ui/luxury-button";
import {
  consultationSchema,
  contactMethodOptions,
  propertyTypeOptions,
  type ConsultationFormValues,
} from "@/lib/validations/consultation";
import { cn } from "@/lib/utils";

type ConsultationFormProps = {
  className?: string;
  onSubmitSuccess?: () => void;
};

export function ConsultationForm({
  className,
  onSubmitSuccess,
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      location: "",
      projectDetails: "",
      contactMethod: "",
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    try {
      // Phase 5 will wire this to email/CRM integration.
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.info("Consultation form submission:", data);
      setSubmitted(true);
      reset();
      onSubmitSuccess?.();
    } catch {
      setError("root", {
        message: "Something went wrong. Please try again or contact us directly.",
      });
    }
  };

  if (submitted) {
    return (
      <GlassCard className={className}>
        <FormSuccess message="Thank you. We'll be in touch within one business day." />
        <LuxuryButton
          type="button"
          variant="secondary"
          className="mt-6 w-full"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </LuxuryButton>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={cn(className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Full Name"
            htmlFor="name"
            required
            error={errors.name?.message}
          >
            <LuxuryInput
              id="name"
              autoComplete="name"
              placeholder="Your full name"
              error={errors.name?.message}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </FormField>

          <FormField
            label="Phone Number"
            htmlFor="phone"
            required
            error={errors.phone?.message}
          >
            <LuxuryInput
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              error={errors.phone?.message}
              {...register("phone")}
            />
          </FormField>
        </div>

        <FormField
          label="Email Address"
          htmlFor="email"
          required
          error={errors.email?.message}
        >
          <LuxuryInput
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </FormField>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Property Type"
            htmlFor="propertyType"
            required
            error={errors.propertyType?.message}
          >
            <LuxurySelect
              id="propertyType"
              defaultValue=""
              error={errors.propertyType?.message}
              {...register("propertyType")}
            >
              <option value="" disabled>
                Select property type
              </option>
              {propertyTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </LuxurySelect>
          </FormField>

          <FormField
            label="Project Location"
            htmlFor="location"
            required
            error={errors.location?.message}
          >
            <LuxuryInput
              id="location"
              placeholder="e.g. Indiranagar, Bengaluru"
              error={errors.location?.message}
              {...register("location")}
            />
          </FormField>
        </div>

        <FormField
          label="Project Details"
          htmlFor="projectDetails"
          required
          error={errors.projectDetails?.message}
        >
          <LuxuryTextarea
            id="projectDetails"
            placeholder="Tell us about your space, timeline, and design preferences."
            error={errors.projectDetails?.message}
            {...register("projectDetails")}
          />
        </FormField>

        <FormField
          label="Preferred Contact Method"
          htmlFor="contactMethod"
          required
          error={errors.contactMethod?.message}
        >
          <LuxurySelect
            id="contactMethod"
            defaultValue=""
            error={errors.contactMethod?.message}
            {...register("contactMethod")}
          >
            <option value="" disabled>
              How should we reach you?
            </option>
            {contactMethodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </LuxurySelect>
        </FormField>

        <FormMessage message={errors.root?.message} />

        <LuxuryButton
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending Request
            </>
          ) : (
            "Book a Consultation"
          )}
        </LuxuryButton>
      </form>
    </GlassCard>
  );
}
