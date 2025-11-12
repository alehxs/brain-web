// src/app/membership/catalysts/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Catalysts of Technological Development & Innovation | BRAIN Center",
  description:
    "How BRAIN Center members act as catalysts—guiding, funding, and accelerating industry‑relevant research through the NSF IUCRC model.",
};

export default function CatalystsPage() {
  return (
    <main className="bg-white">
      {/* Hero - solid background (no transparency), dark readable text */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            Catalysts of Technological Development &amp; Innovation
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-800">
            In the NSF IUCRC model, member organizations are more than sponsors—they’re
            <span className="font-semibold"> catalysts</span>. By partnering with our academic sites,
            members help shape research roadmaps, accelerate translation of ideas, and develop a skilled
            workforce aligned with industry needs.
          </p>
        </div>
      </section>

      {/* Page body */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 space-y-12">

          {/* What is a Catalyst */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--midnight-blue,#0A192F)]">
              What Does “Catalyst” Mean at BRAIN?
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-900">
              Catalysts are industry and agency members who collaborate with faculty to co‑define research priorities,
              pool resources, and guide a balanced portfolio of projects. This pre‑competitive environment de‑risks early
              R&amp;D and moves promising ideas toward practical use—faster and more efficiently than any single organization
              could do alone.
            </p>
          </section>

          {/* Three equal-height cards */}
          <section aria-label="How Catalysts Engage">
            <h3 className="text-xl font-semibold text-[var(--midnight-blue,#0A192F)]">
              How Catalysts Engage
            </h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="text-base font-semibold text-[var(--midnight-blue,#0A192F)]">
                  Set Priorities
                </h4>
                <p className="mt-2 text-sm text-gray-900">
                  Participate in meetings and workshops to define needs, refine thrusts, and identify
                  high‑impact problem statements.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/research/thrusts" className="text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:underline">
                    Explore research thrusts →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="text-base font-semibold text-[var(--midnight-blue,#0A192F)]">
                  Guide Projects
                </h4>
                <p className="mt-2 text-sm text-gray-900">
                  Review proposals, vote on project selection, and provide technical feedback at go/no‑go checkpoints.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/research/current-projects" className="text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:underline">
                    See current projects →
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="text-base font-semibold text-[var(--midnight-blue,#0A192F)]">
                  Accelerate Impact
                </h4>
                <p className="mt-2 text-sm text-gray-900">
                  Support translational milestones, internships, and hiring to bring research closer to real‑world adoption.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/impacts/making-an-impact" className="text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:underline">
                    View center impacts →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Roles — simple three-column text, readable black text */}
          <section aria-label="Roles in the IUCRC model" className="grid gap-8 lg:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal,#00A79D)]">
                Industry
              </h4>
              <p className="mt-2 text-sm text-gray-900">
                Articulates market needs, contributes membership funding, mentors students, and evaluates technical
                progress for relevance and readiness.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal,#00A79D)]">
                Universities
              </h4>
              <p className="mt-2 text-sm text-gray-900">
                Lead research, train students, coordinate multi‑site collaboration, and report results at regular review meetings.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal,#00A79D)]">
                Government &amp; Agencies
              </h4>
              <p className="mt-2 text-sm text-gray-900">
                Provide program guidance and help align center activities with national priorities and standards.
              </p>
            </div>
          </section>

          {/* Helpful links (no “Join” CTA per your request) */}
          <section className="rounded-lg border border-gray-200 bg-[var(--light-slate,#F8FAFC)] p-5">
            <h3 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)]">
              Learn More
            </h3>
            <p className="mt-2 text-sm text-gray-900">
              Explore how Catalysts fit within the NSF IUCRC framework and how the BRAIN Center operates.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/about/iucrc"
                className="inline-flex items-center rounded-md border border-[var(--deep-teal,#00A79D)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:bg-[var(--deep-teal,#00A79D)] hover:text-white transition-colors"
              >
                NSF IUCRC Program
              </Link>
              <Link
                href="/benefits"
                className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Membership Benefits
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
