import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Cpu,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const services = [
  { title: "Software Engineering", description: "Custom web applications, mobile apps, business systems and tailored digital platforms.", icon: Blocks },
  { title: "AI & Innovation", description: "Artificial intelligence, machine learning, intelligent automation and predictive modelling.", icon: BrainCircuit },
  { title: "Data & Cloud", description: "Analytics, infrastructure, system design and modern cloud architecture for growing teams.", icon: Cloud },
  { title: "DevOps & Infrastructure", description: "Cloud deployment, CI/CD, containers, monitoring and resilient hosting operations.", icon: Cpu },
  { title: "Security & QA", description: "Secure implementation, testing, technical reviews and maintenance for reliable software.", icon: ShieldCheck },
  { title: "Technical Consulting", description: "Architecture guidance, technology selection, system upgrades and strategic technical support.", icon: Workflow },
];

const principles = [
  { title: "Problem-first engineering", description: "Understand the challenge, people and context before selecting technology." },
  { title: "Tailored solutions", description: "Shape software around the requirements and workflows that matter." },
  { title: "Security by design", description: "Consider privacy, access and data protection throughout engineering." },
  { title: "Scalable architecture", description: "Build a maintainable foundation that can evolve with changing needs." },
  { title: "Transparent delivery", description: "Keep decisions, scope and progress clear throughout the work." },
  { title: "Long-term support", description: "Plan for maintenance and improvement beyond the initial release." },
];

const process = [
  { title: "Discover", description: "Learn about goals, users, workflows and constraints." },
  { title: "Define", description: "Agree on scope, priorities and what success should mean." },
  { title: "Design", description: "Plan the user experience, data and technical approach." },
  { title: "Build", description: "Develop the agreed solution in considered increments." },
  { title: "Validate", description: "Test functionality, quality and fit against requirements." },
  { title: "Deploy", description: "Prepare and release the solution to its intended environment." },
  { title: "Support", description: "Maintain, monitor and improve the solution as needs evolve." },
];

const sectors = [
  "Small and medium-sized businesses",
  "Educational institutions",
  "Property and real estate businesses",
  "Startups and entrepreneurs",
  "Non-profit and community organizations",
  "Larger organizations and institutions",
];

export default function Home() {
  return (
    <div className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="hero-shell card-shadow rounded-[32px] px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal>
                <div className="inline-flex rounded-full border border-[#087FF5]/30 bg-[#EAF5FF] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#075DE5]">
                  IDEAS. SOFTWARE. NEXT.
                </div>
              </Reveal>

              <Reveal delay={0.08} className="mt-7">
                <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#071D55] sm:text-6xl xl:text-[5.1rem]">
                  Ideas Deserve Better Technology.
                </h1>
              </Reveal>

              <Reveal delay={0.12} className="mt-6">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#071D55] sm:text-4xl">
                  Let&apos;s Engineer What&apos;s Next.
                </h2>
              </Reveal>

              <Reveal delay={0.16} className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We don&apos;t just build software. We engineer solutions around problems that matter.
              </Reveal>

              <Reveal delay={0.2} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/about" className="inline-flex items-center justify-center rounded-xl bg-[#075DE5] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_35px_rgba(7,93,229,0.25)] transition hover:bg-[#064ec4]">
                  Explore SolarRick
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-[#BCD8FF] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#071D55] transition hover:border-[#075DE5] hover:text-[#075DE5]">
                  Start a Project
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="grid-pattern relative flex min-h-[380px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[28px] border border-slate-200/80 bg-[#edf5ff] px-5 py-8">
              <div className="blue-orb absolute inset-10 rounded-full blur-2xl" />
              <div className="relative z-10 flex aspect-square w-[min(100%,260px)] shrink-0 items-center justify-center rounded-full border-[12px] border-[#075DE5]/80 bg-white/40 shadow-[inset_0_0_40px_rgba(8,127,245,0.08)]">
                <div className="absolute inset-[18%] rounded-full border-2 border-[#087FF5]/70" />
                <div className="absolute inset-[32%] rounded-full border-2 border-[#08C8D8]/80" />
                <Image
                  src="/solarrick-logo.jpeg"
                  alt="SolarRick Technologies logo"
                  width={176}
                  height={176}
                  priority
                  className="relative z-10 h-[62%] w-[62%] rounded-2xl bg-white object-contain"
                />
              </div>
              <div className="relative z-10 max-w-full rounded-full border border-white/80 bg-white/85 px-4 py-2 text-center text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#071D55]">
                IDEAS • ENGINEERING • IMPACT
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Who We Are</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#071D55] sm:text-5xl">
              Engineering Solutions That Matter.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 card-shadow sm:p-8">
            <p className="text-lg leading-8 text-slate-600">
              SolarRick transforms ambitious ideas and complex operational challenges into practical software, digital experiences and technology solutions. We work with businesses, institutions, startups and individuals to create technology that supports real objectives.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-[28px] border border-slate-200 bg-[#edf5ff] p-6">
            <Link href="/about" className="inline-flex items-center gap-2 text-lg font-bold text-[#071D55] transition hover:text-[#075DE5]">
              Learn more about SolarRick <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">What We Engineer</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#071D55] sm:text-5xl">
              Practical technology capabilities for ambitious ideas.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="group rounded-[28px] border border-slate-200 bg-white p-6 card-shadow transition hover:-translate-y-1 hover:border-[#087FF5]/40 hover:shadow-[0_25px_45px_rgba(8,127,245,0.08)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF5FF] text-[#075DE5]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#087FF5]">Service</span>
                </div>
                <h3 className="mb-3 text-2xl font-extrabold tracking-[-0.05em] text-[#071D55]">{title}</h3>
                <p className="text-base leading-7 text-slate-600">{description}</p>
                <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#075DE5]">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Why SolarRick</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#071D55] sm:text-5xl">
              Technology built around your needs.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.04}>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 card-shadow">
                <div className="mb-4 h-2.5 w-2.5 rounded-full bg-[#08C8D8]" />
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#071D55]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Our Process</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#071D55] sm:text-5xl">
              A practical engineering journey.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {process.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 0.05}>
              <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-5 card-shadow">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF5FF] text-sm font-black text-[#075DE5]">
                    {index + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087FF5]">Step</span>
                </div>
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#071D55]">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Potential sectors</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#071D55] sm:text-5xl">
              Technology for real-world operations.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              These are potential customer segments, not a list of claimed clients or existing engagements.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <Reveal key={sector} delay={index * 0.05}>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 card-shadow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF5FF] text-[#075DE5]">
                  {index < 3 ? <Building2 className="h-5 w-5" /> : index < 5 ? <BriefcaseBusiness className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </div>
                <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#071D55]">{sector}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[32px] border border-slate-200 bg-[#071D55] px-6 py-10 text-white card-shadow sm:px-8 lg:px-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">Selected Work</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">
              Have an idea worth engineering?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
              Public case studies will be added when projects are approved for publication. Until then, explore SolarRick&apos;s engineering capabilities and approach.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/work" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#071D55] hover:bg-slate-100">
                View work
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white hover:border-white/50">
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
