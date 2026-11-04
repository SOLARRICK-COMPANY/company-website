import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SolarRick Technologies about a software engineering or digital innovation project.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Contact</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          Let&apos;s build something that matters.
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 card-shadow">
            <h2 className="text-2xl font-black tracking-[-0.05em] text-[#071D55]">General contact</h2>
            <ul className="mt-6 space-y-5 text-slate-600">
              <li className="flex items-start gap-3"><Mail aria-hidden="true" className="mt-1 h-5 w-5 text-[#087FF5]" /> <a href="mailto:sollarickke@gmail.com" className="font-medium text-[#075DE5] hover:underline">sollarickke@gmail.com</a></li>
              <li className="flex items-start gap-3"><Phone aria-hidden="true" className="mt-1 h-5 w-5 text-[#087FF5]" /> <a href="tel:+254741486102" className="font-medium text-[#075DE5] hover:underline">0741 486 102</a></li>
              <li className="flex items-start gap-3"><MessageCircle aria-hidden="true" className="mt-1 h-5 w-5 text-[#087FF5]" />
                <span>WhatsApp: <a href="https://wa.me/254741486102" target="_blank" rel="noreferrer" className="font-medium text-[#075DE5] hover:underline">0741 486 102</a>
                  {" / "}<a href="https://wa.me/254768262962" target="_blank" rel="noreferrer" className="font-medium text-[#075DE5] hover:underline">0768 262 962</a>
                </span>
              </li>
              <li className="flex items-start gap-3"><MapPin aria-hidden="true" className="mt-1 h-5 w-5 text-[#087FF5]" /> <span>Operating from Kenya</span></li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#EAF5FF] p-8">
            <h3 className="text-2xl font-black tracking-[-0.05em] text-[#071D55]">Security & privacy</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Share only information needed to describe your enquiry. The form will confirm submission only after the secure enquiry database has been configured and the request has been saved.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 card-shadow">
          <h2 className="text-2xl font-black tracking-[-0.05em] text-[#071D55]">Project enquiry form</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">Tell us about the challenge, the opportunity, and the delivery context so we can assess the right next step.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
