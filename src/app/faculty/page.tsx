// src/app/faculty/page.tsx
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
        "block rounded-lg shadow-sm border border-neutral-200  transition-shadow hover:shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Cmp>
  );
}

type FacultyPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function FacultyPage(_props: FacultyPageProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Faculty</h1>
      <section className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {facultyList.map((person: Faculty) => (
          <CardRoot
            key={person.href ?? person.name}
            href={person.href}
            className="flex flex-col overflow-hidden bg-white"
          >
            {person.src && (
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={person.src}
                  alt={person.alt ?? person.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-3">
              <h2 className="text-sm font-semibold text-black line-clamp-2">
                {person.name}
              </h2>
              {person.subtitle && (
                <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
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