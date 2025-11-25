import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";

export const metadata: Metadata = {
  title: "Leadership | NSF BRAIN",
  description:
    "Meet the leadership team driving innovation and guiding the BRAIN Center's research direction.",
};

type Person = {
  name: string;
  role: string;
  university?: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

const directors: Person[] = [
  {
    name: "Jose Luis Contreras-Vidal",
    role: "Center Director",
    university: "University of Houston",
    imageSrc: "/images/people/jose-luis-contreras-vidal.jpg",
    imageAlt: "Dr. Jose Luis Contreras-Vidal",
  },
  {
    name: "Marco Santello",
    role: "Site Director",
    university: "Arizona State University",
    imageSrc: "/images/people/marco-santello.jpg",
    imageAlt: " Marco Santello",
  },
  {
    name: "Peter Konrad",
    role: "Site Director",
    university: "West Virginia University",
    imageSrc: "/images/people/peter-konrad.jpg",
    imageAlt: "Peter Konrad",
  },
  {
    name: "Thibault Duchemin",
    role: "Site Director",
    university: "Georgia Tech",
    imageSrc: "/images/people/thibault-duchemin.jpg",
    imageAlt: "Thibault Duchemin",
  },
  {
    name: "Justin Sanchez",
    role: "Site Director",
    university: "Battelle / LIFE",
    imageSrc: "/images/people/justin-sanchez.jpg",
    imageAlt: "Justin Sanchez",
  },
];

const coInvestigators: Person[] = [
  {
    name: "Gerard Francisco",
    role: "Co-Director",
    university: "TIRR Memorial Hermann",
    imageSrc: "/images/people/gerard-francisco.jpg",
    imageAlt: "Gerard Francisco",
  },
  {
    name: "Zachary Danziger",
    role: "Co-Investigator",
    university: "Florida International University",
    imageSrc: "/images/people/zachary-danziger.jpg",
    imageAlt: "Zachary Danziger",
  },
  {
    name: "James Sulzer",
    role: "Co-Investigator",
    university: "MetroHealth",
    imageSrc: "/images/people/james-sulzer.jpg",
    imageAlt: "James Sulzer",
  },
  {
    name: "Luca Pollonini",
    role: "Co-Investigator",
    university: "University of Houston",
    imageSrc: "/images/people/luca-pollonini.jpg",
    imageAlt: "Luca Pollonini",
  },
  {
    name: "Saurabh Prasad",
    role: "Co-Investigator",
    university: "University of Houston",
    imageSrc: "/images/people/saurabh-prasad.jpg",
    imageAlt: "Saurabh Prasad",
  },
];

const staff: Person[] = [
  {
    name: "Maria Gonzalez",
    role: "Center Manager",
    imageSrc: "/images/people/maria-gonzalez.jpg",
    imageAlt: "Maria Gonzalez",
  },
  {
    name: "Juan Rodriguez",
    role: "Research Coordinator",
    imageSrc: "/images/people/juan-rodriguez.jpg",
    imageAlt: "Juan Rodriguez",
  },
  {
    name: "Alex Smith",
    role: "Technical Lead",
    imageSrc: "/images/people/alex-smith.jpg",
    imageAlt: "Alex Smith",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      <section className="bg-[var(--light-slate)] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep-teal)]">
            Organization
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
            Leadership
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800">
            Meet the directors, investigators, and staff driving innovation and guiding
            the BRAIN Center&apos;s research direction.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Center Directors
            </h2>
            <PersonGrid people={directors} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Co-Investigators
            </h2>
            <PersonGrid people={coInvestigators} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
              Staff
            </h2>
            <PersonGrid people={staff} />
          </section>
        </div>
      </section>
    </main>
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

          <div className="p-4 flex flex-col justify-center flex-1 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight mb-1">
              {person.name}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2">
              {person.role}
            </p>
            {person.university && (
              <p className="text-[10px] text-slate-500 leading-snug mt-1 line-clamp-1">
                {person.university}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}