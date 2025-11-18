// components/cards/MediaCard.tsx
import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";

export type MediaCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  external?: boolean;
  as?: ElementType;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "5/6";
};

export function MediaCard({
  title,
  imageSrc,
  imageAlt,
  href,
  external,
  as = "article",
  aspectRatio = "5/6",
}: MediaCardProps) {
  return (
    <Card as={as} href={href} external={external} className="h-full">
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

      {/* Compact text box below image */}
      <Card.Body className="bg-white px-4 py-4 text-black">
        <Card.Title
          as="h3"
          className="mt-1 text-base font-semibold leading-snug line-clamp-3"
        >
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;