import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Making An Impact | The BRAIN Center",
  description:
    "How demographic change, chronic disease, and emerging neurotechnologies shape the BRAIN Center’s broader impacts.",
};

export default function ImpactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Impacts
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Making An Impact
          </h1>
        </header>

        {/* Body content */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <p>
            Worldwide, the number of people aged 65 and above is projected to
            grow from an estimated 524 million in 2010 to nearly 1.5 billion in
            2050 (Global Health and Aging, 2011). In the U.S., the ratio of
            adults aged 65+ to people 20–64 will increase by roughly 80% in the
            next four decades, and life expectancy is projected to reach 84.5
            years by 2050. The average life expectancy in the U.S. increased
            from 45 years in 1900 to 78 years in 2010 (Arias, 2014). U.S. birth
            rates dropped for the sixth consecutive year in 2014 (Martin et al.,
            2013). The U.S. Census Bureau predicts that the increased life span,
            in combination with declining birth rates, will result in one in
            five Americans being 65 or older, and at least 400,000 people will
            be 100 or older by the year 2050.
          </p>

          <p>
            Medical advances of the twentieth century have contributed
            significantly to this dramatic rise in life expectancy. However,
            this increase in life expectancy has also triggered a shift in the
            leading causes of disease and death, emphasizing the emergence of
            chronic and degenerative diseases and the need for developing
            innovative neurotechnologies to address disabilities and health care
            costs (Global Health &amp; Aging, 2011).
          </p>

          <p className="font-semibold text-slate-900">
            We have moved from a society dying of fatal diseases to a society of
            individuals living with chronic diseases.
          </p>

          <p>
            Many diseases and traumas can significantly decrease or remove
            mobility, such as stroke, spinal cord injury, and Parkinson’s
            disease. Similarly, these and other diseases and injuries, such as
            Retinitis Pigmentosa and other forms of blindness, can decrease or
            block sensation. Diseases that directly affect sensory and motor
            function also often have comorbid effects on cognition and emotion.
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
            more effective, equitable, and sustainable neurotechnologies for
            society.
          </p>
        </div>
      </section>
    </main>
  );
}