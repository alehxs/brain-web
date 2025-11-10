import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broader Impacts | The BRAIN Center",
  description:
    "How the BRAIN Center advances education, diversity, innovation, and regulatory science through its broader impacts.",
};

export default function BroaderImpactsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Impacts
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Broader Impacts
          </h1>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            The BRAIN Center will leverage engineering, neuroscience, and
            innovation ecosystems, and will be structured specifically to
            advance training of students and mentoring of postdoctoral and
            graduate fellows.
          </p>

          <p>
            All of our sites are fully committed to diversity in research and
            education and have established programs for promoting institutional
            initiatives in support of these goals. The Center will foster
            relationships with these programs, enhancing access of
            underrepresented students and faculty in our research. The Center
            will enhance institutional infrastructures and improve our
            capabilities for research that will have a substantive impact on
            education, training, technological development, and deployment of
            innovative neurotechnologies.
          </p>

          <p>
            Moreover, the BRAIN Center will contribute to the local, regional,
            and national economies, be an attractor for innovation start-ups,
            and bridge with local and state entrepreneurial and accelerator
            sites. Importantly, the Center will also work closely with
            regulatory agencies to help develop basic regulatory science in
            support of translation of emergent neurotechnologies to end users
            (see letter of interest from the FDA in the Supplementary
            Documents).
          </p>
        </div>
      </section>
    </main>
  );
}