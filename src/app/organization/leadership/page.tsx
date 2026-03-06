import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";
import PageHeader from "@/app/components/PageHeader";

import { people, INSTITUTION_NAMES } from "../../../data/people";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team driving innovation and guiding the BRAIN Center's research direction.",
  alternates: { canonical: "/organization/leadership" },
};

type Person = {
  name: string;
  role: string;
  university?: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

const leadership: Person[] = people
  .filter((person) => person.group.includes("Leadership"))
  .map((person) => ({
    name: person.name,
    role: person.tags[0] || "",
    university: person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined,
    imageSrc: person.src,
    imageAlt: person.name,
    href: person.href,
  }));

const coInvestigators: Person[] = people
  .filter((person) =>
    person.group.includes("Associate Professor") ||
    person.group.includes("Professor")
  )
  .map((person) => ({
    name: person.name,
    role: person.tags[0] || "",
    university: person.affiliation[0] ? INSTITUTION_NAMES[person.affiliation[0]] : undefined,
    imageSrc: person.src,
    imageAlt: person.name,
    href: person.href,
  }));


export default function LeadershipPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Organization"
        title="Leadership"
        description="Meet the directors, investigators, and staff leading the BRAIN Center across its partner institutions."
      />

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Center Directors
            </h2>
            <PersonGrid people={leadership} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Co-Investigators
            </h2>
            <PersonGrid people={coInvestigators} />
          </section>

        </div>
      </section>
    </div>
  );
}

function PersonGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {people.map((person) => (
        <Card
          key={person.name}
          href={person.href}
          className="flex flex-col overflow-hidden bg-white h-full border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
        >
          {person.imageSrc ? (
            <div className="relative w-full aspect-[4/5] bg-slate-100">
              <Image
                src={person.imageSrc}
                alt={person.imageAlt || person.name}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-[4/5] bg-slate-100 flex items-center justify-center text-slate-300">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          )}

          <div className="p-4 flex flex-col justify-start flex-1 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight mb-1">
              {person.name}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2">
              {person.role}
            </p>
            {person.university && (
              <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-2">
                {person.university}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}