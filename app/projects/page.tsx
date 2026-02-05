const projects = [
  {
    title: "AI Shopping Assistant",
    desc: "NLP intent classification + style extraction + fuzzy search + ranked recommendations for fashion queries.",
    tech: ["Python", "Transformers", "PyTorch", "MySQL", "RapidFuzz"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Demo", href: "https://example.com" },
    ],
  },
  {
    title: "Cloudflare AI Agent (Workers + Durable Objects)",
    desc: "A lightweight AI agent web app built on Cloudflare Workers with memory + clear prompts documentation.",
    tech: ["TypeScript", "Cloudflare Workers", "Durable Objects"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 text-zinc-600">
          A small selection of work I can share publicly.
        </p>

        <div className="mt-10 grid gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 p-6">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-zinc-600 leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className="text-sm underline decoration-zinc-300 hover:decoration-zinc-500"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a className="text-sm underline decoration-zinc-300" href="/">
            ← Back
          </a>
        </div>
      </div>
    </main>
  );
}
