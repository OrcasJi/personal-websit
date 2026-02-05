export default function Contact() {
  const items = [
    {
      title: "Email",
      desc: "Best for quick reach-outs and applications.",
      value: "orcasjiovo@gmail.com",
      href: "mailto:orcasjiovo@gmail.com",
      icon: "✉️",
    },
    {
      title: "LinkedIn",
      desc: "Connect with me for roles, referrals, and updates.",
      value: "linkedin.com/in/orcas-ji-about-me",
      href: "https://www.linkedin.com/in/orcas-ji-about-me",
      icon: "💼",
    },
    {
      title: "GitHub",
      desc: "Browse my projects, code, and documentation.",
      value: "github.com/OrcasJi",
      href: "https://github.com/OrcasJi",
      icon: "💻",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Let’s connect</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
              If you’re hiring for Graduate / Early Career roles, I’d love to
              chat. Choose the channel that’s easiest for you.
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
              href="/projects"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              Projects
            </a>
          </div>
        </header>

        {/* Logo / badge */}
        <section className="mt-8">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-white">
              <span className="text-sm font-semibold">O</span>
            </div>
            <div>
              <p className="text-sm font-medium">Orcas</p>
              <p className="text-xs text-zinc-500">London, UK</p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              className={[
                "group rounded-3xl border border-zinc-200 bg-white/85 p-6 shadow-sm backdrop-blur",
                "transition-all duration-200",
                "hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md",
                "hover:bg-zinc-50/80",
                "focus:outline-none focus:ring-2 focus:ring-zinc-300",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-50 ring-1 ring-zinc-200 transition group-hover:bg-white">
                    <span className="text-xl">{it.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {it.title}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{it.desc}</p>
                  </div>
                </div>

                <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700 transition group-hover:border-zinc-300">
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
        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white/85 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Quick note</p>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                For applications, email is usually fastest. For networking and
                referrals, LinkedIn works best.
              </p>
            </div>
            <a
              href="/Hongli_Ji_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>

        {/* Back */}
        <div className="mt-10">
          <a
            className="text-sm underline decoration-zinc-300 hover:decoration-zinc-500"
            href="/"
          >
            ← Back
          </a>
        </div>
      </div>
    </main>
  );
}
