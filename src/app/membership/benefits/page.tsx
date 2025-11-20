import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership Benefits | NSF BRAIN",
  description:
    "What members gain through the BRAIN Center's NSF IUCRC model: collaboration, influence, access, and workforce pipelines.",
};

const benefitGroups = [
  {
    title: "Collaboration & Governance",
    items: [
      "Pool funds to conduct pre-competitive research relevant to industry partners",
      "Network and collaborate with other IAB members across sectors",
      "Meet twice per year to review results and vote on projects to fund",
    ],
  },
  {
    title: "Access & Resources",
    items: [
      "Access the Center's technology roadmaps and research portfolio",
      "Engage expert faculty, highly skilled students, and center resources across all sites",
    ],
  },
  {
    title: "Funding & Acceleration",
    items: [
      "Partner with BRAIN sites to apply for federal grants (e.g., SBIR, STTR)",
      "Rapid teaming and response for large federal grant opportunities",
    ],
  },
  {
    title: "IP & Policy",
    items: [
      "Receive rights to a royalty-free, non-exclusive license to generated intellectual property (per IUCRC IP policy)",
    ],
  },
  {
    title: "Workforce & Talent",
    items: [
      "Priority access for recruiting industry-ready graduates from Center programs",
      "Enable short and long sabbaticals between industry and Center labs",
      "Opportunities for degree-granting programs and industry mentorship with Center faculty",
    ],
  },
];

export default function BenefitsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[var(--light-slate)] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
            Membership Benefits
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800">
            As a member of the BRAIN Center, you gain collaborative influence over a shared research
            portfolio, access to multi-institution resources and talent, and clear pathways to translate
            ideas toward practice through the NSF IUCRC model.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {benefitGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold text-slate-900">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--deep-teal)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="sticky top-6 space-y-6">
                <Link
                  href="/docs/brain-benefits-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  aria-label="Download BRAIN Center Membership Benefits Brochure"
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                      <Image
                        src="/images/brochure-cover.png"
                        alt="BRAIN Center Membership Benefits Brochure"
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Membership Benefits Brochure
                      </p>
                      <p className="mt-1 text-xs text-slate-600">Download PDF</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--deep-teal)] group-hover:text-[var(--luminous-mint)]">
                        View brochure
                        <span className="transition group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Ready to Join?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Learn how your organization can become a catalyst for innovation in neurotechnology research.
                  </p>
                  <Link
                    href="/join"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[var(--deep-teal)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--cta-hover)]"
                  >
                    Join the Center
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}