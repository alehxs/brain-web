// components/news/NewsGrid.tsx
import { NewsCard, type NewsCardProps } from "../cards/NewsCard";

export type NewsGridItem = Omit<NewsCardProps, "as" | "aspectRatio"> & {
  id: string | number;
};

type NewsGridProps = {
  items: NewsGridItem[];
};

export function NewsGrid({ items }: NewsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </section>
  );
}

export default NewsGrid;