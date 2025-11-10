"use client";
import Image from "next/image";
import Link from "next/link";

type FacultyCardProps = {
  name: string;
  src: string;
  href?: string;
  alt?: string;
};

export default function FacultyCard({ name, src, href, alt }: FacultyCardProps) {
  const Card = (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/10 transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src}
          alt={alt ?? `${name} portrait`}
          fill
          sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:640px) 33vw, 90vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
          priority={false}
        />
      </div>

      {/* Scrim + label for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        {/* Gradient scrim */}
        <div className="h-28 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 w-full px-3 pb-3">
          <div className="w-full rounded-xl bg-black/60 px-3 py-2 backdrop-blur-sm ring-1 ring-white/20">
            <p className="line-clamp-2 text-white text-base sm:text-lg font-semibold leading-snug">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      aria-label={name}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 rounded-2xl"
    >
      {Card}
    </Link>
  ) : (
    Card
  );
}