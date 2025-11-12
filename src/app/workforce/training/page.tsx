// src/app/workforce/training/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Training | BRAIN Center Workforce Development",
  description:
    "Medical Device Law, Regulation, and Ethics (IUCRC BRAIN Center Know-How Resource) — clear objectives, who it’s for, and expected outcomes.",
};

export default function TrainingPage() {
  return (
    <main className="bg-white">
      {/* Hero (solid, readable) */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            Training
          </h1>
          <p className="mt-3 text-base font-semibold text-[var(--midnight-blue,#0A192F)]">
            Medical Device Law, Regulation, and Ethics
            <span className="font-normal"> (IUCRC BRAIN Center Know-How Resource)</span>
          </p>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-900">
            A concise, practical series designed to help researchers and partners navigate regulatory
            pathways, manage risk, and understand policy trends shaping neurotechnology.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">

          {/* Objectives */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--midnight-blue,#0A192F)]">Objectives</h2>
            <ul className="mt-5 space-y-3 list-disc list-inside marker:text-[var(--deep-teal,#00A79D)]">
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Make informed, strategic choices that position your work under favorable regulatory
                pathways (e.g., FDA PMA / 510(k), De Novo; HIPAA; Common Rule; FDA/IDE).
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Navigate regulatory frameworks affecting innovative biotechnologies:
                FDA drug &amp; biologic regulations plus relevant EPA, USDA, and consumer protections.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Understand and manage liability risks.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Track and influence policy in two key areas:
                <ul className="mt-2 ml-6 list-disc space-y-2 marker:text-[var(--deep-teal,#00A79D)]">
                  <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                    Regulation of neurotech software as a medical device after the 21<sup>st</sup> Century
                    Cures Act of 2016.
                  </li>
                  <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                    Privacy and access to biospecimens and neurotech data, including research data commons.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Two-up: Who it's for / Outcomes */}
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)]">Who It’s For</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside marker:text-[var(--deep-teal,#00A79D)] text-sm sm:text-base text-gray-900">
                <li>Faculty, postdocs, and students advancing neurotechnology.</li>
                <li>Industry partners and startups preparing for translation.</li>
                <li>Project leads who interface with compliance, IRB, or legal teams.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)]">Expected Outcomes</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside marker:text-[var(--deep-teal,#00A79D)] text-sm sm:text-base text-gray-900">
                <li>Clear action paths for regulatory next steps and documentation.</li>
                <li>Improved collaboration with IRB/compliance and legal counsel.</li>
                <li>Better risk awareness and integration of policy constraints in planning.</li>
              </ul>
            </div>
          </section>

          {/* Contact / Materials */}
          <section className="rounded-xl border border-gray-200 bg-[var(--light-slate,#F8FAFC)] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-900">
                Interested in workshop dates or materials?
              </p>
              <div className="flex gap-3">
                <Link
                  href="/join"
                  className="inline-flex items-center rounded-md border border-[var(--deep-teal,#00A79D)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:bg-[var(--deep-teal,#00A79D)] hover:text-white transition-colors"
                >
                  Contact the Center
                </Link>
                {/* If you have a PDF outline later, uncomment and point to it:
                <Link
                  href="/docs/training-outline.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View Outline (PDF)
                </Link> */}
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}