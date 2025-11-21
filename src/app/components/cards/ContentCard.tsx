import Image from "next/image";
import Card from "./primitives/Card";
import type { ContentCardProps } from "./types";

export default function ContentCard({
  href, title, imageSrc, imageAlt = "", summary, meta, external,
}: ContentCardProps) {
  return (
    <Card href={href} external={external}>
      {imageSrc && (
        <Card.Media ratio="16/9">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Card.Media>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {meta && <Card.Meta>{meta}</Card.Meta>}
        {summary && <Card.Summary>{summary}</Card.Summary>}
        <span className="mt-3 inline-flex items-center gap-1 text-[var(--luminous-mint)]">
          Read more <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </Card.Body>
    </Card>
  );
}