import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { people, type Person } from "@/data/people";
import { toSlug } from "@/lib/slug";

const CONTENT_DIR = path.join(process.cwd(), "src/content/faculty");

export type FacultyFrontmatter = {
  /** Primary academic title, e.g. "Distinguished Professor of ECE" */
  title?: string;
  /** Department and institution line, e.g. "Dept. of ECE, University of Houston" */
  department?: string;
  /** Honors/fellowships shown as a muted single line */
  honors?: string[];
  /** Directorship / leadership roles — grouped to avoid repeated "Director" noise */
  leadership?: string[];
  /** Fallback flat list (legacy / simple profiles) */
  positions?: string[];
  researchInterests?: string[];
  links?: { label: string; href: string }[];
  contact?: { email?: string; office?: string; phone?: string };
};

export type FacultyProfile = {
  person: Person;
  frontmatter: FacultyFrontmatter;
  contentHtml: string;
};

export function getAllFacultyProfileSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getProfileBySlug(slug: string): FacultyProfile | null {
  // Find the person whose derived slug (or override) matches
  const person = people.find(
    (p) => (p.slugOverride ?? toSlug(p.name)) === slug
  );
  if (!person) return null;

  // Find the MDX file
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = marked(content) as string;

  return {
    person,
    frontmatter: data as FacultyFrontmatter,
    contentHtml,
  };
}
