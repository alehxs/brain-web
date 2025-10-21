import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <section className="bg-[var(--surface-light)] text-[var(--midnight-blue)]">
      {/* Top band / hero */}
      <div className="relative isolate overflow-hidden bg-[var(--surface-light)] text-[var(--midnight-blue)] border-b border-[var(--luminous-mint)]/30">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Donate</h1>
          <p className="mt-4 max-w-3xl text-[var(--midnight-blue)]/80">
            Your generosity enables rigorous testing of the efficacy, safety, and long-term
            reliability of neurotechnology.
          </p>
        </div>

        {/* subtle diagonal pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 20px, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Content */}
      <div className="bg-[var(--surface-light)] text-[var(--midnight-blue)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:py-16">
          {/* Left — copy */}
          <div>
            <p className="text-base leading-relaxed text-[var(--midnight-blue)]/85">
              The Building Reliable Advances and Innovations in Neurotechnology (BRAIN) Center is an
              NSF Industry–University Cooperative Research Center at Arizona State University and
              the University of Houston. Your gift supports innovative, interdisciplinary research
              across the multiple dimensions of brain function and behavior with the ultimate goal
              of improving quality of life.
            </p>

            <h2 className="mt-8 text-xl font-semibold">Ways you can designate a gift</h2>
            <ul className="mt-4 space-y-2 text-[var(--midnight-blue)]/85">
              {[
                "Unrestricted donation",
                "Specific site: UH, ASU, UMH, TEC, Georgia Tech, UMBC",
                "Specific research thrust",
                "Faculty (name and last name)",
                "Project (add the project name)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-[var(--luminous-mint)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Primary CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://give.uh.edu/placeholder" // TODO: replace with your official giving URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[var(--luminous-mint)] px-5 py-3 font-semibold text-[var(--midnight-blue)] hover:bg-[var(--deep-teal)] transition"
              >
                Click to Donate
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.22 7.06a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.168-2.19H5.75A.75.75 0 0 1 5 10Z" />
                </svg>
              </Link>

              {/* Optional secondary link */}
              <Link
                href="/membership"
                className="inline-flex items-center justify-center rounded-md border border-[var(--midnight-blue)]/10 px-5 py-3 font-semibold text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)]/10 transition"
              >
                See Membership Options
              </Link>
            </div>
          </div>

          {/* Right — illustration / image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-[var(--midnight-blue)]/10 bg-[var(--luminous-mint)]/10">
              {/* Replace image with your own asset if desired */}
              <Image
                src="/partners/uh.png"
                alt="Community supporting innovation"
                width={1200}
                height={800}
                className="h-auto w-full object-contain p-6 md:p-10"
                priority
              />
            </div>

            {/* Small caption */}
            <p className="mt-3 text-sm text-[var(--midnight-blue)]/60">
              Gifts help accelerate safe, effective, and affordable neurotechnologies.
            </p>
          </div>
        </div>
      </div>

      {/* Pre-footer callout */}
      <div className="bg-[var(--light-slate)] text-[var(--midnight-blue)]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <h3 className="text-xl font-semibold">Prefer to discuss a targeted gift?</h3>
          <p className="mt-2 text-[var(--midnight-blue)]/80">
            We can help you direct support to a site, faculty member, or research thrust.
          </p>
          <Link
            href="/about/leadership"
            className="mt-5 inline-block rounded-md border border-[var(--midnight-blue)]/10 px-4 py-2 font-semibold text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)]/10"
          >
            Contact BRAIN Center Leadership
          </Link>
        </div>
      </div>
    </section>
  );
}