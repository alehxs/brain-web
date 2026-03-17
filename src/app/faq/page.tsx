import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about membership, projects, intellectual property, and Industry Advisory Board participation in the BRAIN Center.",
  alternates: { canonical: "/faq" },
};

/* ─── Data ─────────────────────────────────────────────────── */

const faqs = [
  {
    index: "01",
    question: "What is an IUCRC?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    body: (
      <p>
        An Industry&ndash;University Cooperative Research Center (IUCRC) is an
        NSF-funded center that supports industry-relevant, pre-competitive
        research through long-term partnerships between universities, industry,
        and government agencies. IUCRCs pool member resources to support
        collaborative research, train the next generation of talent, and
        accelerate technology transfer.
      </p>
    ),
  },
  {
    index: "02",
    question: "What are the different membership levels and associated costs?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    body: (
      <>
        <p>
          Industry members typically join as full members at a standard annual
          fee (for example, around $50,000 per year). Foundation and non-profit
          memberships may be available at a reduced rate. Exact levels and
          current rates are set by the Center and may change over time.
        </p>
        <p>
          For the most up-to-date membership options and pricing, please contact
          the Center directly using the information at the bottom of this page.
        </p>
      </>
    ),
  },
  {
    index: "03",
    question: "How long should I plan on being a member of the Center?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    body: (
      <>
        <p>
          Membership is renewed annually, but the Center is designed as a
          long-term partnership. Many projects span multiple years, and companies
          often remain members to follow their research portfolio, recruit
          students, and continue shaping the research roadmap.
        </p>
        <p>
          If your organization plans to terminate membership, advance notice is
          requested so that existing commitments and projects can be managed
          responsibly.
        </p>
      </>
    ),
  },
  {
    index: "04",
    question: "Who are the current BRAIN Center members?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    body: (
      <>
        <p>
          The Center includes university sites and a diverse set of industry
          partners from medical device companies, technology firms, hospitals,
          and other organizations interested in neurotechnology.
        </p>
        <p>
          A current list of member organizations is maintained on our Membership
          page.{" "}
          <a
            href="/membership"
            className="font-medium text-[var(--deep-teal)] hover:underline"
          >
            View current BRAIN Center members →
          </a>
        </p>
      </>
    ),
  },
  {
    index: "05",
    question: "What are the membership benefits of the BRAIN Center?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    body: (
      <ul className="space-y-2">
        {[
          "Voting rights to help select and steer pre-competitive research projects.",
          "Access to research results, data, and prototypes generated by Center projects.",
          "Opportunities to work closely with faculty, students, and other member organizations.",
          "Early visibility into emerging neurotechnology standards and regulatory science.",
          "Talent pipeline and recruiting opportunities for highly skilled students and trainees.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    index: "06",
    question: "How does Intellectual Property work within the Center?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    body: (
      <>
        <p>
          Universities retain the right to publish results in scientific and
          engineering venues after allowing sufficient time for invention
          disclosure and IP protection. Inventions arising from Center projects
          are disclosed through each university&apos;s technology transfer office.
        </p>
        <p>
          BRAIN Center member companies may be eligible for nonexclusive,
          royalty-free licenses or, in some cases, to negotiate royalty-bearing
          exclusive licenses according to the Center&apos;s IP policies and the
          relevant university office of technology transfer.
        </p>
        <p>
          <a
            href="/about/intellectual-property"
            className="font-medium text-[var(--deep-teal)] hover:underline"
          >
            View full IP process →
          </a>
        </p>
      </>
    ),
  },
  {
    index: "07",
    question: "When is the best time to sign up for membership?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    body: (
      <p>
        New members can typically join at any time during the year. However, it
        is helpful to join in advance of Industry Advisory Board (IAB) meetings
        so that your organization can participate in project reviews, voting, and
        planning for the next funding cycle.
      </p>
    ),
  },
  {
    index: "08",
    question: "When is the next Industry Advisory Board (IAB) meeting?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    body: (
      <>
        <p>
          The BRAIN Center holds IAB meetings annually, with additional virtual
          check-ins as needed. Dates and locations vary by year.
        </p>
        <p>
          For current IAB meeting information, please contact the Program Manager
          or refer to Center communications sent to member organizations.
        </p>
      </>
    ),
  },
  {
    index: "09",
    question: "How are research projects selected?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    body: (
      <>
        <p>
          Faculty and investigators propose projects that align with the
          Center&apos;s mission. These proposals are presented to the Industry
          Advisory Board, which provides feedback, ranks projects, and votes on
          which projects to fund with Center resources.
        </p>
        <p>
          Projects are evaluated on scientific merit, relevance to member needs,
          feasibility, and potential impact. Highly ranked projects are
          prioritized for funding, while other promising ideas may be refined and
          resubmitted in future cycles.
        </p>
      </>
    ),
  },
  {
    index: "10",
    question: "What are my responsibilities as an Industry Advisory Board (IAB) member?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    body: (
      <ul className="space-y-2">
        {[
          "Participate in IAB meetings and provide feedback on project proposals and Center activities.",
          "Help identify industry needs, use cases, and standards-related challenges that can guide future research.",
          "Review project progress and outcomes, and provide input on continuation or redirection.",
          "Support technology transition, collaborations, and, when relevant, licensing or commercialization efforts.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    index: "11",
    question: "How do I become a member?",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
    body: (
      <>
        <p>
          To explore membership, please contact the Center leadership team. They
          can discuss membership levels, benefits, and the process for joining
          the IAB.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
            <span>
              Center Director (University of Houston):{" "}
              <a
                href="mailto:jlcontreras-vidal@uh.edu"
                className="font-medium text-[var(--deep-teal)] hover:underline"
              >
                jlcontreras-vidal@uh.edu
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)]" />
            <span>
              Program Management / Membership Inquiries:{" "}
              <a
                href="mailto:brain@uh.edu"
                className="font-medium text-[var(--deep-teal)] hover:underline"
              >
                brain@uh.edu
              </a>
            </span>
          </li>
        </ul>
      </>
    ),
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function QAPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Membership & Governance"
        title="FAQ"
        description="Answers to questions about the NSF IUCRC BRAIN Center, including membership, benefits, intellectual property, and Industry Advisory Board responsibilities."
      />
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {faqs.map((item, i) => (
            <div
              key={item.index}
              className={`${i < faqs.length - 1 ? "pb-10 mb-10 border-b border-slate-100" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-[var(--light-slate)] text-[var(--deep-teal)]">
                  {item.icon}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[var(--midnight-blue)] leading-tight">
                  {item.question}
                </h2>
              </div>
              <div aria-hidden="true" className="h-0.5 w-12 rounded-full mb-5 bg-[var(--deep-teal)]" />
              <div className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 space-y-3">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
