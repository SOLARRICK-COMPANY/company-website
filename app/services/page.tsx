import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CloudCog, Cpu, Database, ShieldCheck, Smartphone, Sparkles, Webhook } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore SolarRick's custom software, web and mobile development, backend, cloud, quality assurance and consulting capabilities.",
};

const serviceSections = [
  {
    title: "Custom Software Development",
    description: "We engineer custom business systems, management platforms, internal tools and digital products designed around your real workflows and operational constraints.",
    features: ["Custom business applications", "Enterprise systems", "Management platforms", "Customer portals", "Workflow systems", "SaaS applications"],
    icon: Webhook,
  },
  {
    title: "Web Development",
    description: "From business websites to product-grade web applications, we build polished digital experiences with maintainable architecture and strong user journeys.",
    features: ["Corporate websites", "Business websites", "E-commerce platforms", "Web applications", "Progressive Web Apps", "Subscription platforms"],
    icon: Webhook,
  },
  {
    title: "Mobile Application Development",
    description: "We create mobile experiences that are functional, user-friendly and aligned with the way businesses and customers operate in the real world.",
    features: ["Android applications", "iOS applications", "Cross-platform apps", "Mobile business apps", "Customer-facing products"],
    icon: Smartphone,
  },
  {
    title: "Backend Engineering and APIs",
    description: "We build performance-focused APIs and backend systems with data integrity, secure access controls and reliable integrations at the core.",
    features: ["REST APIs", "Database architecture", "Authentication and authorization", "Role-based access control", "Payment integrations", "Data migration"],
    icon: Database,
  },
  {
    title: "AI, Machine Learning and Data Solutions",
    description: "We apply AI and data capabilities thoughtfully to reduce friction, uncover insight and improve decision-making where they genuinely create value.",
    features: ["AI-enabled applications", "Machine learning", "Predictive modelling", "Data analytics", "Intelligent automation", "Reporting and visualization"],
    icon: Sparkles,
  },
  {
    title: "Cloud and DevOps",
    description: "We help teams deploy and operate software reliably with scalable infrastructure, automation and modern cloud practices.",
    features: ["Cloud deployment", "Docker and containerization", "CI/CD pipelines", "Application hosting", "Monitoring", "Cloud migration"],
    icon: CloudCog,
  },
  {
    title: "Quality Assurance and Security",
    description: "We validate quality, reduce risk and help ensure software is dependable, secure and maintainable over time.",
    features: ["Functional testing", "Automated testing", "Performance testing", "Access-control reviews", "Secure implementation", "Technical documentation"],
    icon: ShieldCheck,
  },
  {
    title: "Technical Consulting and Maintenance",
    description: "We guide clients through technical decisions, system improvements and day-to-day support with a practical, long-term mindset.",
    features: ["Solution architecture", "Technology selection", "Technical reviews", "Upgrades", "Troubleshooting", "Maintenance agreements"],
    icon: Cpu,
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Services</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          Engineering capability for the work that matters.
        </h1>
      </div>

      <div className="space-y-8">
        {serviceSections.map((service) => {
          const Icon = service.icon;

          return (
            <section key={service.title} className="rounded-[30px] border border-slate-200 bg-white p-8 card-shadow">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF5FF] text-[#075DE5]">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{service.description}</p>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-base text-slate-700">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#087FF5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#075DE5]">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
