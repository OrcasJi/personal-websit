export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Top nav */}
        <header className="flex items-center justify-between">
          <a
            href="/"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100/60"
            aria-label="Home"
          >
            Orcas
          </a>

          <nav className="flex items-center gap-1">
            <a
              href="/projects"
              className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60"
            >
              Projects
            </a>
            <a
              href="/about"
              className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60"
            >
              About
            </a>
            <a
              href="/contact"
              className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Centered content column */}
        <section className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <p className="text-sm text-zinc-500">London, UK</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I’m{" "}
              <span className="underline decoration-zinc-300">Orcas</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600 leading-relaxed">
              I build practical software and AI-powered products — recently
              focusing on an{" "}
              <span className="font-medium text-zinc-800">
                AI Shopping Assistant
              </span>{" "}
              (NLP, ranking, search) and scalable web backends.
            </p>

            {/* Primary actions (single set only) */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
                href="/projects"
              >
                View Projects
              </a>

              <a
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href="/about"
              >
                About / CV
              </a>

              <a
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href="/Hongli_Ji_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            {/* Main card (centered, no squeezing) */}
            <div className="mt-10 text-left">
              <div className="rounded-3xl border border-zinc-200 bg-white/85 p-7 shadow-sm backdrop-blur">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-zinc-500">Currently</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">
                      Open to Graduate / Early Career roles
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      Interested in Software Engineering, Applied ML, and
                      data-driven product experiences — especially where AI
                      meets search, ranking, and real user journeys.
                    </p>
                  </div>

                  {/* Pills: never squeezed */}
                  <div className="flex flex-wrap gap-2">
                    <span className="whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
                      UK-based
                    </span>
                    <span className="whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
                      Available
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">
                      Full-stack + Applied AI
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      End-to-end building: data → logic → UI → deploy.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Strengths
                    </p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">
                      Python · TypeScript · SQL
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      Clean architecture, readable code, measurable outcomes.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Goal
                    </p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">
                      UK roles (London-friendly)
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      Graduate / Early Career — open to hybrid teams.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-center text-sm text-zinc-500">
              <p>Built with Next.js + Tailwind. Deployed online for quick review.</p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
