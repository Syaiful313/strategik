"use client";
import FadeInSection from "@/components/FadeInSection";
import { Card } from "@/components/ui/card";
import { Company } from "@/types/company";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProfileCardProps {
  company: Company;
}

const ProfileCard: FC<ProfileCardProps> = ({ company }) => {
  return (
    <Link href={`/work/${company.slug}`}>
    <FadeInSection>
      <Card>
        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
          <Image
            src={company.thumbnail}
            alt="thumbnail"
            fill
            className="duration-150 hover:scale-105"
          />
        </div>
        <div className="p-2">
          <p className="my-2 text-2xl font-semibold font-sans">{company.title}</p>
        </div>
      </Card>
    </FadeInSection>
    </Link>
  );
};

export default ProfileCard;
