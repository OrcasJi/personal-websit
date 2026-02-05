export default function About() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">About</h1>

        <p className="mt-4 text-zinc-600 leading-relaxed">
          I’m a Computer Science graduate in the UK with a strong foundation in software engineering
          and a focus on building real, user-facing systems. I enjoy shipping projects end-to-end:
          from data and models to APIs and UI.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="font-semibold">Education</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>Queen Mary University of London — MSc Computer Science</li>
              <li>University of Birmingham — BSc Computer Science (2:1)</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="font-semibold">Skills</h2>
            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
              Python, JavaScript/TypeScript, SQL, REST APIs, Git, Docker basics, ML (Transformers),
              data processing and experimentation.
            </p>
          </section>
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
