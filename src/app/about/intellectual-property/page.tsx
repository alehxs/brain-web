// src/app/intellectual-property/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Intellectual Property",
  description:
    "Overview of the intellectual property and invention disclosure process for BRAIN Center investigators and member companies.",
  alternates: { canonical: "/about/intellectual-property" },
};

/* ─── Data ─────────────────────────────────────────────────── */

const steps = [
  {
    index: "01",
    title: "Submit an invention disclosure form",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    content: (
      <>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Complete and submit an invention disclosure form, making sure to
          reference the BRAIN Center in the funding section of the form.
        </p>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">For ASU inventors:</p>
            <a
              href="https://www.skysonginnovations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--deep-teal)] hover:underline"
            >
              skysonginnovations.com →
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">For UH inventors:</p>
            <a
              href="https://uh.edu/uh-energy-innovation/uh-innovation/technology-transfer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--deep-teal)] hover:underline"
            >
              uh.edu / technology-transfer →
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    index: "02",
    title: "Notify the BRAIN Center",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    content: (
      <ul className="mt-1 space-y-3 text-sm sm:text-base leading-relaxed text-slate-600">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
          <span>
            For <span className="font-semibold text-slate-900">ASU</span>, email{" "}
            <a href="mailto:Marco.Santello@asu.edu" className="font-medium text-[var(--deep-teal)] hover:underline">
              Marco.Santello@asu.edu
            </a>{" "}
            and cc{" "}
            <a href="mailto:IP@skysonginnovations.com" className="font-medium text-[var(--deep-teal)] hover:underline">
              IP@skysonginnovations.com
            </a>{" "}
            stating that you are submitting an invention as part of the BRAIN Center.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
          <span>
            For <span className="font-semibold text-slate-900">UH</span>, email{" "}
            <a href="mailto:jlcontr2@Central.UH.EDU" className="font-medium text-[var(--deep-teal)] hover:underline">
              jlcontr2@Central.UH.EDU
            </a>{" "}
            stating that you are submitting an invention as part of the BRAIN Center.
          </span>
        </li>
      </ul>
    ),
  },
  {
    index: "03",
    title: "Technology transfer office and IAB notification",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 22V11M21 22V11M12 22V11" />
        <path d="M2 11h20M12 2 2 7h20L12 2z" />
      </svg>
    ),
    content: (
      <ul className="mt-1 space-y-3 text-sm sm:text-base leading-relaxed text-slate-600">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
          <span>
            The Office of Technology Transfer and Innovation will notify Craig Mermel
            and cc IAB co-chair Krishna Ika. Craig will email notification to the IAB
            members (copying{" "}
            <a href="mailto:oipm@central.uh.edu" className="font-medium text-[var(--deep-teal)] hover:underline">
              oipm@central.uh.edu
            </a>
            ) about the new disclosure to ask if they are interested in a license to the IP.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
          <span>
            IAB member companies have sixty (60) days to express their interest to
            Skysong Innovations or the University of Houston Office of Technology
            Transfer and Innovation.
          </span>
        </li>
      </ul>
    ),
  },
  {
    index: "04",
    title: "Licensing options for BRAIN Center member companies",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="8" cy="15" r="4" />
        <line x1="10.85" y1="12.15" x2="19" y2="4" />
        <line x1="18" y1="5" x2="20" y2="7" />
        <line x1="15" y1="8" x2="17" y2="10" />
      </svg>
    ),
    content: (
      <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">BRAIN Center company members</span>{" "}
          have the ability to receive a nonexclusive royalty-free license. If only one
          member seeks a license, that member may negotiate a royalty-bearing exclusive
          license.
        </p>
        <p>
          Negotiations take place directly between Skysong Innovations or the University
          of Houston Office of Technology Transfer and Innovation and BRAIN Center
          Industry member companies.
        </p>
      </div>
    ),
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function IntellectualPropertyPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="About"
        title="Intellectual Property"
        description="An overview of the invention disclosure and licensing process for BRAIN Center investigators and Industry Advisory Board member companies."
      />
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {steps.map((step, i) => (
            <div
              key={step.index}
              className={`relative flex gap-6 sm:gap-8 ${i < steps.length - 1 ? "pb-10 mb-10" : ""}`}
            >
              {/* Spine: index + vertical connector */}
              <div className="flex flex-col items-center shrink-0 w-10 sm:w-12">
                <span
                  aria-hidden="true"
                  className="text-2xl sm:text-3xl font-extrabold leading-none select-none bg-gradient-to-b from-[#00A79D]/40 to-[#5EEAD4]/60 bg-clip-text text-transparent"
                >
                  {step.index}
                </span>
                {i < steps.length - 1 && (
                  <div aria-hidden="true" className="mt-3 flex-1 w-px bg-slate-200" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--light-slate)] text-[var(--deep-teal)]">
                    {step.icon}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--midnight-blue)] leading-tight">
                    {step.title}
                  </h2>
                </div>
                <div aria-hidden="true" className="h-0.5 w-12 rounded-full mb-5 bg-[var(--deep-teal)]" />
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
