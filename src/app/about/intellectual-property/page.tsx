// src/app/intellectual-property/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property | The BRAIN Center",
  description:
    "Overview of the intellectual property and invention disclosure process for BRAIN Center investigators and member companies.",
};

type StepCardProps = {
  stepLabel: string;
  title: string;
  children: React.ReactNode;
};

function StepCard({ stepLabel, title, children }: StepCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
        {stepLabel}
      </p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function IntellectualPropertyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Policies &amp; Processes
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Intellectual Property
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            This page summarizes the invention disclosure and licensing process
            for BRAIN Center investigators and Industry Advisory Board (IAB)
            member companies.
          </p>
        </header>

        <div className="space-y-8">
          {/* Step 1 */}
          <StepCard
            stepLabel="Step 1"
            title="Submit an invention disclosure form"
          >
            <p>
              Complete and submit an invention disclosure form, making sure to
              reference the BRAIN Center in the funding section of the form.
            </p>

            <div className="mt-3 space-y-2">
              <div>
                <p className="font-semibold text-slate-900">
                  For ASU inventors:
                </p>
                <a
                  href="https://www.skysonginnovations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-700 underline underline-offset-2"
                >
                  https://www.skysonginnovations.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  For UH inventors:
                </p>
                <a
                  href="https://uh.edu/uh-energy-innovation/uh-innovation/technology-transfer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-700 underline underline-offset-2"
                >
                  https://uh.edu/uh-energy-innovation/uh-innovation/
                  technology-transfer/
                </a>
              </div>
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard stepLabel="Step 2" title="Notify the BRAIN Center">
            <p className="font-semibold text-slate-900">Notify:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                For ASU, email{" "}
                <a
                  href="mailto:Marco.Santello@asu.edu"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  Marco.Santello@asu.edu
                </a>{" "}
                and cc{" "}
                <a
                  href="mailto:IP@skysonginnovations.com"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  IP@skysonginnovations.com
                </a>{" "}
                stating that you are submitting an invention as part of the
                BRAIN Center.
              </li>
              <li>
                For UH, email{" "}
                <a
                  href="mailto:jlcontr2@Central.UH.EDU"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  jlcontr2@Central.UH.EDU
                </a>{" "}
                stating that you are submitting an invention as part of the
                BRAIN Center.
              </li>
            </ul>
          </StepCard>

          {/* Step 3 */}
          <StepCard
            stepLabel="Step 3"
            title="Technology transfer office and IAB notification"
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The Office of Technology Transfer and Innovation will notify
                Craig Mermel and cc IAB co-chair Krishna Ika. Craig will email
                notification to the IAB members (copying{" "}
                <a
                  href="mailto:oipm@central.uh.edu"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  oipm@central.uh.edu
                </a>
                ) about the new disclosure to ask if they are interested in a
                license to the IP.
              </li>
              <li>
                IAB member companies have sixty (60) days to express their
                interest to Skysong Innovations or the University of Houston
                Office of Technology Transfer and Innovation.
              </li>
            </ul>
          </StepCard>

          {/* Step 4 */}
          <StepCard
            stepLabel="Step 4"
            title="Licensing options for BRAIN Center member companies"
          >
            <p>
              <span className="font-semibold text-slate-900">
                BRAIN Center company members
              </span>{" "}
              have the ability to receive a nonexclusive royalty-free license.
              If only one member seeks a license, that member may negotiate a
              royalty-bearing exclusive license.
            </p>
            <p>
              Negotiations take place directly between Skysong Innovations or
              the University of Houston Office of Technology Transfer and
              Innovation and BRAIN Center Industry member companies.
            </p>
            <p className="mt-2">
              Learn more about IP rights in this{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                PPT
              </a>
              .
            </p>
          </StepCard>
        </div>
      </div>
    </main>
  );
}