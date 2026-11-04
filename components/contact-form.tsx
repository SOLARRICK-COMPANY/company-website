"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  contactServices,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/contact-schema";

const fieldClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#087FF5] focus:ring-2 focus:ring-[#087FF5]/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      privacyConsent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setErrorMessage(null);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setErrorMessage(result.error ?? "We could not submit your enquiry. Please try again later.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setErrorMessage("We could not reach the enquiry service. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
          <input id="fullName" autoComplete="name" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} className={fieldClassName} placeholder="Your full name" />
          {errors.fullName && <p id="fullName-error" className="mt-2 text-sm text-red-700">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-slate-700">Business or organization</label>
          <input id="organization" autoComplete="organization" aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} {...register("organization")} className={fieldClassName} placeholder="Business or organization" />
          {errors.organization && <p id="organization-error" className="mt-2 text-sm text-red-700">{errors.organization.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
          <input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className={fieldClassName} placeholder="name@example.com" />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-red-700">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Telephone number</label>
          <input id="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} className={fieldClassName} placeholder="Include country code if possible" />
          {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-700">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">Service required</label>
          <select id="service" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} {...register("service")} className={fieldClassName}>
            <option value="">Select a service</option>
            {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
          {errors.service && <p id="service-error" className="mt-2 text-sm text-red-700">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-slate-700">Project budget range (optional)</label>
          <input id="budget" {...register("budget")} className={fieldClassName} placeholder="A range, or “to be discussed”" />
          {errors.budget && <p className="mt-2 text-sm text-red-700">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectDescription" className="mb-2 block text-sm font-semibold text-slate-700">Project description</label>
        <textarea id="projectDescription" rows={6} aria-invalid={Boolean(errors.projectDescription)} aria-describedby={errors.projectDescription ? "description-error" : undefined} {...register("projectDescription")} className={fieldClassName} placeholder="Tell us about the challenge, your goals and any relevant timeline." />
        {errors.projectDescription && <p id="description-error" className="mt-2 text-sm text-red-700">{errors.projectDescription.message}</p>}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="preferredContactMethod" className="mb-2 block text-sm font-semibold text-slate-700">Preferred contact method</label>
          <select id="preferredContactMethod" aria-invalid={Boolean(errors.preferredContactMethod)} aria-describedby={errors.preferredContactMethod ? "method-error" : undefined} {...register("preferredContactMethod")} className={fieldClassName}>
            <option value="">Select an option</option>
            <option value="Email">Email</option>
            <option value="Phone call">Phone call</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
          {errors.preferredContactMethod && <p id="method-error" className="mt-2 text-sm text-red-700">{errors.preferredContactMethod.message}</p>}
        </div>

        <div className="flex items-end">
          <label htmlFor="privacyConsent" className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <input id="privacyConsent" type="checkbox" aria-invalid={Boolean(errors.privacyConsent)} {...register("privacyConsent")} className="h-4 w-4 rounded border-slate-300 text-[#087FF5] focus:ring-[#087FF5]" />
            I agree to be contacted about this enquiry.
          </label>
        </div>
      </div>
      {errors.privacyConsent && <p className="text-sm text-red-700">{errors.privacyConsent.message}</p>}

      <div aria-live="polite" aria-atomic="true">
        {submitted && (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
            Your enquiry has been received securely. Thank you for getting in touch.
          </p>
        )}
        {errorMessage && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
            {errorMessage}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl bg-[#075DE5] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_30px_rgba(7,93,229,0.2)] transition hover:bg-[#064ec4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075DE5] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending enquiry..." : "Send project enquiry"}
      </button>
    </form>
  );
}
