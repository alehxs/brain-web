
// src/components/organization/members/MemberLogoCard.tsx

"use client";

import Image from "next/image";
import type { FC } from "react";
import Card from "./primitives/Card";
import type { MemberOrg } from "../../../data/members";

type MemberLogoCardProps = Pick<MemberOrg, "name" | "logoSrc" | "website" | "alt">;

const MemberLogoCard: FC<MemberLogoCardProps> = ({
  name,
  logoSrc,
  website,
  alt,
}) => {
  return (
    <Card
      href={website}
      external={!!website}
      className={[
        "bg-white",                         // override transparent
        "flex items-center justify-center",
        "p-4 sm:p-5",
        "border border-slate-100",
        "hover:border-slate-200",
      ].join(" ")}
    >
      <div className="relative flex w-full items-center justify-center">
        <Image
          src={logoSrc}
          alt={alt ?? name}
          width={260}
          height={120}
          className="h-14 sm:h-16 md:h-20 w-auto object-contain"
        />
      </div>
    </Card>
  );
};

export default MemberLogoCard;
