import PageHeader from "@/app/components/PageHeader";

export const metadata = {
  title: "Academic Assessments",
  description:
    "Kirkpatrick-aligned assessment across Center sites: Reaction, Learning, and Outcomes, plus the Center's evaluation process.",
};

export default function AcademicAssessmentsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Impacts"
        title="Academic Assessments"
        description="Each Center site evaluates education plans and participant impact semi-annually using the Kirkpatrick Evaluation Model across three levels: Reaction, Learning, and Outcomes."
      />

      {/* Four dimensions */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-2xl px-6 sm:px-8">
          <div className="flex flex-col gap-3">
            <AssessCard
              step="01"
              title="Reaction"
              blurb="What students thought and felt about the training."
            />
            <AssessCard
              step="02"
              title="Learning"
              blurb="The resulting increase in knowledge or capability."
            />
            <AssessCard
              step="03"
              title="Outcomes"
              blurb="Behavior change, capability improvement, and institutional impact resulting from trainee performance."
            />
          </div>

          {/* Process copy */}
          <div className="mt-10 sm:mt-12 lg:mt-14 max-w-4xl text-sm sm:text-base text-slate-900 space-y-4">
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
    </div>
  );
}

/** Kirkpatrick level card — stepped, editorial style */
function AssessCard({ step, title, blurb }: { step: string; title: string; blurb: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg px-6 py-5"
      style={{
        borderLeft: "3px solid var(--deep-teal)",
        background: "linear-gradient(to right, color-mix(in srgb, var(--deep-teal) 6%, white), white)",
      }}
    >
      {/* Content */}
      <div className="relative">
        <p
          className="mb-1 text-[11px] font-bold uppercase tracking-widest"
          style={{ color: "var(--deep-teal)" }}
        >
          Level {step}
        </p>
        <h3 className="text-base font-bold text-[var(--midnight-blue)]">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{blurb}</p>
      </div>
    </div>
  );
}
