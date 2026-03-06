import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Making An Impact",
  description:
    "How demographic change, chronic disease, and emerging neurotechnologies shape the BRAIN Center's broader impacts.",
};

export default function ImpactPage() {
  return (
    <div className="bg-white">
      <PageHeader eyebrow="Impacts" title="Making An Impact" description="As neurological disability rises with global aging, BRAIN Center develops neurotechnologies to restore mobility, sensation, and cognition." />

      <section className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        {/* Opening paragraph */}
        <p className="text-base leading-relaxed text-slate-700">
          Worldwide, the number of people aged 65 and above is projected to grow
          dramatically in the coming decades. In the U.S., the ratio of adults
          aged 65+ to people 20-64 will increase by roughly 80% in the next four
          decades, and life expectancy is projected to reach 84.5 years by 2050.
        </p>

        {/* Key Stats - 3 compact boxes */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="text-2xl font-bold text-[var(--deep-teal)]">
              1.5 billion
            </p>
            <p className="mt-1 text-sm text-slate-600">
              People 65+ globally by 2050
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="text-2xl font-bold text-[var(--deep-teal)]">1 in 5</p>
            <p className="mt-1 text-sm text-slate-600">
              Americans will be 65+ by 2050
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[var(--light-slate)] p-5">
            <p className="text-2xl font-bold text-[var(--deep-teal)]">
              400,000+
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Centenarians in the U.S. by 2050
            </p>
          </div>
        </div>

        {/* Context paragraph */}
        <p className="mt-10 text-base leading-relaxed text-slate-700">
          Medical advances of the twentieth century have contributed
          significantly to this dramatic rise in life expectancy. However, this
          increase has also triggered a shift in the leading causes of disease
          and death, emphasizing the emergence of chronic and degenerative
          diseases and the need for developing innovative neurotechnologies to
          address disabilities and health care costs.
        </p>

        {/* Callout quote */}
        <blockquote className="my-10 border-l-4 border-[var(--deep-teal)] pl-6 text-lg font-medium italic text-slate-800">
          We have moved from a society dying of fatal diseases to a society of
          individuals living with chronic diseases.
        </blockquote>

        {/* Remaining content */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            Many diseases and traumas can significantly decrease or remove
            mobility, such as stroke, spinal cord injury, and Parkinson&apos;s
            disease. Similarly, these and other diseases and injuries, such as
            Retinitis Pigmentosa and other forms of blindness, can decrease or
            block sensation. Diseases that directly affect sensory and motor
            function also often have comorbid effects on cognition and emotion.
          </p>

          <p>
            Chronic pathologies that span the hierarchy from basic physiological
            function to thought and emotion—hypertension, epilepsy,
            depression—may be ameliorated through neural technological
            approaches.
          </p>

          <p>
            The population of individuals living with disability is expanding,
            and the current medical standard of care will need to be augmented
            in order to reduce the significant impact on the national economy in
            the coming decades. Through convergent research and translation into
            practice, the BRAIN Center aims to help shape this transition toward
            more effective and sustainable neurotechnologies for
            society.
          </p>
        </div>
      </section>
    </div>
  );
}
