// src/components/PortraitCard.tsx
import Image from "next/image";
import Link from "next/link";

export type PortraitCardProps = {
  name: string;
  role?: string;          // e.g., President, VP, etc.
  affiliation?: string;   // e.g., University / Department
  href: string;           // link to personal page
  src: string;            // image path (200x250 ideal)
  alt?: string;
  className?: string;
};

/**
 * Tall portrait card optimized for 200x250 (4:5) images.
 * Solid white card, dark text, equal-height layout.
 * Entire card is clickable.
 */
export default function PortraitCard({
  name,
  role,
  affiliation,
  href,
  src,
  alt,
  className = "",
}: PortraitCardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
      aria-label={`${name}${role ? ` – ${role}` : ""}`}
    >
      <div className="relative w-full overflow-hidden aspect-[4/5] max-w-[260px] mx-auto">
        <Image
          src={src}
          alt={alt ?? name}
          fill
          quality={90}
          className="object-cover object-top"
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 46vw, 92vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-[var(--midnight-blue,#0A192F)] line-clamp-2">
          {name}
        </h3>
        {role && <p className="text-xs text-gray-700">{role}</p>}
        {affiliation && (
          <p className="mt-1 text-xs text-gray-600 line-clamp-2">{affiliation}</p>
        )}
        <span className="mt-3 inline-block text-xs font-semibold text-[var(--deep-teal,#00A79D)] group-hover:underline">
          View profile →
        </span>
      </div>
    </Link>
  );
}
