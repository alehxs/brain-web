import Card from "./primitives/Card";
import { type Institution, INSTITUTION_NAMES } from "@/data/people";

export type PublicationType = "journal" | "conference" | "preprint" | "book-chapter";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  citation: string; // Journal, Volume, Year
  year: number;
  type: PublicationType;
  href?: string; // DOI or PDF link — optional
  institution?: Institution[];
}

const TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  "book-chapter": "Book Chapter",
};

export default function PublicationCard({ publication }: { publication: Publication }) {
  const { title, authors, citation, type, href, institution } = publication;
  const hasLink = Boolean(href);

  const cardClasses = [
    "flex flex-col bg-white border border-slate-200 transition-colors",
    hasLink && "hover:border-[var(--deep-teal)]",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "text-base font-bold text-[var(--midnight-blue)] leading-snug mb-2 transition-colors",
    hasLink && "group-hover:text-[var(--deep-teal)]",
  ].filter(Boolean).join(" ");

  return (
    <Card href={href} external={hasLink} className={cardClasses}>
      <Card.Body className="flex-1 p-5 flex flex-col justify-start">

        {/* Top row: type badge + institution tags */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500">
            {TYPE_LABELS[type]}
          </span>
          {institution && institution.length > 0 && (
            <div className="flex items-center gap-1 shrink-0">
              {institution.map((id) => (
                <span
                  key={id}
                  title={INSTITUTION_NAMES[id]}
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500"
                >
                  {id}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <Card.Title className={titleClasses}>
          &ldquo;{title}&rdquo;
        </Card.Title>

        {/* Authors */}
        <p className="text-xs text-slate-500 mb-3 leading-relaxed">
          {authors}
        </p>

        {/* Footer: citation + link affordance */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-600 font-medium leading-snug">
            {citation}
          </span>
          {hasLink ? (
            <span className="text-xs font-semibold text-[var(--deep-teal)] shrink-0 flex items-center gap-1">
              DOI
              <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5l7-7M4 2.5h5.5V8" />
              </svg>
            </span>
          ) : (
            <span className="text-[10px] text-slate-400 shrink-0 italic">
              No DOI available
            </span>
          )}
        </div>

      </Card.Body>
    </Card>
  );
}
