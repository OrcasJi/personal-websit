export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm text-zinc-500">London, UK</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I’m <span className="underline decoration-zinc-300">Orcas</span>.
        </h1>

        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          I build practical software and AI-powered products — recently focusing on an{" "}
          <span className="font-medium text-zinc-800">AI Shopping Assistant</span> (NLP, ranking, search)
          and scalable web backends.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-zinc-900 px-4 py-2 text-white text-sm hover:bg-zinc-800"
            href="/projects"
          >
            View Projects
          </a>
          <a
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            href="/about"
          >
            About / CV
          </a>
          <a
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            href="/contact"
          >
            Contact
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-2 font-medium">Full-stack + Applied AI</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="text-sm text-zinc-500">Strengths</p>
            <p className="mt-2 font-medium">Python / JS / Data</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="text-sm text-zinc-500">Current goal</p>
            <p className="mt-2 font-medium">Graduate / Early Career Roles</p>
          </div>
        </div>
      </div>
    </main>
  );
}
