export default function Contact() {
  const items = [
    {
      title: "Email",
      desc: "Best for applications and quick reach-outs.",
      value: "orcasjiovo@gmail.com",
      href: "mailto:orcasjiovo@gmail.com",
      icon: "✉️",
      accent: "group-hover:bg-blue-100 group-hover:text-blue-700",
    },
    {
      title: "LinkedIn",
      desc: "Connect for roles, referrals, and updates.",
      value: "linkedin.com/in/orcas-ji-about-me",
      href: "https://www.linkedin.com/in/orcas-ji-about-me",
      icon: "💼",
      accent: "group-hover:bg-blue-100 group-hover:text-blue-700",
    },
    {
      title: "GitHub",
      desc: "Browse my projects, code, and READMEs.",
      value: "github.com/OrcasJi",
      href: "https://github.com/OrcasJi",
      icon: "💻",
      accent: "group-hover:bg-blue-100 group-hover:text-blue-700",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        {/* Header */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Let’s connect</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
              If you’re hiring for Graduate / Early Career roles, I’d love to
              chat. Choose the channel that’s easiest for you.
            </p>
          </div>

          <div className="flex gap-2">
            <a href="/" className="btn-secondary">
              Home
            </a>
            <a href="/projects" className="btn-primary">
              Projects
            </a>
          </div>
        </header>

        {/* Badge */}
        <section className="mt-8">
          <div className="card inline-flex items-center gap-3 px-4 py-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-white shadow-sm">
              <span className="text-sm font-semibold">O</span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900">Orcas</p>
              <p className="text-xs text-zinc-500">London, UK</p>
            </div>
            <span className="ml-2 pill">Open to roles</span>
          </div>
        </section>

        {/* Contact cards */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              className={[
                "group card card-hover p-6",
                "focus:outline-none focus:ring-2 focus:ring-zinc-300",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={[
                      "grid h-11 w-11 place-items-center rounded-2xl bg-zinc-50 ring-1 ring-zinc-200",
                      "transition-colors",
                      it.accent,
                    ].join(" ")}
                    aria-hidden
                  >
                    <span className="text-xl">{it.icon}</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {it.title}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{it.desc}</p>
                  </div>
                </div>

                <span className="pill transition group-hover:border-zinc-300">
                  Open
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-zinc-900 transition group-hover:text-zinc-950">
                  {it.value}
                </p>
                <p className="mt-2 text-sm text-zinc-600">
                  <span className="underline decoration-zinc-300 transition group-hover:decoration-zinc-500">
                    Click to open
                  </span>{" "}
                  →
                </p>
              </div>
            </a>
          ))}
        </section>

        {/* Extra CTA */}
        <section className="card mt-10 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-zinc-900">Quick note</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                For applications, email is usually fastest. For networking and
                referrals, LinkedIn works best.
              </p>
            </div>

            <a
              href="/Hongli_Ji_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
