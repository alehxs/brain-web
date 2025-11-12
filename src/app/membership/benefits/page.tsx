import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Membership Benefits | BRAIN Center",
  description:
    "What members gain through the BRAIN Center’s NSF IUCRC model: collaboration, influence, access, and workforce pipelines.",
};

const benefitGroups: { title: string; items: string[] }[] = [
  {
    title: "Collaboration & Governance",
    items: [
      "Pool funds to conduct pre-competitive research relevant to industry partners.",
      "Network and collaborate with other IAB members across sectors.",
      "Meet twice per year to review results and vote on projects to fund.",
    ],
  },
  {
    title: "Access & Resources",
    items: [
      "Access the Center’s technology roadmaps and research portfolio.",
      "Engage expert faculty, highly skilled students, and center resources across all sites.",
    ],
  },
  {
    title: "Funding & Acceleration",
    items: [
      "Partner with BRAIN sites to apply for federal grants (e.g., SBIR, STTR).",
      "Rapid teaming and response for large federal grant opportunities.",
    ],
  },
  {
    title: "IP & Policy",
    items: [
      "Receive rights to a royalty-free, non-exclusive license to generated intellectual property (per IUCRC IP policy).",
    ],
  },
  {
    title: "Workforce & Talent",
    items: [
      "Priority access for recruiting industry-ready graduates from Center programs.",
      "Enable short and long sabbaticals between industry and Center labs.",
      "Opportunities for degree-granting programs and industry mentorship with Center faculty.",
    ],
  },
];

export default function BenefitsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            Benefits
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-900">
            As a member of the BRAIN Center, you gain collaborative influence over a shared research
            portfolio, access to multi-institution resources and talent, and clear pathways to translate
            ideas toward practice through the NSF IUCRC model.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
            {/* Left: list */}
            <div>
              <div className="space-y-8">
                {benefitGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)] mb-3">
                      {group.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 marker:text-[var(--deep-teal,#00A79D)]">
                      {group.items.map((text, i) => (
                        <li key={i} className="text-sm sm:text-base leading-relaxed text-gray-900">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image + brochure link card (equal height via grid, clean, no transparency) */}
            <aside className="space-y-6">
              {/* Brochure link card */}
              <Link
                href="/docs/brain-benefits-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-gray-200 bg-white"
                aria-label="Open the BRAIN Membership Benefits brochure PDF in a new tab"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="relative h-16 w-20 shrink-0 rounded-md border border-gray-200 bg-white">
                    <Image
                      src="/images/brochure-cover.png"
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--midnight-blue,#0A192F)]">
                      View Membership Benefits Brochure (PDF)
                    </p>
                    
                  </div>
                  <span className="ml-auto rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 group-hover:bg-gray-100">
                    Open
                  </span>
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}