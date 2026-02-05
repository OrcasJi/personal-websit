export default function About() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">London, UK</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              About
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
              I’m <span className="font-medium text-zinc-800">Orcas</span>, a
              Computer Science graduate in the UK. I build{" "}
              <span className="font-medium text-zinc-800">
                user-focused software
              </span>{" "}
              and <span className="font-medium text-zinc-800">applied AI</span>{" "}
              projects — especially systems that connect NLP to real product
              experiences (search, ranking, and recommendations).
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
              View Projects
            </a>
          </div>
        </header>

        {/* What I'm looking for */}
        <section className="mt-10 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">What I’m looking for</h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Graduate / Early Career roles in{" "}
            <span className="font-medium text-zinc-800">
              Software Engineering, Applied ML, or Data-driven Product
            </span>{" "}
            — where I can ship production-quality features, work with real data,
            and keep building end-to-end systems.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
              <p className="text-sm text-zinc-500">Strength</p>
              <p className="mt-1 font-medium">End-to-end ownership</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
              <p className="text-sm text-zinc-500">Interest</p>
              <p className="mt-1 font-medium">NLP + Search/Ranking</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
              <p className="text-sm text-zinc-500">Location</p>
              <p className="mt-1 font-medium">UK (open to London)</p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Built an <span className="font-medium">AI Shopping Assistant</span>{" "}
                  with intent classification, attribute extraction, fuzzy search,
                  and ranked recommendations.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Comfortable working across{" "}
                  <span className="font-medium">backend logic, data pipelines</span>{" "}
                  and lightweight UIs to deliver usable products.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>
                  Strong foundation in{" "}
                  <span className="font-medium">
                    Python, JavaScript/TypeScript, SQL
                  </span>{" "}
                  and practical experimentation.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold">Core skills</h2>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-medium text-zinc-900">Languages</p>
                <p className="mt-1 text-zinc-700">
                  Python, JavaScript/TypeScript, SQL (plus Java fundamentals)
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-900">AI / Data</p>
                <p className="mt-1 text-zinc-700">
                  Transformers/NLP, classification, data cleaning, evaluation,
                  experiment tracking mindset
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-900">Engineering</p>
                <p className="mt-1 text-zinc-700">
                  APIs, modular architecture, Git, deployable web apps (Next.js),
                  cloud basics (Workers/Vercel)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">Experience</h2>

          <div className="mt-5 space-y-6">
            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">Bank of China (UK) — Technology Intern</p>
                <p className="text-sm text-zinc-500">Internship</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span>
                    Supported reporting and operational workflows using structured
                    data and automation-focused thinking.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span>
                    Strengthened attention to detail, communication, and working
                    with stakeholders under deadlines.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">Independent Projects</p>
                <p className="text-sm text-zinc-500">Portfolio</p>
              </div>
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                I actively build and iterate on practical projects that combine
                AI + software engineering — with clean READMEs, reproducible
                setup, and deployable demos where possible.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold">Education</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>
                <span className="font-medium">MSc Computer Science (2:1)</span> — Queen
                Mary University of London
              </li>
              <li>
                <span className="font-medium">BSc Computer Science (2:1)</span>{" "}
                — University of Birmingham
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold">How I work</h2>
            <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
              I like building things that are easy to run, easy to review, and
              easy to extend. I prioritise clarity: clean architecture, readable
              documentation, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-2xl border border-zinc-200 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Let’s connect</p>
              <p className="mt-1 text-sm text-zinc-600">
                If you’re hiring for Graduate / Early Career roles, I’d love to
                share more about my projects and experience.
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
                href="/projects"
                className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
              >
                Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
