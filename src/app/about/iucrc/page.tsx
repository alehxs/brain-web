// src/app/about/iucrc/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "NSF IUCRC Program | BRAIN Center",
  description:
    "Learn about the National Science Foundation Industry–University Cooperative Research Centers (IUCRC) Program and how it supports the BRAIN Center.",
};

export default function IucrcPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--deep-teal,#00A79D)]">
                National Science Foundation
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--midnight-blue,#0A192F)]">
                Industry–University Cooperative Research Centers (IUCRC) Program
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-700">
                The BRAIN Center is supported by the NSF IUCRC Program, which
                accelerates the impact of fundamental research through
                long-term collaboration between industry, universities, and
                government agencies.
              </p>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                <Image
                  src="/nsf-logo.png"
                  alt="National Science Foundation"
                  fill
                  sizes="112px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 space-y-10">
          {/* Mission & History */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--midnight-blue,#0A192F)]">
              Mission and History
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
              The IUCRC program catalyzes high-impact, pre-competitive research
              by forming sustained partnerships among industry innovators,
              academic investigators, and government stakeholders. Centers are
              designed to address industry-relevant problems, share risk and
              cost, and train the next generation of a highly skilled workforce.
            </p>
          </section>

          {/* IUCRC Focus / Objectives */}
          <section className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            <div>
              <h3 className="text-xl font-semibold text-[var(--midnight-blue,#0A192F)]">
                Program Objectives
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-800">
                Through coordinated university–industry partnerships, IUCRCs:
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-800 list-disc list-inside">
                <li>Support use-inspired research aligned with industry needs.</li>
                <li>
                  Enable shared investment in fundamental science that is
                  difficult for a single organization to support alone.
                </li>
                <li>
                  Foster technology transfer and accelerate commercialization of
                  new ideas.
                </li>
                <li>
                  Develop a diverse, highly trained workforce with experience in
                  industry-relevant research.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-[var(--light-slate,#F8FAFC)] p-4 sm:p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal,#00A79D)]">
                BRAIN Center as an IUCRC
              </h4>
              <p className="mt-3 text-sm text-gray-800">
                As an NSF IUCRC, the BRAIN Center brings together universities,
                companies, and agencies to co-define research roadmaps in
                neurotechnology and to invest collaboratively in multi-institution
                projects that advance reliable brain-related innovations.
              </p>
            </div>
          </section>

          {/* Program Structure */}
          <section>
            <h3 className="text-xl font-semibold text-[var(--midnight-blue,#0A192F)]">
              Program Structure
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-800">
              Each IUCRC operates as a consortium of academic sites and member
              organizations that collectively fund and guide a portfolio of
              research projects. Industry and government members provide input
              on research priorities and evaluate proposed projects, while the
              academic sites lead the scientific work and training activities.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-800">
              A majority of membership funds are directed to shared research
              projects, ensuring that investments benefit the full consortium
              and address needs across sectors.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[var(--deep-teal,#00A79D)] font-semibold">
              Government • University • Industry — working together to bridge
              the gap between early-stage research and commercial deployment.
            </p>

            <div className="mt-5">
              <Link
                href="https://iucrc.nsf.gov/"
                className="inline-flex items-center rounded-md border border-[var(--deep-teal,#00A79D)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:bg-[var(--deep-teal,#00A79D)] hover:text-white transition-colors"
              >
                Learn more about the IUCRC Program on NSF.gov
              </Link>
            </div>
          </section>

          {/* Partnership Diagram */}
          <section className="pt-4 border-t border-gray-200">
            {/* <h3 className="text-xl font-semibold text-[var(--midnight-blue,#0A192F)] mb-4">
              The Partnership
            </h3> */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="w-full max-w-3xl mx-auto">
                <Image
                  src="/images/iucrc-partnership.png"
                  alt="Diagram of the IUCRC partnership among government, university, and industry"
                  width={966}
                  height={773}
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}