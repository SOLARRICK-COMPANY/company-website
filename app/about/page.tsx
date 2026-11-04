import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SolarRick Technologies, its founders, mission, vision and problem-first engineering philosophy.",
};

const values = [
  "Purposeful innovation and practical problem-solving.",
  "Quality, reliability and maintainability.",
  "Client collaboration and clear communication.",
  "Security, privacy and responsible data use.",
  "Transparency, accountability and professional integrity.",
  "Continuous learning and improvement.",
];

const principles = [
  "Understanding before engineering.",
  "Purpose before technology.",
  "Quality before shortcuts.",
  "Security before deployment.",
  "Long-term value over temporary solutions.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">About SolarRick</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          We engineer thoughtful solutions around real problems.
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 card-shadow">
          <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">Who We Are</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SolarRick Technologies is an early-stage software engineering and digital innovation company founded by Fredrick Onyango and Apollo Brian. We approach software with a problem-first mindset, building practical, reliable and maintainable technology for the real environments our clients work in.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our work is designed to help businesses, institutions, startups and individuals turn operational complexity into better digital systems. We are not interested in selling technology for its own sake; we focus on making the right engineering decisions for each challenge.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#EAF5FF] bg-[#EAF5FF] p-8">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#071D55]">Our Vision</h3>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            To become a trusted African software engineering and innovation company, recognized for transforming ideas and operational challenges into impactful, reliable and scalable digital solutions.
          </p>
          <h3 className="mt-8 text-2xl font-black tracking-[-0.05em] text-[#071D55]">Our Mission</h3>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            To design, develop and deliver innovative, secure and maintainable software solutions tailored to the needs of businesses, institutions, organizations and individuals.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 card-shadow">
          <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">Our Philosophy</h2>
          <ul className="mt-6 space-y-4">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-8 text-slate-700">
                <CheckCircle2 className="mt-2 h-5 w-5 flex-none text-[#087FF5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 card-shadow">
          <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">Our Core Values</h2>
          <ul className="mt-6 space-y-4">
            {values.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-8 text-slate-700">
                <ShieldCheck className="mt-2 h-5 w-5 flex-none text-[#075DE5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-[30px] border border-slate-200 bg-white p-8 card-shadow">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-black tracking-[-0.06em] text-[#071D55]">Meet the Founders</h2>
          <Sparkles className="h-6 w-6 text-[#087FF5]" />
        </div>
        <p className="mb-6 text-sm text-slate-600">Portraits can be added when approved photographs are available.</p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200 bg-[#F5F8FC] p-6">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF5FF] text-2xl font-bold text-[#075DE5]" aria-label="Portrait to be added">
              FO
            </div>
            <h3 className="text-2xl font-black tracking-[-0.04em] text-[#071D55]">Fredrick Onyango</h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#087FF5]">Co-founder</p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-[#F5F8FC] p-6">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF5FF] text-2xl font-bold text-[#075DE5]" aria-label="Portrait to be added">
              AB
            </div>
            <h3 className="text-2xl font-black tracking-[-0.04em] text-[#071D55]">Apollo Brian</h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#087FF5]">Co-founder</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[28px] border border-slate-200 bg-[#071D55] p-8 text-white card-shadow">
        <h2 className="text-3xl font-black tracking-[-0.06em] text-white">Our Approach</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
          SolarRick works closely with clients from initial discovery to implementation and ongoing support. We begin by understanding the challenge, map the process, agree on priorities and build the right solution with clear communication, secure practices and maintainable engineering.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-sky-200 hover:text-white">
          Start a conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
