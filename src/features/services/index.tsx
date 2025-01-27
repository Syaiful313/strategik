"use client";
import FadeInSection from "@/components/FadeInSection";
import Marquee from "../../components/Marquee";
import ServiceList from "./components/ServiceList";
import TestimoniSection from "./components/TestimoniSection";
import { getEntriesService } from "@/lib/contentful";

const ServicesPage = async () => {
  const services = await getEntriesService();

  if (!services) {
    return;
  }

  return (
    <>
      <section className="bg-[#1A1A1A] py-12 text-white">
        <div className="container max-w-screen-md px-7 md:mx-auto md:max-w-6xl md:px-4">
          <FadeInSection>
            <h2 className="mb-20 text-5xl font-bold md:mb-32 md:text-9xl">
              SERVICES
            </h2>
          </FadeInSection>

          <ServiceList services={services} />
        </div>
      </section>
      <Marquee />
      <TestimoniSection />
    </>
  );
};

export default ServicesPage;
