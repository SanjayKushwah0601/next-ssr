import Link from "next/link";

/** Per-request server rendering (HTML generated on each request). */
export const dynamic = "force-dynamic";

export default async function Home() {
  const renderedAt = new Date();

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(120,119,198,0.25),transparent)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <p className="mb-4 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-400">
          Server-rendered on each request
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
          Welcome — built with Next.js &amp; SSR
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          This page is a React Server Component. HTML is generated on the server,
          so users get fast first paint and SEO-friendly content without waiting
          for client JavaScript to boot.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/8 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              Rendered at (server)
            </dt>
            <dd className="mt-2 font-mono text-sm text-zinc-900 dark:text-zinc-100">
              {renderedAt.toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "medium",
              })}
            </dd>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              Stack
            </dt>
            <dd className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
              Next.js App Router, React Server Components, Tailwind CSS
            </dd>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
            <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              What&apos;s next
            </dt>
            <dd className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
              Add routes under{" "}
              <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">
                src/app
              </code>{" "}
              and ship.
            </dd>
          </div>
        </dl>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server Components docs
          </Link>
          <Link
            href="https://nextjs.org/docs"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-transparent px-6 text-sm font-medium text-zinc-900 transition hover:bg-black/5 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js documentation
          </Link>
        </div>
      </main>

      <footer className="relative z-10 border-t border-black/5 px-6 py-6 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-500">
        Edit{" "}
        <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">
          src/app/page.tsx
        </code>{" "}
        to customize this welcome screen.
      </footer>
    </div>
  );
}
