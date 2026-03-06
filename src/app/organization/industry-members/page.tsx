import type { Metadata } from "next";
import MembershipSection from "../../components/organization/members/MembershipSection";
import { members, type MembershipTier } from "../../../data/members";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Industry Members",
};

const orderedTiers: MembershipTier[] = [
  "full",
  "associate",
  "in-kind",
  "affiliate",
];

export default function MembersPage() {
  return (
    <div className="bg-slate-50">
      <PageHeader
        eyebrow="Organization"
        title="Industry Members"
        description="Clinical, industry, and government partners collaborating with the BRAIN Center to advance and apply neurotechnology research."
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
    </div>
  );
}