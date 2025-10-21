import { MEDIA_ITEMS } from "./data";
import MediaCard from "./MediaCard";

export function MediaGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {MEDIA_ITEMS.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}