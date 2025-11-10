import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Economic Impact | The BRAIN Center",
  description:
    "How BRAIN Center research improves national economic health by addressing disability, chronic disease, and neurotechnology innovation.",
};

export default function EconomicImpactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Impacts
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Improving National Economic Health
          </h1>
        </header>

        {/* Context / problem statement */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            Increases in life expectancy have shifted the leading causes of
            disease and death toward chronic and degenerative conditions. This
            trend, combined with population aging, has major implications for
            health care costs and workforce participation, and it underscores
            the need for innovative neurotechnologies that can reduce disability
            and improve quality of life.
          </p>

          <p>
            Worldwide, millions of people live with neurological conditions such
            as Parkinson’s disease, stroke, spinal cord injury, limb loss, and
            blindness. These conditions are leading causes of long-term
            disability and generate substantial direct medical costs as well as
            indirect costs from lost productivity and caregiving demands. In the
            United States alone, the combined annual economic burden of
            neurological disability is estimated in the hundreds of billions of
            dollars.
          </p>

          <p>
            Many of these conditions affect mobility, sensation, and cognition
            at the same time. Damage to the brain, spinal cord, or peripheral
            nerves can limit movement, block or distort sensory information, and
            alter mood and decision-making. As people live longer with these
            conditions, the cumulative economic impact on individuals, families,
            and health systems continues to grow.
          </p>

          <p>
            The BRAIN Center focuses on engineering human–machine systems, tools
            and devices that can reduce this burden of disability. By improving
            diagnosis, treatment, rehabilitation, and long-term support, these
            technologies have the potential to reduce health care costs and help
            people maintain independence and participation in the workforce.
          </p>
        </div>

        {/* BRAIN impact aims */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            BRAIN’s discoveries aim to:
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700 marker:text-teal-500">
            <li>
              <span className="font-semibold">
                Revolutionize the treatment of brain disorders
              </span>{" "}
              that limit mobility, cognition, and communication, enabling people
              to live more independently.
            </li>
            <li>
              <span className="font-semibold">
                Change the way scientists and engineers design human–machine
                systems
              </span>{" "}
              by using rich data from the brain and body to personalize
              interventions.
            </li>
            <li>
              <span className="font-semibold">
                Interpret brain function from the molecular to network levels
              </span>{" "}
              to better understand disease mechanisms and treatment targets.
            </li>
            <li>
              <span className="font-semibold">
                Harness neuroplasticity across multiple time scales
              </span>{" "}
              to enhance the effectiveness of assistive and rehabilitative
              technologies.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            Examples of BRAIN’s engineered systems include closed-loop
            neuromodulation interfaces; engaging and reliable stimulation,
            sensing, and imaging tools for treatment of neurological disorders;
            high-throughput virtual and physical human–machine interfaces; and
            integrated diagnostic, assistive, and therapeutic platforms.
          </p>
        </section>

        {/* Research interests */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Research Interests
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            The Center’s research portfolio reflects clinical and societal needs
            identified by our partners. Medical devices that interface with the
            nervous system for monitoring, diagnosis, therapy, or restoration
            are poised to be a major source of innovation and economic growth in
            the coming years.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            BRAIN investigators use a synergistic and interdisciplinary approach
            to develop and validate patient-centered neurotechnologies that
            address disability and reduce long-term costs. Specifically, the
            research focuses on technologies and interventions that:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700 marker:text-slate-400">
            <li>
              <span className="font-semibold">
                Enhance mobility and balance
              </span>{" "}
              to prevent falls in older adults and in people living with stroke,
              Parkinson’s disease, and related conditions.
            </li>
            <li>
              <span className="font-semibold">
                Alleviate age- and disease-related degradation of sensory and
                motor function
              </span>{" "}
              through advanced brain–machine interfaces and rehabilitative
              tools.
            </li>
            <li>
              <span className="font-semibold">
                Improve upper- and lower-extremity function
              </span>{" "}
              in individuals recovering from stroke and other neurological
              injuries.
            </li>
            <li>
              <span className="font-semibold">
                Advance regulatory science and standards
              </span>{" "}
              to support safe, effective translation of neurotechnologies into
              clinical and everyday settings.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}