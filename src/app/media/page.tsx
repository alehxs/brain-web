
import { MediaGrid } from "./components/MediaGrid";

export default function MediaPage() {
  return (
    <main className="w-full bg-[var(--surface-light)]">
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--midnight-blue)] mb-6">
            BRAIN Media
          </h1>

          {/* Filter/Search goes here in Phase 2 */}

          <MediaGrid />
        </div>
      </section>
    </main>
  );
}