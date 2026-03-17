import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Uniqueness & Differentiators",
  description: "Discover the key differentiators that make the BRAIN Center a leader in neurotechnology research.",
  alternates: { canonical: "/about/uniqueness" },
};

const items = [
  {
    title: "Clinical Integration",
    body: "Partnerships with institutions from the Texas Medical Center (TMC) to conduct clinical trials and validate technologies in real-world settings.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Strategy",
    body: "A Cooperative Research and Development Agreement (CRADA) with the U.S. Food and Drug Administration (FDA) to collaborate on human interaction with medical devices.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Advanced Data Collection",
    body: "Context-aware mobile brain–body imaging (MoBI) technologies for larger, smarter, distributed clinical trials.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Biomarker Discovery",
    body: "Assaying the population variability of EEG biomarkers with potential diagnostic utility.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Ethics & Policy",
    body: "The BRAIN Center is actively engaged in the study of ethical, legal, and regulatory aspects of neurotechnologies. We focus on developing standards for emergent technologies such as closed-loop brain–machine interfaces, electronic tattoos for health monitoring, and convergent research at the intersection of science, engineering, and the humanities.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 5.49Z" />
      </svg>
    ),
  },
  {
    title: "Workforce Development",
    body: "Our workforce development program includes an NSF REU Site, Neurotechnologies to Help the Body Move, Heal, and Feel Again. We offer graduate courses focusing on the development of new tools, standards, and regulatory approaches to assess the safety, reliability, efficacy, quality, and performance of biomedical products.",
    icon: (
      <svg className="w-5 h-5 text-[var(--deep-teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function UniquenessPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="About"
        title="Uniqueness: Key Differentiators"
        description="What sets the BRAIN Center apart — from clinical integration and regulatory partnerships to ethics, workforce development, and a globally connected research network."
      />

      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">

        {/* Lead paragraph */}
        <div className="mb-12 max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed font-medium text-[var(--midnight-blue)] mb-4">
            The BRAIN Center is a Phase II National Science Foundation (NSF)–funded
            industry–university collaborative research center (IUCRC).
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            It is a partnership between the University of Houston, Arizona State University,
            Miguel Hernández University in Spain, Instituto Tecnológico de Monterrey in Mexico,
            and three prospective national sites—Georgia Tech, UMBC, and West Virginia University.
            Our Industry Advisory Board (IAB) is comprised of national and international companies,
            start-ups, hospitals, and foundations.
          </p>
        </div>

        {/* Feature list */}
        <div>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-6 pb-10 mb-10${i < items.length - 1 ? " border-b border-slate-100" : ""}`}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--light-slate)] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h2 className="font-bold text-[var(--midnight-blue)] mb-2">{item.title}</h2>
                <p className="text-slate-600 text-base leading-relaxed max-w-3xl">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
