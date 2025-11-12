"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SquareSlideshow({
  images,
  interval = 5000,
}: {
  images: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const next = () => setI((p) => (p + 1) % images.length);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Image
        key={images[i]}
        src={images[i]}
        alt="Student network activity"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 520px, 90vw"
        priority
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md border border-gray-300 bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 hover:bg-white"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-gray-300 bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 hover:bg-white"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}