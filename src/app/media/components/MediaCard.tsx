import Image from "next/image";
import Link from "next/link";
import { MediaItem } from "./types";

export default function MediaCard({ item }: { item: MediaItem }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-[var(--midnight-blue)]/10 bg-white shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--light-slate)]">
        <Image
          src={item.thumbnail}
          alt={item.alt || item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[var(--midnight-blue)] group-hover:text-[var(--deep-teal)] transition">
          {item.title}
        </h3>

        {/* Optional tags (hidden, structure preserved) */}
        {item.tags && (
          <div className="hidden mt-3 flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-[var(--luminous-mint)]/30 text-[var(--deep-teal)] text-xs px-2 py-1 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}