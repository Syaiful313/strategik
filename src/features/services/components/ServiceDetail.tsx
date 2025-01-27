"use client";
import FadeInSection from "@/components/FadeInSection";
import { ServiceType } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PiArrowCircleRightFill } from "react-icons/pi";

interface ServiceDetailProps {
  service: ServiceType;
}

const ServiceDetail: FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div className="overflow-hidden shadow-lg">
      <div>
        <Link href={`/services/${service.slug}`}>
          <FadeInSection>
            <Image
              src={service.thumbnail}
              alt={"thumbnail"}
              height={400}
              width={600}
              className="mx-auto w-full object-cover"
            />
          </FadeInSection>
        </Link>
      </div>
      <div className="mb-4 flex flex-col items-center justify-between bg-[#1A1A1A] py-4 md:flex-row md:py-8">
        <div>
          <FadeInSection>
            <h3 className="text-4xl font-bold">{service.title}</h3>
          </FadeInSection>
          <FadeInSection>
            <p className="mt-2 text-base text-white md:text-2xl">
              {service.desciption}
            </p>
            <button className="mt-4 text-5xl text-red-500 md:mt-0 md:hidden">
              <PiArrowCircleRightFill />
            </button>
          </FadeInSection>
        </div>
        <button className="mt-4 hidden text-5xl text-red-500 md:mt-0 md:inline-flex">
          <Link href={`/services/${service.slug}`}>
            <PiArrowCircleRightFill />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
