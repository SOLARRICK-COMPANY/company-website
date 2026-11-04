import { z } from "zod";

export const contactServices = [
  "Custom Software Development",
  "Web Development",
  "Mobile Applications",
  "Backend Engineering and APIs",
  "AI and Machine Learning",
  "Cloud and DevOps",
  "Data and Analytics",
  "Technical Consulting",
  "Other",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40),
  service: z.enum(contactServices),
  budget: z.string().trim().max(160).optional(),
  projectDescription: z.string().trim().min(20).max(5000),
  preferredContactMethod: z.enum(["Email", "Phone call", "WhatsApp"]),
  privacyConsent: z.boolean().refine((value) => value, {
    message: "Consent is required before submitting this enquiry.",
  }),
  website: z.string().max(0).optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
