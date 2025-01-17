"use client";
import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Marquee from "../../components/Marquee";
import FadeInSection from "@/components/FadeInSection";
import TestimoniSection from "./components/TestimoniSection";

const ServicesPage = () => {
  const services = [
    {
      title: "SOCIAL MEDIA",
      description:
        "Boost your brand's online presence with Strategik's Social Media mastery – from strategy to engaging content, we drive growth across platforms.",
      imageUrl: "/assets/About.avif",
      link: "/services/social-media",
    },
    {
      title: "E-COMMERCE",
      description:
        "Optimize your online store with Strategik's E-commerce solutions. Elevate user experience and implement strategic marketing for a thriving digital storefront.",
      imageUrl: "/assets/earphone.avif",
      link: "/services/e-commerce",
    },
    {
      title: "WEBSITES",
      description:
        "Maximize communication impact with our Websites. Tailored campaigns and automation drive engagement, loyalty, and measurable conversions.",
      imageUrl: "/assets/servis.webp",
      link: "/services/websites",
    },
  ];

  return (
    <>
      <section className="bg-[#1A1A1A] py-12 text-white">
        <div className="container max-w-screen-md px-7 md:mx-auto md:max-w-6xl md:px-4">
          <FadeInSection>
            <h2 className="mb-20 text-5xl font-bold md:mb-32 md:text-9xl">
              SERVICES
            </h2>
          </FadeInSection>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="overflow-hidden shadow-lg">
                <div>
                  <Link href={service.link}>
                    <FadeInSection>
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
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
                        {service.description}
                      </p>
                      <button className="mt-4 text-5xl text-red-500 md:mt-0 md:hidden">
                        <PiArrowCircleRightFill />
                      </button>
                    </FadeInSection>
                  </div>
                  <button className="mt-4 hidden text-5xl text-red-500 md:mt-0 md:inline-flex">
                    <Link href={service.link}>
                      <PiArrowCircleRightFill />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
      <TestimoniSection />
    </>
  );
};

export default ServicesPage;
