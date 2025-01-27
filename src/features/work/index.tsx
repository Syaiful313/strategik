"use client";
import FadeInSection from "@/components/FadeInSection";
import ProfileList from "@/components/ProfileList";
import { getEntriesCompany } from "@/lib/contentful";

const WorkPage = async () => {
  const companies = await getEntriesCompany();

  if (!companies) {
    return;
  }

  return (
    <section className="bg-[#1A1A1A] py-12 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-8 pt-4 md:mx-auto md:pt-8">
          <FadeInSection>
            <h1 className="mb-5 text-7xl font-bold md:text-9xl">Work</h1>
          </FadeInSection>
        </div>

        <ProfileList companies={companies} />
      </div>
    </section>
  );
};

export default WorkPage;
