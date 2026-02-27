import type { Metadata } from "next";
import SitesClient from "./SitesClient";

export const metadata: Metadata = {
  title: "Sites",
  description:
    "BRAIN Center partner universities and collaborating institutions across the United States and worldwide.",
};

export default function SitesPage() {
  return <SitesClient />;
}
