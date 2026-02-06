import type { Metadata } from "next";
import MembershipSection from "../../components/organization/members/MembershipSection";
import { members, type MembershipTier } from "../../../data/members";
import PageHeader from "@/app/components/PageHeader";

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
      <PageHeader
        eyebrow="Organization"
        title="Industry Members"
        description="The NSF BRAIN Center collaborates with clinical, industry, and government partners to translate neurotechnology research into real-world impact."
      />
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-8">
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