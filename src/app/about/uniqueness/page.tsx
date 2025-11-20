import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniqueness & Differentiators | BRAIN Center",
  description: "Discover the key differentiators that make the BRAIN Center a leader in neurotechnology research.",
};

// Simple Icon Component for the list
function StarIcon() {
  return (
    <svg className="w-5 h-5 text-[var(--deep-teal)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function UniquenessPage() {
  return (
    <main className="bg-white">
      {/* HEADER SECTION - Tightened Top/Bottom Padding */}
      <section className="mx-auto max-w-5xl px-6 pt-12 lg:pt-16 pb-6 border-b border-slate-100">
        <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-3">
          About The Center
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--midnight-blue)] leading-tight">
          Uniqueness: Key Differentiators
        </h1>
      </section>

      {/* CONTENT BODY */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        
        {/* 1. THE LEAD: Reduced margin-bottom (mb-10 instead of mb-16) */}
        <div className="prose prose-lg max-w-none text-slate-600 mb-10">
          <p className="text-lg md:text-xl leading-relaxed font-medium text-[var(--midnight-blue)]">
            The BRAIN Center is a Phase II National Science Foundation (NSF)–funded 
            industry–university collaborative research center (IUCRC).
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            It is a partnership between the University of Houston, Arizona State University, 
            Miguel Hernández University in Spain, Instituto Tecnológico de Monterrey in Mexico, 
            and three prospective national sites—Georgia Tech, UMBC, and West Virginia University. 
            Our Industry Advisory Board (IAB) is comprised of national and international companies, 
            start-ups, hospitals, and foundations.
          </p>
        </div>

        {/* 2. THE ECOSYSTEM GRID: Tighter padding and gaps */}
        <div className="bg-[var(--light-slate)] rounded-xl p-6 md:p-10 mb-10">
          <h2 className="text-xl font-serif font-bold text-[var(--midnight-blue)] mb-6">
            The Innovation Ecosystem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* Feature 1 */}
            <div className="flex gap-3">
              <StarIcon />
              <div>
                <h3 className="font-bold text-sm text-[var(--midnight-blue)] mb-1">Clinical Integration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Partnerships with institutions from the <strong>Texas Medical Center (TMC)</strong> to conduct clinical trials and validate technologies in real-world settings.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3">
              <StarIcon />
              <div>
                <h3 className="font-bold text-sm text-[var(--midnight-blue)] mb-1">Regulatory Strategy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A Cooperative Research and Development Agreement (CRADA) with the <strong>U.S. Food and Drug Administration (FDA)</strong> to collaborate on human interaction with medical devices.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3">
              <StarIcon />
              <div>
                <h3 className="font-bold text-sm text-[var(--midnight-blue)] mb-1">Advanced Data Collection</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Context-aware mobile brain–body imaging (MoBI) technologies for larger, smarter, distributed clinical trials.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-3">
              <StarIcon />
              <div>
                <h3 className="font-bold text-sm text-[var(--midnight-blue)] mb-1">Biomarker Discovery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Assaying the population variability of EEG biomarkers with potential diagnostic utility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. ETHICS & WORKFORCE: Tighter vertical gap (pt-10 instead of pt-12) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 border-t border-slate-100 pt-10">
          <div>
            <h3 className="font-serif font-bold text-lg text-[var(--midnight-blue)] mb-3">
              Ethics & Policy
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The BRAIN Center is actively engaged in the study of ethical, legal, and regulatory aspects of neurotechnologies. We focus on developing standards for emergent technologies such as closed-loop brain–machine interfaces, electronic tattoos for health monitoring, and convergent research at the intersection of science, engineering, and the humanities.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg text-[var(--midnight-blue)] mb-3">
              Workforce Development
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our workforce development program includes an NSF REU Site, <em>Neurotechnologies to Help the Body Move, Heal, and Feel Again</em>. We offer graduate courses focusing on the development of new tools, standards, and regulatory approaches to assess the safety, reliability, efficacy, quality, and performance of biomedical products.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}