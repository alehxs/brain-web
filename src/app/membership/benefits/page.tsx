import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Membership Benefits",
  description:
    "What members gain through the BRAIN Center's NSF IUCRC model: collaboration, influence, access, and workforce pipelines.",
  alternates: { canonical: "/membership/benefits" },
};

/* ─── Data ─────────────────────────────────────────────────── */

const benefitGroups = [
  {
    index: "01",
    title: "Collaboration & Governance",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M3 20c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" />
        <path d="M9 14h6" strokeDasharray="2 2" />
      </svg>
    ),
    items: [
      "Pool funds to conduct pre-competitive research relevant to industry partners",
      "Network and collaborate with other IAB members across sectors",
      "Meet twice per year to review results and vote on projects to fund",
    ],
  },
  {
    index: "02",
    title: "Access & Resources",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    items: [
      "Access the Center's technology roadmaps and research portfolio",
      "Engage expert faculty, highly skilled students, and center resources across all sites",
    ],
  },
  {
    index: "03",
    title: "Funding & Acceleration",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    items: [
      "Partner with BRAIN sites to apply for federal grants (e.g., SBIR, STTR)",
      "Rapid teaming and response for large federal grant opportunities",
    ],
  },
  {
    index: "04",
    title: "IP & Policy",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    items: [
      "Receive rights to a royalty-free, non-exclusive license to generated intellectual property (per IUCRC IP policy)",
    ],
  },
  {
    index: "05",
    title: "Workforce & Talent",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    items: [
      "Priority access for recruiting industry-ready graduates from Center programs",
      "Enable short and long sabbaticals between industry and Center labs",
      "Opportunities for degree-granting programs and industry mentorship with Center faculty",
    ],
  },
];

const stats = [
  { value: "9", label: "Member Universities" },
  { value: "50+", label: "Expert Faculty" },
  { value: "6×", label: "Leverage on Investment" },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function BenefitsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Membership"
        title="Membership Benefits"
        description="BRAIN Center members shape the research agenda, access multi-institution talent and resources, and gain structured pathways for technology transfer through the NSF IUCRC model."
      />

      {/* Impact strip */}
      <div className="bg-[var(--midnight-blue)] border-b-2 border-[var(--deep-teal)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <dl className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-8 text-center">
                <dt className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--deep-teal)]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">

            {/* Benefit sections */}
            <div>
              {benefitGroups.map((group, i) => (
                <div
                  key={group.title}
                  className={`relative flex gap-6 sm:gap-8 ${i < benefitGroups.length - 1 ? "pb-10 mb-10" : ""}`}
                >
                  {/* Left spine: index + vertical line */}
                  <div className="flex flex-col items-center shrink-0 w-10 sm:w-12">
                    <span aria-hidden="true" className="text-2xl sm:text-3xl font-extrabold leading-none select-none bg-gradient-to-b from-[#00A79D]/40 to-[#5EEAD4]/60 bg-clip-text text-transparent">
                      {group.index}
                    </span>
                    {i < benefitGroups.length - 1 && (
                      <div aria-hidden="true" className="mt-3 flex-1 w-px bg-slate-200" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header row */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--light-slate)] text-[var(--deep-teal)]">
                        {group.icon}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-[var(--midnight-blue)] leading-tight">
                        {group.title}
                      </h2>
                    </div>

                    {/* Accent bar */}
                    <div aria-hidden="true" className="h-0.5 w-12 rounded-full mb-5 bg-[var(--deep-teal)]" />

                    {/* Items */}
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-600">
                          <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:pt-1">

              {/* Brochure card */}
              <a
                href="/docs/brain-benefits-brochure.pdf"
                download="BRAIN-Center-Membership-Benefits-Brochure.pdf"
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                  <Image
                    src="/images/brochure-cover.png"
                    alt="BRAIN Center Membership Benefits Brochure cover"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-slate-900">Membership Benefits Brochure</p>
                  <span className="mt-2 inline-block text-sm font-semibold text-[var(--deep-teal)] group-hover:underline">
                    View brochure →
                  </span>
                </div>
              </a>

              {/* CTA card — dark band pattern */}
              <div className="rounded-2xl bg-[var(--midnight-blue)] px-6 py-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-teal)] mb-3">
                  Become a Member
                </p>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Ready to shape the future of neurotechnology?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Join industry leaders investing in pre-competitive research that accelerates the field and your organization.
                </p>
                <Link
                  href="/join"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--deep-teal)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--cta-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--midnight-blue)]"
                >
                  Join the Center
                </Link>
              </div>

              <p className="text-xs text-center text-slate-400 leading-relaxed px-2">
                NSF IUCRC grants are competitively awarded. Membership dues are pooled and leveraged 6:1 through federal matching.
              </p>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
