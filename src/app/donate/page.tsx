import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Support"
        title="Donate"
        description="Help accelerate safe, reliable neurotechnology that improves quality of life."
      />

      <section className="mx-auto max-w-5xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">

        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-800">
          <p>
            Your generosity enables rigorous testing of the efficacy, safety, and
            long-term reliability of neurotechnology.
          </p>
          <p>
            The Building Reliable Advances and Innovations in Neurotechnology (BRAIN)
            Center is an Industry/University Cooperative Research Center that brings
            together the University of Houston, Arizona State University, and other
            partner institutions. Your gift supports innovative interdisciplinary
            research across the multiple dimensions of brain function and behavior
            that could ultimately improve the quality of life.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-[var(--deep-teal)]/15 bg-[var(--light-slate)] px-4 py-4 text-sm leading-relaxed text-slate-800">
          <p className="font-semibold text-[var(--midnight-blue)]">
            Your gift directly supports:
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1 marker:text-[var(--deep-teal)]">
            <li>Student training and hands-on research experience</li>
            <li>Collaborative projects across BRAIN Center partner institutions</li>
            <li>Development and testing of safe, dependable neurotechnology</li>
          </ul>
        </div>

        <div className="mt-10 space-y-3">
          <p className="text-sm text-slate-700">
            When you click the button below, you will be redirected to the University of Houston&apos;s secure giving portal. To
            designate your gift to the BRAIN Center, follow these steps on that page:
          </p>
          <ol className="ml-5 list-decimal space-y-1 text-sm leading-relaxed text-slate-700">
            <li>
              Under <strong>Choose your fund(s)</strong>, use the <strong>Search Funds</strong> box.
            </li>
            <li>
              Type <strong>&quot;Brain Gifts&quot;</strong> and select <strong>Brain Gifts</strong> from the matching results.
            </li>
            <li>
              Choose your gift amount and click <strong>Next</strong> to complete the remaining steps.
            </li>
          </ol>

          <Link
            href="https://giving.uh.edu/brain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--deep-teal)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--cta-hover)]"
          >
            Support the BRAIN Center ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
