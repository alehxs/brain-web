import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";

export type EventCardProps = {
  title: string;
  dateLabel: string;
  location: string;
  imageSrc?: string; // Made optional to handle the fallback logic easily
  imageAlt?: string;
  href?: string;
  external?: boolean;
  as?: ElementType;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "4/5";
};

export function EventCard({
  title,
  dateLabel,
  location,
  imageSrc,
  imageAlt,
  href,
  external,
  as = "article",
  aspectRatio = "4/3",
}: EventCardProps) {
  
  // Logic: Check if we have a real image. If not, use the fallback.
  const hasImage = Boolean(imageSrc);
  const finalSrc = hasImage ? imageSrc! : "/logos/brain.png"; // Assumes brain.png is in public/
  const finalAlt = hasImage ? imageAlt || title : "BRAIN Center Logo";

  return (
    <Card
      as={as}
      href={href}
      external={external}
      className="h-full overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Media Container:
        - If it's a photo (hasImage), use standard gray background for loading.
        - If it's the placeholder (!hasImage), use Midnight Blue brand color.
      */}
      <Card.Media 
        ratio={aspectRatio} 
        className={hasImage ? "bg-slate-100" : "bg-[var(--midnight-blue)]"}
      >
        <Image
          src={finalSrc}
          alt={finalAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={hasImage ? "object-cover" : "object-contain p-8 opacity-80"} 
        />
      </Card.Media>

      <Card.Body className="border-t border-[var(--deep-teal)]/20 bg-white px-4 py-4 text-black">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--deep-teal)]">
          {dateLabel}
        </p>

        <Card.Title
          as="h3"
          className="mt-1 text-base font-semibold leading-snug text-[var(--midnight-blue)] line-clamp-2"
        >
          {title}
        </Card.Title>

        <p className="mt-2 text-sm text-slate-500 line-clamp-1">
          {location}
        </p>
      </Card.Body>
    </Card>
  );
}

export default EventCard;