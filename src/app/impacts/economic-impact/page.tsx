import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Economic Impact",
  description:
    "How BRAIN Center research improves national economic health by addressing disability, chronic disease, and neurotechnology innovation.",
};

export default function EconomicImpactPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Impacts"
        title="Improving National Economic Health"
      />

      <section className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        {/* Opening context */}
        <p className="text-base leading-relaxed text-slate-700">
          Increases in life expectancy have shifted the leading causes of
          disease and death toward chronic and degenerative conditions. This
          trend, combined with population aging, has major implications for
          health care costs and workforce participation, and it underscores the
          need for innovative neurotechnologies that can reduce disability and
          improve quality of life.
        </p>

        {/* Economic burden highlight */}
        <div className="my-10 flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 rounded-lg border border-slate-200 bg-[var(--light-slate)] p-6">
            <p className="text-2xl font-bold text-[var(--deep-teal)]">
              Hundreds of billions
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Annual economic burden of neurological disability in the U.S.
            </p>
          </div>
          <div className="flex-1 rounded-lg border border-slate-200 bg-[var(--light-slate)] p-6">
            <p className="text-2xl font-bold text-[var(--deep-teal)]">
              Millions affected
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Worldwide, living with stroke, Parkinson&apos;s, spinal cord
              injury, and blindness
            </p>
          </div>
        </div>

        {/* Problem scope */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            Many of these conditions affect mobility, sensation, and cognition
            at the same time. Damage to the brain, spinal cord, or peripheral
            nerves can limit movement, block or distort sensory information, and
            alter mood and decision-making. As people live longer with these
            conditions, the cumulative economic impact on individuals, families,
            and health systems continues to grow.
          </p>

          <p>
            The BRAIN Center focuses on engineering human-machine systems, tools
            and devices that can reduce this burden of disability. By improving
            diagnosis, treatment, rehabilitation, and long-term support, these
            technologies have the potential to reduce health care costs and help
            people maintain independence and participation in the workforce.
          </p>
        </div>

        {/* BRAIN's discoveries section */}
        <div className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            BRAIN&apos;s discoveries aim to:
          </h2>
          <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--deep-teal)]" />
              <span>
                <strong>Revolutionize the treatment of brain disorders</strong>{" "}
                that limit mobility, cognition, and communication, enabling
                people to live more independently.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--deep-teal)]" />
              <span>
                <strong>
                  Change the way scientists and engineers design human-machine
                  systems
                </strong>{" "}
                by using rich data from the brain and body to personalize
                interventions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--deep-teal)]" />
              <span>
                <strong>
                  Interpret brain function from the molecular to network levels
                </strong>{" "}
                to better understand disease mechanisms and treatment targets.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--deep-teal)]" />
              <span>
                <strong>
                  Harness neuroplasticity across multiple time scales
                </strong>{" "}
                to enhance the effectiveness of assistive and rehabilitative
                technologies.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-base leading-relaxed text-slate-700">
            Examples of BRAIN&apos;s engineered systems include closed-loop
            neuromodulation interfaces; engaging and reliable stimulation,
            sensing, and imaging tools for treatment of neurological disorders;
            high-throughput virtual and physical human-machine interfaces; and
            integrated diagnostic, assistive, and therapeutic platforms.
          </p>
        </div>

        {/* Research Interests section */}
        <div className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Research Interests
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            The Center&apos;s research portfolio reflects clinical and societal
            needs identified by our partners. Medical devices that interface
            with the nervous system for monitoring, diagnosis, therapy, or
            restoration are poised to be a major source of innovation and
            economic growth in the coming years.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            BRAIN investigators use a synergistic and interdisciplinary approach
            to develop and validate patient-centered neurotechnologies that
            address disability and reduce long-term costs. Specifically, the
            research focuses on technologies and interventions that:
          </p>

          <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
              <span>
                <strong>Enhance mobility and balance</strong> to prevent falls
                in older adults and in people living with stroke,
                Parkinson&apos;s disease, and related conditions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
              <span>
                <strong>
                  Alleviate age- and disease-related degradation of sensory and
                  motor function
                </strong>{" "}
                through advanced brain-machine interfaces and rehabilitative
                tools.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
              <span>
                <strong>Improve upper- and lower-extremity function</strong> in
                individuals recovering from stroke and other neurological
                injuries.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-slate-400" />
              <span>
                <strong>Advance regulatory science and standards</strong> to
                support safe, effective translation of neurotechnologies into
                clinical and everyday settings.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
