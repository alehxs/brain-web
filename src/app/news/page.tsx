// app/news/page.tsx
import NewsGrid, {
  type NewsGridItem,
} from "../components/news/NewsGrid";
import { sortedNewsItems } from "@/data/news";
import PageHeader from "../components/PageHeader";

const newsForGrid: NewsGridItem[] = sortedNewsItems.map((n) => ({
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
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="News"
        description="Recent announcements, highlights, and stories from the BRAIN Center."
      />
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <NewsGrid items={newsForGrid} />
      </section>
    </main>
  );
}