import { getEntryService } from "@/lib/contentful";
import { RICHTEXT_SERVICE } from "@/lib/richtext-service";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { FC } from "react";

interface ServiceDetailProps {
  params: { slug: string };
}

const ServiceDetail: FC<ServiceDetailProps> = async ({ params }) => {
  const services = await getEntryService(params.slug);

  return (
    <>
      {services?.map((service) => (
        <section
          key={service.entryId}
          className="min-h-screen bg-[#1A1A1A] px-4 sm:px-6 md:px-8 lg:px-24 text-white"
        >
          <div className="container mx-auto py-8 md:py-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-6xl">
              {service.desciption}
            </p>
          </div>

          <div className="container mx-auto py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="relative w-full max-w-[1090px] aspect-[1090/600]">
                <Image
                  src={service.thumbnail}
                  alt="thumbnail"
                  fill
                  className="object-cover object-center rounded-lg"
                  priority
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mb-8 md:mb-12">
              {documentToReactComponents(service.content, RICHTEXT_SERVICE)}
            </div>

            <div className="relative w-full max-w-[600px] aspect-[600/350] mx-auto mb-8 md:mb-12">
              <Image
                src={service.thumbail2}
                alt="thumbnail"
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
              {documentToReactComponents(service.content2, RICHTEXT_SERVICE)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceDetail;