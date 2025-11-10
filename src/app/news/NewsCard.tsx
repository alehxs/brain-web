import Image from "next/image";
import Link from "next/link";

export type NewsCardProps = {
  title: string;
  src: string;
  href: string;
  alt?: string;
  date?: string;
}

export default function NewsCard({ title, src, href, alt, date }: NewsCardProps) {
  return (
    <Link
      href={href}
      aria-label={title}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--luminous-mint)] rounded-2xl"
    >
      <article className="overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white">
        {/* Image (top) */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={src}
            alt={alt ?? title}
            fill
            sizes="(min-width:1280px) 400px, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
            priority={false}
          />
        </div>

        {/* Title panel (bottom) */}
        <div className="p-4">
          {date ? (
            <time className="block text-xs text-neutral-500 mb-1" aria-label="Published date">
              {date}
            </time>
          ) : null}
          <h3 className="text-[var(--midnight-blue)] font-semibold leading-snug">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
