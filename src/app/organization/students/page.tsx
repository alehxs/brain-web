import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/cards/primitives/Card";

import { people } from "../../../data/people";
import { sites } from "../../../data/sites";

export const metadata: Metadata = {
    title: "Students | NSF BRAIN",
    description:
        "Meet the students driving innovation and conducting research at the BRAIN Center.",
};

type Person = {
    name: string;
    role: string;
    university?: string;
    imageSrc: string;
    imageAlt?: string;
    href?: string;
};

function getUniversityName(identifier: string): string | undefined {
    const site = sites.find(
        (s) =>
            s.id === identifier.toLowerCase() ||
            s.abbreviation === identifier ||
            s.name === identifier
    );
    return site?.name;
}

const students: Person[] = people
    .filter((person) => person.group.includes("Student"))
    .map((person) => ({
        name: person.name,
        role: person.tags[0] || "",
        university: person.tags[1] ? getUniversityName(person.tags[1]) : undefined,
        imageSrc: person.src,
        imageAlt: person.name,
        href: person.href,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

export default function StudentsPage() {
    return (
        <div className="bg-white">
            <section className="bg-[var(--light-slate)] border-b border-slate-200">
                <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep-teal)]">
                        Organization
                    </p>
                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
                        Students
                    </h1>
                    <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800">
                        Meet the students driving innovation and conducting research at the BRAIN Center.
                    </p>
                </div>
            </section>

            <section className="py-10 sm:py-12 lg:py-14">
                <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
                    <section>
                        <PersonGrid people={students} />
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

                    <div className="p-4 flex flex-col justify-center flex-1 border-t border-slate-100">
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
