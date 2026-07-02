import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero } from "@/components/layout/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqs } from "@/constants/home-content";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Fine Yard | Book a Consultation",
  description:
    "Get in touch with Fine Yard, Bengaluru's luxury interior design studio. Book a consultation, call us, or visit our studio.",
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Studio",
    value: siteConfig.contact.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat, 10:00 AM – 7:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Start With a Conversation"
        description="Whether you're planning a single room or an entire home, we'd love to hear about your project."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        compact
      />

      <Section background="white" spacing="compact">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-[20px] border border-border bg-background p-6"
            >
              <Icon className="mb-4 size-5 text-twilight" strokeWidth={1.5} />
              <p className="font-subheading text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-2 block text-base text-heading transition-colors hover:text-twilight"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-base text-heading">{value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section background="default">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Consultation Form"
            title="Book a Consultation"
            description="Share a few details about your project and we'll be in touch within one business day."
          />
          <ConsultationForm />
        </div>
      </Section>

      <Section background="white" spacing="compact">
        <SectionHeading
          eyebrow="Visit Us"
          title="Studio Location"
          description={siteConfig.contact.address}
          className="mb-8"
        />
        <div className="aspect-[16/7] overflow-hidden rounded-[24px] border border-border bg-beige/35">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <div className="space-y-2">
              <p className="font-heading text-2xl text-heading">
                {siteConfig.location.city}, {siteConfig.location.country}
              </p>
              <p className="text-sm text-body">
                Google Maps embed — Phase 5 integration
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-4 font-subheading text-sm font-medium text-twilight uppercase transition-colors hover:text-gold"
              >
                Message on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section background="beige" spacing="compact">
        <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-12" />
        <Accordion items={[...homeFaqs]} />
      </Section>
    </>
  );
}
