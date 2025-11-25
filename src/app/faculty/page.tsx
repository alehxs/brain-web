import Image from "next/image";
import type {
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";
import { facultyList, Faculty } from "./data";

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

export default function FacultyPage() {
  return (
    // Standard Layout: No dark hero, just clean spacing matching other pages
    <main className="bg-slate-50 min-h-screen mx-auto max-w-6xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--midnight-blue)] tracking-tight mb-8">
        Faculty
      </h1>
      
      <section className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {facultyList.map((person: Faculty) => (
          <CardRoot
            key={person.href ?? person.name}
            href={person.href}
            className="flex flex-col overflow-hidden"
          >
            {person.src ? (
              <div className="relative w-full aspect-[4/5] bg-white">
                <Image
                  src={person.src}
                  alt={person.alt ?? person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[4/5] bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                  No Photo
                </span>
              </div>
            )}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-sm font-bold text-[var(--midnight-blue)] line-clamp-2 leading-tight group-hover:text-[var(--deep-teal)] transition-colors">
                {person.name}
              </h2>
              {person.subtitle && (
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-medium">
                  {person.subtitle}
                </p>
              )}
            </div>
          </CardRoot>
        ))}
      </section>
    </main>
  );
}