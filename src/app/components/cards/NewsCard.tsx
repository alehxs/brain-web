// components/cards/NewsCard.tsx
import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";

export type NewsCardProps = {
  title: string;
  dateLabel: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  as?: ElementType;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "4/5";
};

const FALLBACK_SRC = "/logos/brain.png";

export function NewsCard({
  title,
  dateLabel,
  imageSrc,
  imageAlt,
  href,
  as = "article",
  aspectRatio = "16/9",
}: NewsCardProps) {
  const hasImage = imageSrc !== FALLBACK_SRC;

  return (
    <Card
      as={as}
      href={href}
      external={!!href}
      className="h-full overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <Card.Media ratio={aspectRatio} className={hasImage ? "bg-slate-100" : "bg-[var(--midnight-blue)]"}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={hasImage ? "object-cover" : "object-contain p-8 opacity-80"}
        />
      </Card.Media>

      <Card.Body className="flex flex-col flex-1 border-t border-slate-100 bg-white px-4 py-4 text-black">
        <p className="text-xs text-slate-600 font-medium leading-snug">
          {dateLabel}
        </p>

        <Card.Title
          as="h3"
          className="mt-2 text-base font-semibold leading-snug text-[var(--midnight-blue)] line-clamp-2 mb-3"
        >
          {title}
        </Card.Title>

        {href && (
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--deep-teal)] leading-snug">
              Read more <span className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default NewsCard;