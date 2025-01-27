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
          className="min-h-screen bg-[#1A1A1A] px-4 text-white sm:px-6 md:px-8 lg:px-24"
        >
          <div className="container mx-auto py-8 md:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 md:mb-12 md:px-8">
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
                {service.title}
              </h1>
              <p className="max-w-6xl text-lg sm:text-xl md:text-2xl">
                {service.desciption}
              </p>
            </div>
          </div>

          <div className="container mx-auto pb-5">
            <div className="mb-8 flex items-center justify-center md:mb-12">
              <div className="relative aspect-[1090/600] w-full max-w-[1090px]">
                <Image
                  src={service.thumbnail}
                  alt="thumbnail"
                  fill
                  className="rounded-lg object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto mb-8 max-w-4xl px-4 sm:px-6 md:mx-12 md:mb-12 md:px-8">
              {documentToReactComponents(service.content, RICHTEXT_SERVICE)}
            </div>

            <div className="relative mx-auto mb-8 aspect-[600/350] w-full max-w-[600px] md:mx-12 md:mb-12">
              <Image
                src={service.thumbail2}
                alt="thumbnail"
                fill
                className="rounded-lg object-cover object-center"
                priority
              />
            </div>

            <div className="mx-auto max-w-4xl px-4 md:pb-20 sm:px-6 md:mx-12 md:px-8">
              {documentToReactComponents(service.content2, RICHTEXT_SERVICE)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceDetail;
