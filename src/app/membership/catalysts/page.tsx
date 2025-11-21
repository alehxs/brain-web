import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovation Catalysts | NSF BRAIN",
  description:
    "How BRAIN Center members act as catalysts—guiding, funding, and accelerating industry-relevant research through the NSF IUCRC model.",
};

export default function CatalystsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[var(--light-slate)] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
            Catalysts of Technological Development & Innovation
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800">
            In the NSF IUCRC model, member organizations are more than sponsors—they&apos;re{" "}
            <span className="font-semibold">catalysts</span>. By partnering with our academic sites,
            members help shape research roadmaps, accelerate translation of ideas, and develop a
            skilled workforce aligned with industry needs.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What Does &quot;Catalyst&quot; Mean at BRAIN?
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
              Catalysts are industry and agency members who collaborate with faculty to co-define
              research priorities, pool resources, and guide a balanced portfolio of projects. This
              pre-competitive environment de-risks early R&D and moves promising ideas toward
              practical use—faster and more efficiently than any single organization could do alone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-5">
              How Catalysts Engage
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Set Priorities
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  Participate in meetings and workshops to define needs, refine thrusts, and
                  identify high-impact problem statements.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/thrusts"
                    className="text-sm font-semibold text-[var(--deep-teal)] hover:underline"
                  >
                    Explore research thrusts →
                  </Link>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Guide Projects
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  Review proposals, vote on project selection, and provide technical feedback at
                  go/no-go checkpoints.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/current-projects"
                    className="text-sm font-semibold text-[var(--deep-teal)] hover:underline"
                  >
                    See current projects →
                  </Link>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Accelerate Impact
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  Support translational milestones, internships, and hiring to bring research
                  closer to real-world adoption.
                </p>
                <div className="mt-4">
                  <Link
                    href="/impacts/making-an-impact"
                    className="text-sm font-semibold text-[var(--deep-teal)] hover:underline"
                  >
                    View center impacts →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-5">
              Roles in the IUCRC Model
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal)]">
                  Industry
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Articulates market needs, contributes membership funding, mentors students, and
                  evaluates technical progress for relevance and readiness.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal)]">
                  Universities
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Lead research, train students, coordinate multi-site collaboration, and report
                  results at regular review meetings.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal)]">
                  Government & Agencies
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Provide program guidance and help align center activities with national priorities
                  and standards.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Learn More
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore how Catalysts fit within the NSF IUCRC framework and how the BRAIN Center
              operates.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/about/iucrc"
                className="inline-flex items-center rounded-md border border-[var(--deep-teal)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal)] hover:bg-[var(--deep-teal)] hover:text-white transition-colors"
              >
                NSF IUCRC Program
              </Link>
              <Link
                href="/membership/benefits"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
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