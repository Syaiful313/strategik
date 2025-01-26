"use client";
import { Company } from "@/types/company";
import ProfileCard from "./ProfileCard";
import { FC } from "react";

interface ProfileListProps {
  companies: Company[];
}

const ProfileList: FC<ProfileListProps> = ({ companies }) => {
  return (
    <section className="container mx-auto mt-8 px-4 md:mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {companies.map((company, index) => (
          <ProfileCard key={index} company={company} />
        ))}
      </div>
    </section>
  );
};

export default ProfileList;
