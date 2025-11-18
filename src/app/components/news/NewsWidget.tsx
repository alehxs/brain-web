// components/news/NewsWidget.tsx
import Link from "next/link";
import { sortedNewsItems } from "@/data/news";
import { NewsCard } from "../cards/NewsCard";

const MAX_ITEMS = 3;

export function NewsWidget() {
  const recent = sortedNewsItems.slice(0, MAX_ITEMS);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-12 pb-4">
      <header className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-[#0A192F]">Latest News</h2>
        <Link
          href="/news"
          className="text-sm font-semibold text-[#00A79D] hover:underline"
        >
          View all
        </Link>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recent.map((item) => (
          <NewsCard
            key={item.slug}
            title={item.title}
            dateLabel={item.dateLabel}
            summary={item.summary}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            href={`/news/${item.slug}`}
            external={false}
            aspectRatio="16/9"
          />
        ))}
      </div>
    </section>
  );
}

export default NewsWidget;