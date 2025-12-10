
import React from "react";

interface PageHeaderProps {
  title: string;
  description: React.ReactNode; // ReactNode allows passing strings or JSX (like bold text or links)
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-[var(--light-slate)] border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800 leading-relaxed">
          {description}
        </div>
      </div>
    </section>
  );
}