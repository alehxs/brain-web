import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Broader Impacts | The BRAIN Center",
  description:
    "How the BRAIN Center advances education, innovation, and regulatory science through its broader impacts.",
};

export default function BroaderImpactsPage() {
  return (
    <main className="bg-white">
      <PageHeader eyebrow="Impacts" title="Broader Impacts" />

      <section className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        {/* Opening paragraph */}
        <p className="text-base leading-relaxed text-slate-700">
          The BRAIN Center leverages engineering, neuroscience, and innovation
          ecosystems, and is structured specifically to advance training of
          students and mentoring of postdoctoral and graduate fellows.
        </p>

        {/* Focus areas - 3 compact highlight boxes */}
        <div className="my-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="font-semibold text-[var(--deep-teal)]">Education</p>
            <p className="mt-2 text-sm text-slate-600">
              Training students and mentoring postdoctoral fellows
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="font-semibold text-[var(--deep-teal)]">Opportunity</p>
            <p className="mt-2 text-sm text-slate-600">
              Expanding access for students and faculty nationwide
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="font-semibold text-[var(--deep-teal)]">Innovation</p>
            <p className="mt-2 text-sm text-slate-600">
              Attracting start-ups and bridging with entrepreneurial ecosystems
            </p>
          </div>
        </div>

        {/* Body content */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            All of our sites are committed to excellence in research and
            education. The Center fosters relationships with programs across
            institutions, expanding access and opportunity for students and
            faculty in our research.
          </p>

          <p>
            The Center enhances institutional infrastructures and improves our
            capabilities for research that will have a substantive impact on
            education, training, technological development, and deployment of
            innovative neurotechnologies.
          </p>

          <p>
            Moreover, the BRAIN Center contributes to the local, regional, and
            national economies, serving as an attractor for innovation start-ups
            and bridging with local and state entrepreneurial and accelerator
            sites.
          </p>
        </div>

        {/* Regulatory callout */}
        <div className="mt-10 rounded-lg border-l-4 border-[var(--deep-teal)] bg-[var(--light-slate)] p-6">
          <p className="font-medium text-slate-900">Regulatory Science</p>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            The Center works closely with regulatory agencies, including the
            FDA, to help develop basic regulatory science in support of
            translating emergent neurotechnologies to end users.
          </p>
        </div>
      </section>
    </main>
  );
}
