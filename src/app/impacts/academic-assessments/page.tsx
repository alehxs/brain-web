// src/app/workforce/academic-assessments/page.tsx

export const metadata = {
  title: "Academic Assessments | BRAIN Center",
  description:
    "Kirkpatrick-aligned assessment across Center sites: Reaction, Learning, Behavior, and Results, plus the Center’s evaluation process.",
};

export default function AcademicAssessmentsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[var(--light-slate,#F0F2F5)] border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            Academic Assessments
          </h1>
          <p className="mt-4 max-w-4xl text-sm sm:text-base text-gray-900">
            Each Center site collaborates with the Education/Outreach coordinator to evaluate
            education plans and participant impact. Assessment data are gathered semi-annually,
            rolled up annually, and reviewed across all participants. Evaluation follows the{" "}
            <span className="font-semibold">Kirkpatrick Evaluation Model</span> to capture
            outcomes at four levels.
          </p>
        </div>
      </section>

      {/* Four dimensions */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AssessCard
              title="Reaction"
              blurb="What students thought and felt about the training."
            />
            <AssessCard
              title="Learning"
              blurb="The resulting increase in knowledge or capability."
            />
            <AssessCard
              title="Behavior"
              blurb="The extent of behavior and capability improvement."
            />
            <AssessCard
              title="Results"
              blurb="Institutional impact resulting from trainee performance."
            />
          </div>

          {/* Process copy */}
          <div className="mt-10 sm:mt-12 lg:mt-14 max-w-4xl text-sm sm:text-base text-gray-900 space-y-4">
            <p>
              The Education/Outreach coordinator consolidates site data and conducts internal
              reviews semi-annually with input from the Academic Advisory Board (AAB). The AAB
              compiles an annual assessment report and convenes a Center-wide review meeting.
              Longitudinal analyses use annual datasets from each partner university.
            </p>
            <p>
              Center Directors and Evaluator develop shared instruments and common rubrics so that
              surveys, interviews, and course-embedded assessments are comparable across sites. The
              process includes pre/post semester surveys and post-implementation reviews for new
              programs.
            </p>
            <p>
              Graduates engaged in BRAIN activities are invited to report career outcomes and
              reflect on skill development to inform continuous improvement. Students also
              participate in a mandatory course on <span className="font-semibold">Ethics in
              Science and Engineering</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Simple, consistent assessment card with teal-accent icon */
function AssessCard({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
           style={{ backgroundColor: "var(--deep-teal, #00A79D)" }}>
        {/* Check icon (white) */}
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[var(--midnight-blue,#0A192F)]">{title}</h3>
      <p className="mt-2 text-sm text-gray-900">{blurb}</p>
    </div>
  );
}