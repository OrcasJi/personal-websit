export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-4 text-zinc-600">
          Best way to reach me:
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <p>
            Email:{" "}
            <a className="underline decoration-zinc-300" href="mailto:your@email.com">
              your@email.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a className="underline decoration-zinc-300" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              linkedin.com/in/...
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a className="underline decoration-zinc-300" href="https://github.com/" target="_blank" rel="noreferrer">
              github.com/...
            </a>
          </p>
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
