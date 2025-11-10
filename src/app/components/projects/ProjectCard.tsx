// src/components/projects/ProjectCard.tsx
import React from "react";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  leaders: string;
  year?: number;
  imageSrc?: string;
  imageAlt?: string;
  href?: string; // if present, card becomes clickable
};

export default function ProjectCard({
  title,
  leaders,
  year,
  imageSrc,
  imageAlt,
  href,
}: ProjectCardProps) {
  const content = (
    <article className="flex h-full items-stretch gap-4">
      {/* Optional square image on the left */}
      {imageSrc && (
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-20 sm:w-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt ?? ""}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs text-slate-700 sm:text-sm">
          <span className="font-semibold text-slate-900">Project Leaders:</span>{" "}
          {leaders}
        </p>
        {year && (
          <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
            Funded in {year}
          </p>
        )}

        {/* Only show “View details →” if this project has a link */}
        {href && (
          <div className="mt-3 inline-flex items-center text-xs font-medium text-teal-700">
            <span>View details</span>
            <span
              aria-hidden="true"
              className="ml-1 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        )}
      </div>
    </article>
  );

  const baseClasses =
    "group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
  const linkedClasses = href
    ? " cursor-pointer hover:border-teal-500"
    : " cursor-default";

  // If href exists, wrap in <Link>; otherwise just a div
  if (href) {
    return (
      <Link href={href} className={baseClasses + linkedClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses + linkedClasses}>{content}</div>;
}