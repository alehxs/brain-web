"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinClient() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "nsfbrain@cougarnet.uh.edu";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="space-y-6 lg:sticky lg:top-24">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-4">
                Partnership Opportunities
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--midnight-blue)]">
                Join The BRAIN Center!
              </h1>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 max-w-xl">
              <p>
                Industry partners play a key role in the BRAIN Center&apos;s mission to
                develop safe, effective, and affordable personalized
                neurotechnologies for the restoration, enhancement, and
                rehabilitation of sensory, motor, affective, and cognitive functions.
              </p>
              <p>
                BRAIN Center&apos;s members, which will include academic, clinical,
                industrial, and regulatory partners, will have expertise that spans
                single cells to systems and both human and non-human models.
              </p>
              <p className="border-l-2 border-[var(--deep-teal)] pl-4 text-[var(--midnight-blue)] italic font-medium">
                This partnership will allow rigorous testing of the efficacy,
                safety, and long-term reliability of neurotechnology advances
                that would not be otherwise possible within the traditional
                &apos;silos&apos; of academic, industry, regulatory, and clinical
                communities.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
              <h2 className="text-2xl font-bold text-[var(--midnight-blue)] mb-3">
                Become an Industry Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
                Gain direct access to cutting-edge neurotechnology research, FDA regulatory partnerships, and collaborative opportunities with leading academic institutions. Launch your membership inquiry now.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Membership Inquiry - [Your Organization]')}&body=${encodeURIComponent('Name: \n\nTitle: \n\nOrganization: \n\nGoal: ')}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--deep-teal)] hover:bg-[var(--cta-hover)] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Launch Inquiry
                </a>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-xs text-slate-500">or</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[var(--deep-teal)] transition-colors"
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
                          Email copied
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
                          Copy email instead
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
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
    </div>
  );
}
