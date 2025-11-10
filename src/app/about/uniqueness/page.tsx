import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniqueness: Key Differentiators | The BRAIN Center",
  description:
    "What makes the NSF BRAIN Center unique: global partnerships, regulatory collaborations, and workforce development.",
};

export default function UniquenessPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            About the Center
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Uniqueness:{" "}
            <span className="block sm:inline">Key Differentiators</span>
          </h1>
        </header>

        {/* Body content */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700">
          <p>
            The BRAIN Center is a Phase II National Science Foundation (NSF)–
            funded industry–university collaborative research center (IUCRC). It
            is a partnership between the University of Houston, Arizona State
            University, Miguel Hernández University in Spain, Instituto
            Tecnológico de Monterrey in Mexico, and three prospective national
            sites—Georgia Tech, the University of Maryland Baltimore County, and
            West Virginia University—as well as the BRAIN Center’s Industry
            Advisory Board (IAB), which is comprised of national and
            international companies, start-ups, hospitals, and foundations.
          </p>

          <p>
            The Center’s innovation ecosystem includes partnerships with
            institutions from the Texas Medical Center (TMC) to conduct clinical
            trials; a Cooperative Research and Development Agreement (CRADA)
            with the U.S. Food and Drug Administration (FDA) to collaborate in
            the study of human interaction with medical device technologies;
            real-world data collection using context-aware mobile brain–body
            imaging (MoBI) technologies for larger, smarter, and distributed
            clinical trials; and assaying the population variability of EEG
            biomarkers with potential diagnostic utility.
          </p>

          <p>
            The BRAIN Center is also actively engaged in the study of ethical,
            legal, and regulatory aspects of neurotechnologies; the development
            of standards for emergent neurotechnologies such as closed-loop
            brain–machine interfaces and electronic tattoos for health
            monitoring; and convergent research at the intersection of science,
            engineering, and the humanities.
          </p>

          <p>
            BRAIN’s workforce development program includes an NSF REU Site,{" "}
            <em>Neurotechnologies to Help the Body Move, Heal, and Feel Again</em>,
            and graduate courses focusing on the development of new tools,
            standards, and regulatory approaches to assess the safety,
            reliability, efficacy, quality, and performance of biomedical
            products and devices.
          </p>
        </div>
      </section>
    </main>
  );
}