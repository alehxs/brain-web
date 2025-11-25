import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NSF IUCRC Program | NSF BRAIN",
  description:
    "Learn about the National Science Foundation Industry–University Cooperative Research Centers (IUCRC) Program.",
};

function CheckIcon() {
  return (
    <svg className="h-6 w-6 text-[var(--deep-teal)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function IucrcPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-[var(--light-slate)] relative overflow-hidden border-b border-slate-200/60">
        {/* Padding updated to match CatalystsPage: px-6 sm:px-8 py-10 sm:py-12 lg:py-16 */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="max-w-3xl">
              <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-4">
                Supported By
              </span>
              
              {/* UPDATED: Downscaled to match Catalysts sizing (3xl/4xl) */}
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--midnight-blue)] leading-tight tracking-tight">
                Industry–University Cooperative Research Centers Program
              </h1>
              
              {/* UPDATED: Downscaled to match Catalysts sizing (sm/base) */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
                The BRAIN Center is supported by the NSF IUCRC Program, accelerating the impact of fundamental research through long-term collaboration between industry, universities, and government.
              </p>
            </div>
            <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-slate-100/50">
              <Image
                src="/nsf-logo.png"
                alt="National Science Foundation"
                width={120}
                height={120}
                className="object-contain w-24 h-24 md:w-32 md:h-32"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION: Editorial Layout */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif font-bold text-[var(--midnight-blue)] mb-6">
              Mission and History
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The IUCRC program catalyzes high-impact, pre-competitive research
              by forming sustained partnerships among industry innovators,
              academic investigators, and government stakeholders. 
            </p>
            <div className="mt-8 p-6 bg-[var(--light-slate)] rounded-xl border-l-4 border-[var(--deep-teal)]">
               <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--deep-teal)] mb-2">
                BRAIN Center Context
              </h3>
              <p className="text-slate-700 leading-relaxed">
                As an NSF IUCRC, we bring together universities, companies, and agencies to co-define research roadmaps in neurotechnology.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-100 pb-4">
              Program Objectives
            </h3>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <CheckIcon />
                <div>
                  <strong className="block text-[var(--midnight-blue)] font-semibold mb-1">Use-Inspired Research</strong>
                  <p className="text-slate-600 leading-relaxed">Support research aligned with industry needs to solve real-world problems.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckIcon />
                <div>
                   <strong className="block text-[var(--midnight-blue)] font-semibold mb-1">Shared Investment</strong>
                  <p className="text-slate-600 leading-relaxed">Enable investment in fundamental science that is difficult for a single organization to support alone.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckIcon />
                <div>
                   <strong className="block text-[var(--midnight-blue)] font-semibold mb-1">Technology Transfer</strong>
                  <p className="text-slate-600 leading-relaxed">Foster tech transfer and accelerate the commercialization of new ideas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckIcon />
                <div>
                   <strong className="block text-[var(--midnight-blue)] font-semibold mb-1">Workforce Development</strong>
                  <p className="text-slate-600 leading-relaxed">Develop a diverse, highly trained workforce with experience in industry-relevant research.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRUCTURE: Full Bleed Background Band */}
      {/* Wrapper padding updated to py-10 sm:py-12 lg:py-16 */}
      <section className="bg-[var(--midnight-blue)] text-white py-10 sm:py-12 lg:py-16 relative overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {/* Inner padding updated to px-6 sm:px-8 */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
            Program Structure
          </h2>
          <div className="prose prose-lg prose-invert mx-auto opacity-90 leading-relaxed">
            <p className="mb-6">
              Each IUCRC operates as a consortium of academic sites and member
              organizations that collectively fund and guide a portfolio of
              research projects. 
            </p>
            <p>
              Industry and government members provide input
              on research priorities and evaluate proposed projects, while the
              academic sites lead the scientific work and training activities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-white/10 pt-12">
            <div>
               <div className="text-[var(--luminous-mint)] font-bold text-lg mb-2">Government</div>
               <div className="text-sm text-white/60">Catalyzing Partnership</div>
            </div>
            <div>
               <div className="text-[var(--luminous-mint)] font-bold text-lg mb-2">University</div>
               <div className="text-sm text-white/60">Research Infrastructure</div>
            </div>
             <div>
               <div className="text-[var(--luminous-mint)] font-bold text-lg mb-2">Industry</div>
               <div className="text-sm text-white/60">Funding & Insight</div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="https://iucrc.nsf.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--luminous-mint)] hover:text-white font-semibold transition-colors border-b border-[var(--luminous-mint)] hover:border-white pb-0.5"
            >
              View IUCRC Program on NSF.gov 
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DIAGRAM: Clean & Centered */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
        <div className="text-center mb-12">
           <span className="text-[var(--deep-teal)] font-bold tracking-widest uppercase text-xs mb-3 block">
            Visualizing the Ecosystem
          </span>
          <h2 className="text-3xl font-serif font-bold text-[var(--midnight-blue)]">
            The Partnership Model
          </h2>
        </div>
        
        <figure className="relative">
          <Image
            src="/images/iucrc-partnership.png"
            alt="Diagram of the IUCRC partnership among government, university, and industry"
            width={966}
            height={773}
            className="w-full h-auto object-contain mx-auto"
          />
        </figure>
      </section>
    </main>
  );
}