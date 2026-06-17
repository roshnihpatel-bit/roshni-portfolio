

const highlights = [
  {
    title: "Product Design",
    description: "Clean, intentional interfaces with strong hierarchy and motion.",
  },
  {
    title: "Frontend Build",
    description: "Responsive Next.js experiences built for performance and clarity.",
  },
  {
    title: "Portfolio Projects",
    description: "Curated case studies that show the work, the process, and the outcome.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f9f5ff_0%,#f4efe8_38%,#f7f4ef_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-sm font-medium tracking-wide text-slate-700 shadow-sm backdrop-blur">
            Roshni Portfolio
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Designing calm, modern web experiences.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            A focused portfolio homepage for showing product thinking, frontend craftsmanship, and polished case studies.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
            >
              About me
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            id="projects"
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Featured focus
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside
            id="about"
            className="rounded-3xl bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              About
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Use this space for a short intro, a mission statement, or a contact call to action. The content can be swapped without changing the layout.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
