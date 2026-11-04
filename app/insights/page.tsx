import type { Metadata } from "next";
import { BookOpen, Cloud, Code2, Database, LockKeyhole, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Future SolarRick perspectives on software engineering, cloud, security, AI and digital transformation.",
};

const categories = [
  { title: "Software engineering", description: "Approaches to designing, building and maintaining useful software.", icon: Code2 },
  { title: "Web and backend development", description: "Ideas on web applications, APIs, architecture and connected systems.", icon: Database },
  { title: "Cloud and DevOps", description: "Practical considerations for deploying and operating digital products.", icon: Cloud },
  { title: "Cybersecurity", description: "Security-minded engineering, privacy and responsible data practices.", icon: LockKeyhole },
  { title: "Artificial intelligence", description: "Thoughtful uses of AI, machine learning and automation.", icon: Sparkles },
  { title: "Digital transformation", description: "Technology choices for organizations and businesses in changing environments.", icon: BookOpen },
];

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087FF5]">Insights</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-[#071D55] sm:text-6xl">
          Ideas and perspectives on practical technology.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          This is where SolarRick will share considered notes on software engineering, digital innovation and technology for African businesses. Articles will appear here after they have been reviewed and approved.
        </p>
      </div>

      <section aria-labelledby="insight-topics">
        <h2 id="insight-topics" className="mb-6 text-2xl font-bold text-[#071D55]">Topics we plan to explore</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#075DE5]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#071D55]">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-10 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
        No articles have been published yet. We do not publish placeholder or automatically generated articles.
      </p>
    </div>
  );
}
