import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, Building2, Cloud, Database, ShoppingCart, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore potential software solutions for business operations, education, property, commerce, automation and data.",
};

const solutionSections = [
  {
    title: "Business management and administration",
    problem: "Operations depend on manual coordination, inefficient records and fragmented administrative processes.",
    technology: "Custom dashboards, workflow modules and secure backend systems that connect key operations and reporting.",
    benefit: "Faster decision-making, cleaner records and improved operational visibility for teams.",
    capabilities: ["Business systems", "Workflow automation", "Reporting", "Integration"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Education and learning management",
    problem: "Learning programs need better organization, enrollment tracking and communication without overwhelming staff.",
    technology: "Learning portals, scheduling tools, learner records and digital content flows built around academic process needs.",
    benefit: "Improved learner experience, clearer oversight and more consistent management of educational delivery.",
    capabilities: ["Portals", "Automation", "Data management", "User access"],
    icon: Sparkles,
  },
  {
    title: "Property and rental management",
    problem: "Property operations rely on manual follow-ups, scattered records and inconsistent tenant communications.",
    technology: "Property management portals, lease tracking, maintenance workflows and analytics views for better coordination.",
    benefit: "More organized operations, stronger recordkeeping and better service for tenants and managers.",
    capabilities: ["Booking flows", "Reporting", "Tenant systems", "Workflow tools"],
    icon: Building2,
  },
  {
    title: "Digital commerce and e-commerce",
    problem: "Businesses need online sales experiences that feel professional while remaining manageable and reliable.",
    technology: "E-commerce platforms, product flows, secure checkout integrations and backend operations for digital commerce.",
    benefit: "A clearer customer journey, stronger online presence and better operational efficiency.",
    capabilities: ["Shopping flows", "Payment integration", "Inventory logic", "Customer access"],
    icon: ShoppingCart,
  },
  {
    title: "Workflow and process automation",
    problem: "Teams lose time on repetitive steps, manual handoffs and disconnected systems.",
    technology: "Process automation, task orchestration and data pipelines that reduce operational friction.",
    benefit: "Lower administrative overhead, more consistent execution and stronger speed across departments.",
    capabilities: ["Automation", "APIs", "Integrations", "Monitoring"],
    icon: Cloud,
  },
  {
    title: "Customer and partner management",
    problem: "Client relationships need organized communication, clear records and dependable follow-up.",
    technology: "CRM-style structures, communication workflows and structured customer management tools.",
    benefit: "Better retention, clearer accountability and a more professional client experience.",
    capabilities: ["CRM design", "Partner systems", "Communication flows", "Data visibility"],
    icon: Users,
  },
  {
    title: "Data management and reporting",
    problem: "Teams struggle to access meaningful insights from fragmented information and inconsistent reporting.",
    technology: "Data models, dashboards, reporting layers and analytics systems designed for decision support.",
    benefit: "Better visibility, faster insights and more confident operational decisions.",
    capabilities: ["Dashboards", "Analytics", "Data pipelines", "Reporting"],
    icon: Database,
  },
  {
    title: "Connectivity and digital platforms",
    problem: "Organizations need connected systems and digital entry points that support growth and real-world service delivery.",
    technology: "Platform architecture, APIs, user journeys and shared service layers that connect people, data and workflows.",
    benefit: "Stronger connectivity between systems, clearer service delivery and more scalable digital operations.",
    capabilities: ["Platform architecture", "APIs", "System integrations", "User flows"],
    icon: Users,
  },
];

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Solutions</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          Practical technology for everyday operational challenges.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          These are potential solution areas, not products represented as already launched. The right approach depends on each organization&apos;s users, processes, objectives and constraints.
        </p>
      </div>

      <div className="grid gap-8">
        {solutionSections.map((section) => {
          const Icon = section.icon;

          return (
            <section key={section.title} className="rounded-[30px] border border-slate-200 bg-white p-8 card-shadow">
              <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF5FF] text-[#075DE5]">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">{section.title}</h2>
                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#087FF5]">Problem</p>
                      <p className="mt-2 text-base leading-7 text-slate-600">{section.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#087FF5]">Technology</p>
                      <p className="mt-2 text-base leading-7 text-slate-600">{section.technology}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#087FF5]">Potential benefit</p>
                      <p className="mt-2 text-base leading-7 text-slate-600">{section.benefit}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.capabilities.map((capability) => (
                      <span key={capability} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-700">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 rounded-[28px] border border-slate-200 bg-[#071D55] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">We build around the real need</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
          SolarRick focuses on solving the underlying operational and user problem first. We then match the technology, architecture and delivery model to the work that actually needs to happen.
        </p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-sky-200">
          Talk to us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
