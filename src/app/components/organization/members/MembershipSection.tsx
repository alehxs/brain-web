// src/components/organization/members/MembershipSection.tsx

import type { FC } from "react";
import MemberLogoCard from "../../../components/cards/MemberLogoCard";
import type { MemberOrg, MembershipTier } from "../../../../data/members";
import { tierMetadata } from "../../../../data/members";


type MembershipSectionProps = {
  tier: MembershipTier;
  members: MemberOrg[];
};

const MembershipSection: FC<MembershipSectionProps> = ({ tier, members }) => {
  if (!members.length) return null;

  const meta = tierMetadata[tier];

  return (
    <section className="space-y-4">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {meta.label}
        </h2>
        {meta.description && (
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            {meta.description}
          </p>
        )}
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {members.map((member) => (
          <MemberLogoCard
            key={member.id}
            name={member.name}
            logoSrc={member.logoSrc}
            website={member.website}
            alt={member.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default MembershipSection;