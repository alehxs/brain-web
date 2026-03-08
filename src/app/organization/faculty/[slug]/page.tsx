import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProfileBySlug, getAllFacultyProfileSlugs } from "@/lib/faculty-profile";
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

// Shared contact block — rendered twice (desktop under portrait, mobile after CTAs)
function ContactBlock({ contact }: { contact: NonNullable<ReturnType<typeof getProfileBySlug>>["frontmatter"]["contact"] }) {
  if (!contact) return null;
  return (
    <dl className="space-y-3 text-sm">
      {contact.email && (
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`} className="text-[var(--deep-teal)] hover:underline break-all">
              {contact.email}
            </a>
          </dd>
        </div>
      )}
      {contact.office && (
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Office</dt>
          <dd className="text-slate-600 leading-relaxed">{contact.office}</dd>
        </div>
      )}
      {contact.phone && (
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Phone</dt>
          <dd className="text-slate-600">{contact.phone}</dd>
        </div>
      )}
    </dl>
  );
}

export default async function FacultyProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) notFound();

  const { person, frontmatter, contentHtml } = profile;
  const institutionKey = person.affiliation[0];
  const institution = institutionKey ? INSTITUTION_NAMES[institutionKey] : null;

  return (
    <div className="bg-white">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-24">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-teal)] mb-8">
            Faculty
            {institution && <span className="text-slate-500"> · {institution}</span>}
          </p>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* Portrait — centered on mobile */}
            <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-start gap-5">
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-md bg-slate-100">
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
                  <div className="flex items-center justify-center w-full h-full">
                    <svg className="w-20 h-20 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Contact — desktop only (below portrait) */}
              <div className="hidden md:block w-56">
                <ContactBlock contact={frontmatter.contact} />
              </div>
            </div>

            {/* Name + credentials + CTAs */}
            <div className="flex-1 min-w-0 w-full">

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--midnight-blue)] leading-tight mb-3">
                {person.name}
              </h1>

              {frontmatter.title && (
                <p className="text-xl font-medium text-slate-700 leading-snug mb-1">
                  {frontmatter.title}
                </p>
              )}

              {frontmatter.department && (
                <p className="text-base text-slate-600 mb-4">
                  {frontmatter.department}
                </p>
              )}

              {frontmatter.honors && frontmatter.honors.length > 0 && (
                <p className="text-sm text-slate-500 mb-6">
                  {frontmatter.honors.join(" · ")}
                </p>
              )}

              {frontmatter.leadership && frontmatter.leadership.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    Leadership
                  </p>
                  <ul className="space-y-1">
                    {frontmatter.leadership.map((role) => (
                      <li key={role} className="text-sm text-slate-700 flex gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fallback: legacy flat positions */}
              {!frontmatter.title && frontmatter.positions && frontmatter.positions.length > 0 && (
                <div className="mb-8 space-y-1.5">
                  {frontmatter.positions.map((pos, i) => (
                    <p key={pos} className={i === 0 ? "text-xl font-light text-slate-700" : "text-sm text-slate-500"}>
                      {pos}
                    </p>
                  ))}
                </div>
              )}

              {/* CTAs — stacked full-width on mobile, inline on desktop */}
              {frontmatter.links && frontmatter.links.length > 0 && (
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {frontmatter.links.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        i === 0
                          ? "inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium bg-[var(--midnight-blue)] text-white hover:bg-slate-800 transition-colors sm:w-auto"
                          : "inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-800 transition-colors sm:w-auto"
                      }
                    >
                      {link.label}
                      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {/* Mirror hero's [portrait | name] columns for grid alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-[14rem_2fr_1fr] gap-x-16 gap-y-14">

            {/* Spacer — matches portrait width, desktop only */}
            <div className="hidden lg:block" />

            {/* Biography */}
            {contentHtml && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-7">
                  Biography
                </p>
                <div
                  className="prose prose-slate prose-base max-w-prose [&_p]:leading-relaxed [&_p]:mb-6"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
            )}

            {/* Research Interests */}
            {frontmatter.researchInterests && frontmatter.researchInterests.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-7">
                  Research Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {frontmatter.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-900 text-sm leading-tight hover:bg-teal-100 transition-colors"
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
