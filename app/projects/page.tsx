"use client";

import React, { useMemo, useState } from "react";

type Tag = "AI" | "NLP" | "Full-Stack" | "Cloud" | "Data" | "Web";

type ProjectLink = {
  label: "GitHub" | "Live Demo" | "Case Study";
  href: string;
};

type Project = {
  title: string;
  featured?: boolean;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  tags: Tag[];
  links: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    title: "AI Shopping Assistant",
    featured: true,
    tagline: "NLP-driven product recommendation for fashion queries",
    description:
      "An end-to-end AI shopping assistant that understands natural language shopping requests and returns ranked product recommendations. Built with modular NLP components and a structured product database to support experimentation and future model comparisons.",
    highlights: [
      "Designed an NLP pipeline: intent classification, style extraction, and price parsing",
      "Implemented fuzzy matching + ranking over a structured product database (e.g., MySQL)",
      "Built a clean, modular architecture to support ablation studies and model/API comparison",
    ],
    tech: ["Python", "Transformers", "PyTorch", "MySQL", "RapidFuzz", "Pandas"],
    tags: ["AI", "NLP", "Data", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi" },
      { label: "Case Study", href: "https://github.com/OrcasJi" },
    ],
  },
  {
    title: "Cloudflare AI Agent (Workers + Durable Objects)",
    featured: true,
    tagline: "Edge-deployed AI agent with memory and prompt documentation",
    description:
      "A lightweight AI agent web app deployed on Cloudflare Workers, using Durable Objects for stateful memory. Designed for simple UX, clear prompts, and reproducible setup — ideal as a practical systems + AI integration demo.",
    highlights: [
      "Implemented conversational memory using Durable Objects (stateful edge storage)",
      "Built a clean UI and deployment workflow for fast iteration",
      "Documented AI prompts and system behaviour for transparency and reproducibility",
    ],
    tech: ["TypeScript", "Cloudflare Workers", "Durable Objects", "HTML/CSS"],
    tags: ["Cloud", "Web", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
  {
    title: "Personal Portfolio Website",
    tagline: "Minimal, recruiter-friendly portfolio with fast performance",
    description:
      "A clean personal website to showcase projects, experience, and contact details. Focused on strong information hierarchy, readability, and deployability.",
    highlights: [
      "Built with Next.js App Router + Tailwind for a clean, responsive layout",
      "Deployed to Vercel with automatic updates on push",
      "Structured pages for fast scanning: Home, Projects, About/CV, Contact",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Web", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi" },
      { label: "Live Demo", href: "https://example.com" },
    ],
  },
];

// --- UI helpers (small + safe)
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const FILTERS: Array<{ label: string; value: Tag | "ALL" }> = [
  { label: "All", value: "ALL" },
  { label: "AI", value: "AI" },
  { label: "NLP", value: "NLP" },
  { label: "Full-Stack", value: "Full-Stack" },
  { label: "Cloud", value: "Cloud" },
  { label: "Data", value: "Data" },
  { label: "Web", value: "Web" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Tag | "ALL">("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-600 leading-relaxed">
              A focused selection of work that demonstrates practical engineering
              and applied AI. Each project highlights clear outcomes, clean
              architecture, and deployability.
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="/"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Home
            </a>
            <a
              href="/contact"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              Contact
            </a>
          </div>
        </header>

        {/* Filters */}
        <section className="mt-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                  )}
                  type="button"
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Showing <span className="font-medium">{filtered.length}</span>{" "}
            project{filtered.length === 1 ? "" : "s"}.
          </p>
        </section>

        {/* Grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.title}
              className={cx(
                "group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition",
                "hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold tracking-tight">
                      {p.title}
                    </h2>
                    {p.featured && (
                      <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>
                </div>

                {/* Tags */}
                <div className="hidden flex-wrap gap-2 sm:flex">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                {p.description}
              </p>

              {/* Highlights */}
              <div className="mt-5">
                <p className="text-sm font-medium text-zinc-900">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {p.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mt-6">
                <p className="text-sm font-medium text-zinc-900">Tech</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-50 px-3 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.links.map((l) => {
                  const primary = l.label === "Live Demo";
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cx(
                        "rounded-xl px-4 py-2 text-sm transition",
                        primary
                          ? "bg-zinc-900 text-white hover:bg-zinc-800"
                          : "border border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                      )}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 p-10 text-center">
            <p className="text-zinc-700">
              No projects match this filter yet.
            </p>
            <button
              className="mt-4 rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
              onClick={() => setActive("ALL")}
              type="button"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <footer className="mt-16 rounded-2xl border border-zinc-200 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Want to talk?</p>
              <p className="mt-1 text-sm text-zinc-600">
                I’m open to Graduate / Early Career roles in the UK. Feel free
                to reach out.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="/contact"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
              >
                Contact
              </a>
              <a
                href="/"
                className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
              >
                Back to Home
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
