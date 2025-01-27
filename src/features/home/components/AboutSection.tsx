"use client";

import FadeInSection from "@/components/FadeInSection";
import ProfileList from "@/components/ProfileList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEntriesCompany } from "@/lib/contentful";

const AboutSection = async () => {
  const companies = await getEntriesCompany();

  if (!companies) {
    return;
  }

  const services = [
    {
      icon: (
        <svg
          className="h-12 w-12 text-[#e33a07]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovative",
      description:
        "Unleash award-winning ideas for a distinctive digital presence that sets you apart from the competition. Our creative team brings your brand to life with cutting-edge designs and strategies.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12 text-[#e33a07]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Strategic",
      description:
        "Benefit from expertly crafted campaigns tailored to your brand's unique goals and target audience. We analyze your market, identify opportunities, and develop data-driven strategies for maximum impact.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12 text-[#e33a07]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Personalized",
      description:
        "Experience a collaborative partnership with tailored solutions that resonate with your unique brand identity. We take the time to understand your business, values, and vision to create a digital strategy that authentically represents you.",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why <span className="text-[#e33a07]">Strategik</span>?
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-400">
            We are a results-driven digital agency committed to helping
            businesses thrive in the digital landscape. Our team of experts
            combines creativity, strategy, and technology to deliver tailored
            solutions that drive growth and success.
          </p>
        </FadeInSection>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <FadeInSection key={index}>
              <Card className="h-full w-full bg-[#242424] text-white">
                <div className="absolute left-0 top-0 h-2 w-2/3 bg-[#e33a07]"></div>
                <CardHeader className="flex flex-col items-center pb-4">
                  <div className="mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-2xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <p className="text-center text-base leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <ProfileList companies={companies} />

        <div className="mt-16 rounded-lg bg-[#242424] p-8 shadow-lg lg:mt-24 lg:p-12">
          <div className="md:flex md:items-start md:justify-between">
            <div className="md:flex-1">
              <FadeInSection>
                <p className="text-xl leading-relaxed text-gray-300">
                  "Their team of experts took my online presence to the next
                  level, and the impact on my business has been remarkable. I
                  highly recommend Strategik to anyone looking to elevate their
                  digital strategy."
                </p>
              </FadeInSection>
            </div>
            <div className="mt-8 flex items-center space-x-6 md:ml-12 md:mt-0">
              <FadeInSection>
                <img
                  src="/assets/home1.avif"
                  alt="User profile"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </FadeInSection>
              <FadeInSection>
                <div>
                  <p className="text-xl font-medium text-white">
                    Matthew Smith
                  </p>
                  <p className="text-base font-medium text-gray-400">
                    CEO, Artisan.io
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
