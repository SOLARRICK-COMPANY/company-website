import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, Cloud, Database, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore SolarRick's engineering capabilities. Public project case studies will be added when approved for publication.",
};

const capabilities = [
  {
    title: "Digital products",
    description: "Web and mobile applications shaped around clearly defined user needs and business goals.",
    icon: Blocks,
  },
  {
    title: "Connected systems",
    description: "Backend services, APIs and integrations that help information move reliably between systems.",
    icon: Database,
  },
  {
    title: "Cloud and delivery",
    description: "Deployment and operational foundations designed to support dependable software delivery.",
    icon: Cloud,
  },
  {
    title: "Mobile experiences",
    description: "Responsive, accessible mobile products that fit the needs and context of their users.",
    icon: Smartphone,
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Our Work</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          Engineering capability, grounded in real needs.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We share project work here only when it is approved for publication. SolarRick has no public case studies to feature at this time.
        </p>
      </div>

      <section aria-labelledby="capabilities-heading">
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087FF5]">Capabilities</p>
          <h2 id="capabilities-heading" className="mt-2 text-3xl font-black tracking-tight text-[#071D55]">
            What we can engineer
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#075DE5]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#071D55]">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-[#071D55] p-7 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Have a challenge you want to solve?</h2>
          <p className="mt-2 max-w-2xl text-slate-200">Tell us what you are trying to achieve and we can explore an appropriate approach together.</p>
        </div>
        <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 font-semibold text-sky-200 hover:text-white">
          Discuss a project <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
