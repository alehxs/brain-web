// components/cards/NewsCard.tsx
import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";

export type NewsCardProps = {
  title: string;
  dateLabel: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  external?: boolean;
  as?: ElementType;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "4/5";
};

export function NewsCard({
  title,
  dateLabel,
  summary,
  imageSrc,
  imageAlt,
  href,
  external,
  as = "article",
  aspectRatio = "16/9",
}: NewsCardProps) {
  return (
    <Card
      as={as}
      href={href}
      external={external}
      className="h-full overflow-hidden border border-[#0A192F14] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <Card.Media ratio={aspectRatio}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </Card.Media>

      <Card.Body className="flex flex-col flex-1 border-t border-slate-100 bg-white px-4 py-4 text-black">
        <p className="text-xs text-slate-600 font-medium leading-snug">
          {dateLabel}
        </p>

        <Card.Title
          as="h3"
          className="mt-2 text-base font-semibold leading-snug text-[#0A192F] line-clamp-2 mb-3"
        >
          {title}
        </Card.Title>

        <div className="mt-auto flex justify-end">
          <span className="text-xs font-semibold text-[#00A79D] leading-snug group-hover:underline">
            Read more &rarr;
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;