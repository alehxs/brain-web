import type { Metadata } from "next";
import ProjectCard from "../../components/projects/ProjectCard";
import { pastProjectsByYear } from "@/data/projects";

export const metadata: Metadata = {
  title: "Past Projects | The BRAIN Center",
  description:
    "Archive of previously funded research projects at the NSF BRAIN Center.",
};

export default function PastProjectsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Past Projects
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            Completed projects that have contributed to the development of
            neurotechnologies and regulatory science through the BRAIN Center.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            To see ongoing work,{" "}
            <a
              href="/research/current-projects"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              view current projects
            </a>
            .
          </p>
        </header>

        <div className="space-y-10">
          {pastProjectsByYear.map(({ year, projects }) => (
            <section key={year} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                {year} Projects
              </h2>

              {projects.length === 0 ? (
                <p className="text-sm text-slate-600">
                  No projects have been added for this year yet.
                </p>
              ) : (
                <div className="space-y-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}