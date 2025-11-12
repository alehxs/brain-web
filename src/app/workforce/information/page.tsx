// src/app/workforce/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Workforce Development | BRAIN Center",
  description:
    "How the BRAIN Center develops the next-generation neurotechnology workforce across K–12, undergraduate, graduate, and postdoctoral levels.",
};

export default function WorkforcePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            Workforce Development
          </h1>
          <p className="mt-4 max-w-4xl text-sm sm:text-base text-gray-900">
            In addition to research initiatives, the BRAIN Center invests in workforce development
            through training and education. Our goal is to cultivate: (a) technical and scientific
            visionaries who will lead industry-driven neurotechnology initiatives, (b) R&amp;D
            managers who can execute the technical vision, (c) engineers who analyze, design, and
            maintain neurotechnologies while understanding their broader impacts, and (d) future
            educators in neurotechnology innovation. We also collaborate with our Academic Advisory
            Board (AAB) on entrepreneurship programming from pre-college to postdoctoral levels.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">

          {/* Goals */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--midnight-blue,#0A192F)]">
              Center Academic Goals
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-900">
              Our programs and activities are designed to:
            </p>

            {/* Grouped, readable bullets with teal markers */}
            <ul className="mt-5 space-y-3 list-disc list-inside marker:text-[var(--deep-teal,#00A79D)]">
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Create a continuous pipeline of engineering education from K–12 through postdoctoral studies.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Enhance interactions among faculty, graduate, and undergraduate students.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Provide active supervision and constructive feedback at all levels.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Introduce undergraduate students to research early and often.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Prepare graduate students for careers in academia and industry.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Broaden training at every stage and encourage progression to the next level of an
                engineering career while building international leadership.
              </li>
              <li className="text-sm sm:text-base leading-relaxed text-gray-900">
                Attract high-school students to engineering careers.
              </li>
            </ul>
          </section>

          {/* CTA block */}
          <section className="rounded-xl border border-gray-200 bg-[var(--light-slate,#F8FAFC)] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)]">
                  Get Involved
                </h3>
                <p className="mt-1 text-sm text-gray-900">
                  Interested in partnering with the Center or participating in workforce programs?
                </p>
              </div>
              <div className="mt-2 sm:mt-0">
                <Link
                  href="/join"
                  className="inline-flex items-center rounded-md border border-[var(--deep-teal,#00A79D)] px-4 py-2 text-sm font-semibold text-[var(--deep-teal,#00A79D)] hover:bg-[var(--deep-teal,#00A79D)] hover:text-white transition-colors"
                >
                  CLICK HERE
                </Link>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}