'use client';
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center bg-white text-[var(--midnight-blue)] px-6 py-24">
      <div className="text-center">
        <p className="text-2xl font-semibold opacity-70">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 opacity-80">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => (typeof window !== "undefined" ? window.history.back() : null)}
            className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-[var(--midnight-blue)] hover:bg-black/5"
          >
            Go back
          </button>

          <Link
            href="/"
            className="rounded-md bg-[var(--luminous-mint)] px-4 py-2 font-semibold text-[var(--midnight-blue)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}