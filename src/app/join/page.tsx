"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinPage() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "nsfbrain@cougarnet.uh.edu";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Removed "flex items-center justify-center" to let content sit at the top
    <main className="min-h-screen bg-[var(--midnight-blue)] relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[var(--deep-teal)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-900 opacity-20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="text-white space-y-6 lg:sticky lg:top-24">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-4">
                Partnership Opportunities
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight tracking-tight text-white">
                Join The BRAIN Center!
              </h1>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              <p>
                Industry partners play a key role in the BRAIN Center’s mission to
                develop safe, effective, and affordable personalized
                neurotechnologies for the restoration, enhancement, and
                rehabilitation of sensory, motor, affective, and cognitive functions.
              </p>
              <p>
                BRAIN Center’s members, which will include academic, clinical,
                industrial, and regulatory partners, will have expertise that spans
                single cells to systems and both human and non-human models. 
              </p>
              <p className="border-l-2 border-[var(--deep-teal)] pl-4 text-white italic">
                This partnership will allow rigorous testing of the efficacy,
                safety, and long-term reliability of neurotechnology advances
                that would not be otherwise possible within the traditional
                ‘silos’ of academic, industry, regulatory, and clinical
                communities.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-[var(--midnight-blue)] mb-2">
                Start a Conversation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
                We invite industry leaders and academic institutions to discuss membership opportunities directly with our directors.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8 flex flex-col items-center text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Direct Email Inquiry
                </span>
                
                <a 
                  href={`mailto:${contactEmail}`}
                  className="text-xl sm:text-2xl font-bold text-[var(--deep-teal)] hover:text-[var(--midnight-blue)] transition-colors break-all"
                >
                  {contactEmail}
                </a>

                <button
                  onClick={handleCopy}
                  className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[var(--deep-teal)] transition-colors"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span 
                        key="copied"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 text-[var(--deep-teal)]"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Copied to clipboard
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="copy"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        Copy Address
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--midnight-blue)] mb-4 border-b border-slate-100 pb-2">
                  What to include in your email
                </h3>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:gap-3 text-sm text-slate-600">
                    <span className="font-bold text-[var(--deep-teal)] min-w-[80px]">Subject:</span>
                    <span>Please use <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800 border border-slate-200">Membership Inquiry - [Your Org]</span></span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-3 text-sm text-slate-600">
                    <span className="font-bold text-[var(--deep-teal)] min-w-[80px]">Intro:</span>
                    <span>Your Name, Title, and Organization.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-3 text-sm text-slate-600">
                    <span className="font-bold text-[var(--deep-teal)] min-w-[80px]">Role:</span>
                    <span>Are you looking to join as an Industry Partner, Academic Site, or Advisor?</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-3 text-sm text-slate-600">
                    <span className="font-bold text-[var(--deep-teal)] min-w-[80px]">Goal:</span>
                    <span>Briefly describe your interest (e.g., recruitment, R&D collaboration, technology transfer).</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}