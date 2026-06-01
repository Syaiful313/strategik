import FadeInSection from "@/components/FadeInSection";
import { getEntryService } from "@/lib/contentful";
import { RICHTEXT_SERVICE } from "@/lib/richtext-service";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: ServiceDetailPageProps): Promise<Metadata> => {
  const service = await getEntryService(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.desciption,
    openGraph: {
      title: `${service.title} | Strategik`,
      description: service.desciption,
      images: service.thumbnail ? [{ url: service.thumbnail }] : undefined,
    },
  };
};

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const service = await getEntryService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#1A1A1A] px-4 text-white sm:px-6 md:px-8 lg:px-24">
      <div className="container mx-auto py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:mb-12 md:px-8">
          <FadeInSection delay={200}>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              {service.title}
            </h1>
          </FadeInSection>
          <FadeInSection delay={400}>
            <p className="max-w-6xl text-lg sm:text-xl md:text-2xl">
              {service.desciption}
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className="container mx-auto pb-5">
        <FadeInSection delay={400}>
          <div className="mb-8 flex items-center justify-center md:mb-12">
            <div className="relative aspect-[1090/600] w-full max-w-[1090px]">
              <Image
                src={service.thumbnail}
                alt={`${service.title} service thumbnail`}
                fill
                className="rounded-lg object-cover object-center"
                priority
              />
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto mb-8 max-w-4xl px-4 sm:px-6 md:mx-12 md:mb-12 md:px-8">
          <FadeInSection delay={400}>
            {documentToReactComponents(service.content, RICHTEXT_SERVICE)}
          </FadeInSection>
        </div>
        <FadeInSection delay={400}>
          <div className="relative mx-auto mb-8 aspect-[600/350] w-full max-w-[600px] md:mx-12 md:mb-12">
            <Image
              src={service.thumbail2}
              alt={`${service.title} supporting visual`}
              fill
              className="rounded-lg object-cover object-center"
              priority
            />
          </div>
        </FadeInSection>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:mx-12 md:px-8 md:pb-20">
          <FadeInSection delay={400}>
            {documentToReactComponents(service.content2, RICHTEXT_SERVICE)}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
