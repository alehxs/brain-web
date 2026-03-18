// components/news/NewsWidget.tsx
import { sortedNewsItems } from "@/data/news";
import { sortedMediaItems } from "@/data/media";
import { NewsCard } from "../cards/NewsCard";
import { MediaCard } from "../cards/MediaCard";

const MAX_ITEMS = 3;

type FeedEntry =
  | { type: "news"; item: (typeof sortedNewsItems)[number] }
  | { type: "media"; item: (typeof sortedMediaItems)[number] };

const feed: FeedEntry[] = [
  ...sortedNewsItems.map((item) => ({ type: "news" as const, item })),
  ...sortedMediaItems.map((item) => ({ type: "media" as const, item })),
].sort((a, b) => new Date(b.item.date).getTime() - new Date(a.item.date).getTime());

const recent = feed.slice(0, MAX_ITEMS);

export function NewsWidget() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-4 sm:px-8">
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-[var(--midnight-blue)]">Latest News & Media</h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recent.map((entry) => {
          if (entry.type === "news") {
            const item = entry.item;
            return (
              <NewsCard
                key={`news-${item.slug}`}
                title={item.title}
                dateLabel={item.dateLabel}
                summary={item.summary}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                href={item.href}
                external={!!item.href}
                aspectRatio="16/9"
              />
            );
          }

          const item = entry.item;
          return (
            <MediaCard
              key={`media-${item.id}`}
              title={item.title}
              dateLabel={item.dateLabel}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              href={item.href}
              external={item.external}
              aspectRatio="16/9"
            />
          );
        })}
      </div>
    </section>
  );
}

export default NewsWidget;
