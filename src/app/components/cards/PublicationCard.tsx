import Image from "next/image";
import Card from "./primitives/Card";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  citation: string; // Journal, Volume, Year
  imageSrc?: string;
  href?: string; // Link to DOI or PDF (Optional)
}

export default function PublicationCard({ publication }: { publication: Publication }) {
  const { title, authors, citation, imageSrc, href } = publication;
  const hasLink = Boolean(href);

  const cardClasses = [
    "flex",
    "flex-col",
    "md:flex-row",
    "bg-white",
    "border",
    "border-slate-200",
    "transition-colors",
    hasLink && "hover:border-[var(--deep-teal)]",
  ].filter(Boolean).join(" ");

  const imageClasses = [
    "object-cover",
    "transition-transform",
    "duration-500",
    hasLink && "group-hover:scale-105",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "text-lg",
    "md:text-xl",
    "text-[var(--midnight-blue)]",
    "font-bold",
    "leading-tight",
    "mb-2",
    "transition-colors",
    hasLink && "group-hover:text-[var(--deep-teal)]",
  ].filter(Boolean).join(" ");

  return (
    <Card
      href={href}
      external={hasLink} // Open external links in new tab
      // Flex layout: Stack on mobile, Row on desktop
      className={cardClasses}
    >
      {/* 1. Conditional Image: Only render if imageSrc is provided */}
      {imageSrc && (
        <Card.Media
          // Fixed width on desktop (w-48), full width on mobile
          className="w-full md:w-56 shrink-0 bg-slate-100"
          ratio="4/3" // Aspect ratio mainly for mobile, on desktop we constrain width
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={imageClasses}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </Card.Media>
      )}

      {/* 2. Content Body */}
      <Card.Body className="flex-1 p-6 flex flex-col justify-center">
        {/* Title */}
        <Card.Title className={titleClasses}>
          &ldquo;{title}&rdquo;
        </Card.Title>

        {/* Authors */}
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          {authors}
        </p>

        {/* Citation / Metadata */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--deep-teal)]">
            Published
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {citation}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}