import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career opportunities at the The BRAIN Center and partner institutions.",
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Organization"
        title="Careers"
        description="Information about career opportunities will be available here soon."
      />
    </div>
  );
}
