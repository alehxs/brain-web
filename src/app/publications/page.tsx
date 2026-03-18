import type { Metadata } from "next";
import FilteredPublicationList from "@/app/components/FilteredPublicationList";
import { publications } from "@/data/publications";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Publications",
  description: "Recent publications, inventions, and patents from the BRAIN Center.",
  alternates: { canonical: "/publications" },
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
        <FilteredPublicationList publications={publications} />
      </section>
    </div>
  );
}