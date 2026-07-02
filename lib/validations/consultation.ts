import { z } from "zod";

export const consultationSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(15, "Phone number is too long.")
    .regex(/^[0-9+\s-]+$/, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  propertyType: z.string().min(1, "Please select a property type."),
  location: z
    .string()
    .min(2, "Please enter your project location.")
    .max(120, "Location is too long."),
  projectDetails: z
    .string()
    .min(10, "Please share a few details about your project.")
    .max(1000, "Project details are too long."),
  contactMethod: z.string().min(1, "Please select a preferred contact method."),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const propertyTypeOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "independent-house", label: "Independent House" },
  { value: "commercial", label: "Commercial Space" },
  { value: "other", label: "Other" },
] as const;

export const contactMethodOptions = [
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;
