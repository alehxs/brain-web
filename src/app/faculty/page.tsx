import Image from "next/image";
import type {
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";
import { people, type Person } from "../../data/people";

type BaseCardProps<E extends ElementType = "article"> = {
  as?: E;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<E>,
  "as" | "children" | "className" | "href" | "target" | "rel"
>;

export function CardRoot<E extends ElementType = "article">({
  as = "article" as E,
  href,
  external,
  className = "",
  children,
  ...rest
}: BaseCardProps<E>) {
  const Cmp = href ? "a" : as;
  const attrs = href
    ? {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
    }
    : {};

  return (
    <Cmp
      {...attrs}
      {...rest}
      className={[
        "block rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md group",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Cmp>
  );
}

const facultyMembers = people
  .filter((person) => person.group.includes("Faculty"))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function FacultyPage() {
  return (
    // Standard Layout: No dark hero, just clean spacing matching other pages
    <main className="bg-white min-h-screen mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep-teal)]">
        Organization
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[var(--midnight-blue)] tracking-tight mb-8">
        Faculty
      </h1>

      <section className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {facultyMembers.map((person: Person) => (
          <CardRoot
            key={person.href ?? person.name}
            href={person.href}
            className="flex flex-col overflow-hidden"
          >
            {person.src ? (
              <div className="relative w-full aspect-[4/5] bg-white">
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[4/5] bg-slate-100 flex items-center justify-center text-slate-300">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            )}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-sm font-bold text-[var(--midnight-blue)] line-clamp-2 leading-tight group-hover:text-[var(--deep-teal)] transition-colors">
                {person.name}
              </h2>
              {person.tags[0] && (
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-medium">
                  {person.tags[0]}
                </p>
              )}
            </div>
          </CardRoot>
        ))}
      </section>
    </main>
  );
}