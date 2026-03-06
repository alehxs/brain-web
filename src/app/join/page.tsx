import type { Metadata } from "next";
import JoinClient from "./JoinClient";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Become an industry partner of the BRAIN Center and gain access to cutting-edge neurotechnology research and collaboration.",
};

export default function JoinPage() {
  return <JoinClient />;
}
