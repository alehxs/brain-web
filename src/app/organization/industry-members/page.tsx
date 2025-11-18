import type { Metadata } from "next";
import MembershipSection from "../../components/organization/members/MembershipSection";
import { members, type MembershipTier } from "../../../data/members";

export const metadata: Metadata = {
  title: "Industry Members | NSF BRAIN",
};

const orderedTiers: MembershipTier[] = [
  "full",
  "associate",
  "in-kind",
  "affiliate",
];

export default function MembersPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep-teal)]">
            Organization
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Industry Members
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            The NSF BRAIN Center collaborates with clinical, industry, and
            government partners to translate neurotechnology research into
            real-world impact.
          </p>
        </header>

        <div className="space-y-12">
          {orderedTiers.map((tier) => {
            const tierMembers = members.filter((m) => m.tier === tier);
            return (
              <MembershipSection
                key={tier}
                tier={tier}
                members={tierMembers}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}