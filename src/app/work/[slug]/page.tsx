import { getEntryCompany } from "@/lib/contentful";
import { RICHTEXT_OPTIONS } from "@/lib/richtext-options";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { FC } from "react";

interface WorkDetailProps {
  params: { slug: string };
}
const WorkDetail: FC<WorkDetailProps> = async ({ params }) => {
  const companies = await getEntryCompany(params.slug);

  return (
    <>
      {companies?.map((company) => (
        <section
          key={company.entryId}
          className="bg-[#1A1A1A] py-12 text-white"
        >
          <div className="container mx-auto w-[90vw] max-w-6xl">
            <h1 className="mb-3 text-4xl font-bold md:mb-5 md:text-8xl">
              {company.title}
            </h1>
            <div className="mb-3 text-sm md:mb-5 md:text-xl">
              <h2>{company.description}</h2>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[600px]">
              <Image
                src={company.thumbnail}
                alt="thumbnail"
                fill
                className="mt-5 object-cover md:mt-10"
              />
            </div>
            <div className="my-5 max-w-xl md:my-10 md:max-w-3xl">
              {documentToReactComponents(company.content, RICHTEXT_OPTIONS)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WorkDetail;
