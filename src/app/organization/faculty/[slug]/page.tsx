/**
 * Faculty profile dynamic route.
 *
 * NOTE: This is a stub on `main`. The full implementation lives on
 * `feat/faculty-slug-pages` and will replace this file when that branch merges.
 * generateStaticParams returns [] so no pages are pre-rendered; any hit 404s.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllFacultyProfileSlugs } from "@/lib/faculty-profile";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllFacultyProfileSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Stub: no profiles exist on main yet, so we return a minimal object.
  // The feature branch replaces this with a real person lookup.
  return {
    title: `Faculty | The BRAIN Center`,
    alternates: { canonical: `/organization/faculty/${slug}` },
  };
}

export default async function FacultyProfilePage({ params }: Props) {
  const { slug } = await params;
  // No MDX content on main — always 404 until feature branch lands.
  void slug;
  notFound();
}
