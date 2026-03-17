import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProfileBySlug, getAllFacultyProfileSlugs, type FacultyFrontmatter } from "@/lib/faculty-profile";
import { INSTITUTION_NAMES } from "@/data/people";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllFacultyProfileSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) return {};
  return {
    title: profile.person.name,
    description: profile.frontmatter.title ?? profile.frontmatter.positions?.[0],
  };
}

// ── Small reusable atoms ──────────────────────────────────────────────────────

function ExternalArrow() {
  return (
    <svg
      className="w-3 h-3 opacity-60 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

// Contact info block — rendered below portrait on desktop, after CTAs on mobile
function ContactBlock({ contact }: { contact: FacultyFrontmatter["contact"] }) {
  if (!contact) return null;
  return (
    <dl className="space-y-4 text-sm">
      {contact.email && (
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
            Email
          </dt>
          <dd>
            <a
              href={`mailto:${contact.email}`}
              className="text-[var(--deep-teal)] hover:underline break-all"
            >
              {contact.email}
            </a>
          </dd>
        </div>
      )}
      {contact.office && (
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
            Office
          </dt>
          <dd className="text-slate-600 leading-relaxed">{contact.office}</dd>
        </div>
      )}
      {contact.phone && (
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
            Phone
          </dt>
          <dd className="text-slate-600">{contact.phone}</dd>
        </div>
      )}
    </dl>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FacultyProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) notFound();

  const { person, frontmatter, contentHtml } = profile;
  const institutionKey = person.affiliation[0];
  const institution = institutionKey ? INSTITUTION_NAMES[institutionKey] : null;

  return (
    <div className="bg-white">

      {/* ── Hero band ────────────────────────────────────────────────────── */}
      {/*
        Gradient: light-slate (#E6FAF8) fading to white — same cool teal tint
        used for PageHeader. Feels alive without being loud.
      */}
      <section
        className="border-b border-slate-200"
        style={{ background: "linear-gradient(160deg, var(--light-slate) 0%, #ffffff 65%)" }}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <Link
                  href="/organization/faculty"
                  className="text-[var(--deep-teal)] hover:underline transition-colors"
                >
                  Faculty
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">›</li>
              <li>
                <span className="text-slate-700">{person.name}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

            {/* ── Portrait column ─────────────────────────────────────── */}
            <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-start gap-6">

              {/* Photo */}
              <div className="relative">
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-lg bg-slate-100 ring-1 ring-slate-200">
                  {person.src ? (
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      sizes="224px"
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-slate-200">
                      <svg
                        className="w-20 h-20 text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact — desktop only (below portrait) */}
              <div className="hidden md:block w-56 pt-1">
                <ContactBlock contact={frontmatter.contact} />
              </div>
            </div>

            {/* ── Name + credentials + CTAs ───────────────────────────── */}
            <div className="flex-1 min-w-0 w-full">

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--midnight-blue)] leading-tight mb-3">
                {person.name}
              </h1>

              {/* Primary title */}
              {frontmatter.title && (
                <p className="text-lg font-medium text-slate-700 leading-snug mb-1">
                  {frontmatter.title}
                </p>
              )}

              {/* Department */}
              {frontmatter.department ? (
                <p className="text-base text-slate-500 mb-5">
                  {frontmatter.department}
                </p>
              ) : institution ? (
                <p className="text-base text-slate-500 mb-5">{institution}</p>
              ) : null}

              {/* Honors — plain text, comma-separated */}
              {frontmatter.honors && frontmatter.honors.length > 0 && (
                <p className="text-sm text-slate-500 mb-5">
                  {frontmatter.honors.join(" · ")}
                </p>
              )}

              {/* Leadership roles */}
              {frontmatter.leadership && frontmatter.leadership.length > 0 && (
                <div className="mb-7">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Leadership
                  </p>
                  <ul className="space-y-1.5">
                    {frontmatter.leadership.map((role) => (
                      <li key={role} className="flex items-start gap-2 text-sm text-slate-700">
                        <span
                          className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--deep-teal)] flex-shrink-0"
                          aria-hidden="true"
                        />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fallback: legacy flat positions */}
              {!frontmatter.title && frontmatter.positions && frontmatter.positions.length > 0 && (
                <div className="mb-7 space-y-1.5">
                  {frontmatter.positions.map((pos, i) => (
                    <p
                      key={pos}
                      className={
                        i === 0 ? "text-xl font-light text-slate-700" : "text-sm text-slate-500"
                      }
                    >
                      {pos}
                    </p>
                  ))}
                </div>
              )}

              {/* CTA links — primary uses deep-teal, secondary uses outline */}
              {frontmatter.links && frontmatter.links.length > 0 && (
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-2">
                  {frontmatter.links.map((link, i) => (
                    <a
                      key={`${link.href}-${i}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        i === 0
                          ? "inline-flex justify-center items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--deep-teal)] text-white hover:bg-[var(--cta-hover)] transition-colors shadow-sm sm:w-auto"
                          : "inline-flex justify-center items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium border border-slate-300 text-slate-600 hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)] transition-colors sm:w-auto"
                      }
                    >
                      {link.label}
                      <ExternalArrow />
                    </a>
                  ))}
                </div>
              )}

              {/* Contact — mobile only (after CTAs) */}
              <div className="md:hidden mt-8">
                <ContactBlock contact={frontmatter.contact} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content body ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {/*
            Three-column grid mirrors the hero layout:
              col-1 = spacer (matches portrait width)
              col-2 = biography prose
              col-3 = research interests sidebar
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[14rem_2fr_1fr] gap-x-16 gap-y-14">

            {/* Spacer — desktop only, aligns content under portrait */}
            <div className="hidden lg:block" />

            {/* Biography */}
            {contentHtml && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-6">
                  Biography
                </p>
                {/*
                  Safe: contentHtml is produced at build time by marked.parse() from
                  repository-committed MDX files — not user input. If this ever changes
                  to pull content at request time from a CMS or user-supplied source,
                  sanitize with DOMPurify before passing to dangerouslySetInnerHTML.
                */}
                <div
                  className="prose prose-slate prose-base max-w-prose [&_p]:leading-relaxed [&_p]:mb-5 [&_a]:text-[var(--deep-teal)] [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
            )}

            {/* Research Interests */}
            {frontmatter.researchInterests && frontmatter.researchInterests.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-6">
                  Research Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {frontmatter.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-900 text-sm leading-snug border border-teal-100"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
