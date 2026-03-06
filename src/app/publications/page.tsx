import type { Metadata } from "next";
import PublicationCard from "@/app/components/cards/PublicationCard";
import { publications } from "@/data/publications";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Publications",
  description: "Recent publications, inventions, and patents from the BRAIN Center.",
};

export default function PublicationsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Impacts"
        title="Publications"
        description="Peer-reviewed publications, invention disclosures, and patents produced through BRAIN Center research across member institutions."
      />

      {/* Publications List */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 lg:py-16">
        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>
    </div>
  );
}