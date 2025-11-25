import type { Metadata } from "next";
import PublicationCard from "@/app/components/cards/PublicationCard";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications | The BRAIN Center",
  description: "Recent publications, inventions, and patents from the NSF BRAIN Center.",
};

export default function PublicationsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-[var(--midnight-blue)] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-3">
            Research Output
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
            Publications
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            IUCRC for Building Reliable Advances and Innovations in Neurotechnology (BRAIN) Publications, Inventions, and Patents.
          </p>
        </div>
      </div>

      {/* Publications List */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>
    </main>
  );
}