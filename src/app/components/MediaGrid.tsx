// components/MediaGrid.tsx
import MediaCard, { type MediaCardProps } from "./cards/MediaCard";

export type MediaGridItem = MediaCardProps & { id: string | number };

type MediaGridProps = {
  items: MediaGridItem[];
};

export function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MediaCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MediaGrid;