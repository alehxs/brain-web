// components/cards/EventCard.tsx
import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";

export type EventCardProps = {
  title: string;
  dateLabel: string;  // e.g. "Thu, Dec 5, 10:00 AM"
  location: string;   // e.g. "University of Houston • Houston, TX"
  imageSrc: string;
  imageAlt: string;
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
  return (
    <Card
      as={as}
      href={href}
      external={external}
      className="h-full overflow-hidden border border-[#0A192F14] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Image on top */}
      <Card.Media ratio={aspectRatio}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </Card.Media>

      {/* Text box */}
      <Card.Body className="border-t border-[#00A79D33] bg-white px-4 py-4 text-black">
        {/* Date / time — teal accent */}
        <p className="text-xs font-semibold uppercase tracking-wide text-[#00A79D]">
          {dateLabel}
        </p>

        {/* Title — strong, readable */}
        <Card.Title
          as="h3"
          className="mt-1 text-base font-semibold leading-snug text-[#0A192F] line-clamp-2"
        >
          {title}
        </Card.Title>

        {/* Location — slate gray */}
        <p className="mt-2 text-sm text-[#8892B0]">
          {location}
        </p>
      </Card.Body>
    </Card>
  );
}

export default EventCard;