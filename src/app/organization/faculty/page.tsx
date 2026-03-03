import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";
import PageHeader from "@/app/components/PageHeader";

import { people, INSTITUTION_NAMES } from "../../../data/people";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the BRAIN Center faculty driving neurotechnology research and innovation.",
};

type FacultyMember = {
  name: string;
  role: string;
  university?: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

const facultyList: FacultyMember[] = people
  .filter((person) => person.group.includes("Faculty"))
  .map((person) => ({
    name: person.name,
    role: person.tags[0] || "",
    university: person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined,
    imageSrc: person.src,
    imageAlt: person.name,
    href: person.href,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function FacultyPage() {
  return (
    <div className="bg-white">
      <PageHeader eyebrow="Organization" title="Faculty" />

      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {facultyList.map((faculty) => (
            <Card
              key={faculty.name}
              href={faculty.href}
              external={false}
              className="group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-lg bg-slate-100">
                {faculty.imageSrc ? (
                  <Image
                    src={faculty.imageSrc}
                    alt={faculty.imageAlt || faculty.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-slate-200">
                    <svg
                      className="w-16 h-16 text-slate-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                  {faculty.name}
                </h3>
                {faculty.role && (
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {faculty.role}
                  </p>
                )}
                {faculty.university && (
                  <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-2">
                    {faculty.university}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
