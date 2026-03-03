import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import PeopleGrid from "@/app/components/PeopleGrid";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the BRAIN Center faculty driving neurotechnology research and innovation.",
};

const facultyPeople = people
  .filter((p) => p.group.includes("Faculty"))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function FacultyPage() {
  return (
    <div className="bg-white">
      <PageHeader eyebrow="Organization" title="Faculty" />
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-12 sm:py-16 lg:py-20">
        <PeopleGrid people={facultyPeople} variant="faculty" />
      </section>
    </div>
  );
}
