import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Innovation Catalysts",
  description:
    "How BRAIN Center members act as catalysts—guiding, funding, and accelerating industry-relevant research through the NSF IUCRC model.",
  alternates: { canonical: "/membership/catalysts" },
};

/* ─── Data ─────────────────────────────────────────────────── */

const roles = [
  {
    title: "Industry",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    body: "Articulates market needs, contributes membership funding, mentors students, and evaluates technical progress for relevance and readiness.",
  },
  {
    title: "Universities",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    body: "Lead research, train students, coordinate multi-site collaboration, and report results at regular review meetings.",
  },
  {
    title: "Government & Agencies",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 22V11M21 22V11M12 22V11" />
        <path d="M2 11h20M12 2 2 7h20L12 2z" />
      </svg>
    ),
    body: "Provide program guidance and help align center activities with national priorities and standards.",
  },
];

const engagements = [
  {
    index: "01",
    title: "Set Priorities",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    ),
    body: "Participate in meetings and workshops to define needs, refine thrusts, and identify high-impact problem statements.",
    link: { label: "Explore research thrusts", href: "/research/thrusts" },
  },
  {
    index: "02",
    title: "Guide Projects",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    body: "Review proposals, vote on project selection, and provide technical feedback at go/no-go checkpoints.",
    link: { label: "See current projects", href: "/research/current-projects" },
  },
  {
    index: "03",
    title: "Accelerate Impact",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    body: "Support translational milestones, internships, and hiring to bring research closer to real-world adoption.",
    link: { label: "View center impacts", href: "/impacts/making-an-impact" },
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function CatalystsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Membership"
        title="Catalysts of Technological Development & Innovation"
        description={
          <>
            In the NSF IUCRC model, member organizations are more than sponsors—they&apos;re{" "}
            <span className="font-semibold">catalysts</span>. By partnering with our academic sites,
            members help shape research roadmaps, accelerate translation of ideas, and develop a
            skilled workforce aligned with industry needs.
          </>
        }
      />

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

          {/* Roles */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">
              Roles in the IUCRC Model
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {roles.map((role) => (
                <div key={role.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--light-slate)] text-[var(--deep-teal)]">
                      {role.icon}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--midnight-blue)] leading-tight">
                      {role.title}
                    </h3>
                  </div>
                  <div aria-hidden="true" className="h-0.5 w-12 rounded-full mb-4 bg-[var(--deep-teal)]" />
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    {role.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How Catalysts Engage */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">
              How Catalysts Engage
            </h2>
            <div>
              {engagements.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative flex gap-6 sm:gap-8 ${i < engagements.length - 1 ? "pb-10 mb-10" : ""}`}
                >
                  <div className="flex flex-col items-center shrink-0 w-10 sm:w-12">
                    <span aria-hidden="true" className="text-2xl sm:text-3xl font-extrabold leading-none select-none bg-gradient-to-b from-[#00A79D]/40 to-[#5EEAD4]/60 bg-clip-text text-transparent">
                      {item.index}
                    </span>
                    {i < engagements.length - 1 && (
                      <div aria-hidden="true" className="mt-3 flex-1 w-px bg-slate-200" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--light-slate)] text-[var(--deep-teal)]">
                        {item.icon}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--midnight-blue)] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div aria-hidden="true" className="h-0.5 w-12 rounded-full mb-5 bg-[var(--deep-teal)]" />
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-3">
                      {item.body}
                    </p>
                    <Link
                      href={item.link.href}
                      className="text-sm font-semibold text-[var(--deep-teal)] hover:underline"
                    >
                      {item.link.label} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl bg-[var(--midnight-blue)] px-6 py-10 flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-teal)] mb-3">
              Ready to Join?
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-md">
              Become a Catalyst for the BRAIN Center.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-sm">
              Partner with leading universities and agencies to co-define the science that drives your industry forward.
            </p>
            <Link
              href="/join"
              className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-[var(--deep-teal)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--cta-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--midnight-blue)]"
            >
              Join the Center
            </Link>
            <Link
              href="/membership/benefits"
              className="mt-3 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              View membership benefits →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
