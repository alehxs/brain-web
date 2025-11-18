// app/news/page.tsx
import NewsGrid, {
  type NewsGridItem,
} from "../components/news/NewsGrid";
import { sortedNewsItems } from "@/data/news";

const newsForGrid: NewsGridItem[] = sortedNewsItems.map((n, index) => ({
  id: n.slug,
  title: n.title,
  dateLabel: n.dateLabel,
  summary: n.summary,
  imageSrc: n.imageSrc,
  imageAlt: n.imageAlt,
  href: `/news/${n.slug}`,
  external: false,
}));

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black">News</h1>
        <p className="mt-2 text-sm text-black/70">
          Recent announcements, highlights, and stories from the BRAIN Center.
        </p>
      </header>

      <NewsGrid items={newsForGrid} />
    </main>
  );
}