// src/app/workforce/training/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Medical Device Law, Regulation, and Ethics (IUCRC BRAIN Center Know-How Resource) — clear objectives, who it’s for, and expected outcomes.",
  alternates: { canonical: "/workforce/training" },
};

export default function TrainingPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Workforce"
        title="Training"
        description={
          <>
            <span className="font-semibold">Medical Device Law, Regulation, and Ethics</span>{" "}
            (IUCRC BRAIN Center Know-How Resource) — A concise, practical series designed to help
            researchers and partners navigate regulatory pathways, manage risk, and understand
            policy trends shaping neurotechnology.
          </>
        }
      />

      {/* Body */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">

          {/* Objectives */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--midnight-blue)]">Objectives</h2>
            <ul className="mt-5 space-y-3 list-disc list-inside marker:text-[var(--deep-teal)]">
              <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                Make informed, strategic choices that position your work under favorable regulatory
                pathways (e.g., FDA PMA / 510(k), De Novo; HIPAA; Common Rule; FDA/IDE).
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                Navigate regulatory frameworks affecting innovative biotechnologies:
                FDA drug &amp; biologic regulations plus relevant EPA, USDA, and consumer protections.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                Understand and manage liability risks.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                Track and influence policy in two key areas:
                <ul className="mt-2 ml-6 list-disc space-y-2 marker:text-[var(--deep-teal)]">
                  <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                    Regulation of neurotech software as a medical device after the 21<sup>st</sup> Century
                    Cures Act of 2016.
                  </li>
                  <li className="text-sm sm:text-base leading-relaxed text-slate-900">
                    Privacy and access to biospecimens and neurotech data, including research data commons.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Two-up: Who it's for / Outcomes */}
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[var(--midnight-blue)]">Who It’s For</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside marker:text-[var(--deep-teal)] text-sm sm:text-base text-slate-900">
                <li>Faculty, postdocs, and students advancing neurotechnology.</li>
                <li>Industry partners and startups preparing for translation.</li>
                <li>Project leads who interface with compliance, IRB, or legal teams.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[var(--midnight-blue)]">Expected Outcomes</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside marker:text-[var(--deep-teal)] text-sm sm:text-base text-slate-900">
                <li>Clear action paths for regulatory next steps and documentation.</li>
                <li>Improved collaboration with IRB/compliance and legal counsel.</li>
                <li>Better risk awareness and integration of policy constraints in planning.</li>
              </ul>
            </div>
          </section>

          {/* Contact / Materials */}
          <section className="rounded-xl border border-slate-200 bg-[var(--light-slate)] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-900">
                Interested in workshop dates or materials?
              </p>
              <div className="flex gap-3">
                <Link
                  href="/join"
                  className="inline-flex items-center rounded-md border border-[var(--deep-teal)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal)] hover:bg-[var(--deep-teal)] hover:text-white transition-colors"
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
    </div>
  );
}