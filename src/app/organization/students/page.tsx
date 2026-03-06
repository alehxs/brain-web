import type { Metadata } from "next";
import PeopleGrid from "@/app/components/PeopleGrid";
import PageHeader from "@/app/components/PageHeader";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "Students",
  description:
    "Meet the students driving innovation and conducting research at the BRAIN Center.",
};

const studentPeople = people
  .filter((p) => p.group.includes("Student"))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function StudentsPage() {
  return (
    <div className="bg-white">
      <PageHeader eyebrow="Organization" title="Students" description="Graduate and undergraduate students conducting research across BRAIN Center partner institutions." />

      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-14">
        <PeopleGrid people={studentPeople} />
      </section>
    </div>
  );
}
