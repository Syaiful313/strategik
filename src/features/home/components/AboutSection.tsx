"use client";

import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AboutSection = () => {
  const portfolioItems = [
    {
      src: "/assets/laptop.avif",
      text: "E-commerce Triumph for Artisan.io",
      description:
        "Discover how we transformed Artisan.io's online store, boosting sales and customer engagement through strategic design and optimization.",
      link: "/blog/e-commerce-triumph",
    },
    {
      src: "/assets/sosmed.avif",
      text: "Social Media Magic for DevSprint",
      link: "/blog/social-media-magic-for-devsprint",
    },
    {
      src: "/assets/earphone.avif",
      text: "Digital Storefront Makeover for UrbanCraft",
      link: "/blog/digital-storefront-makeover-for-urbancraft",
    },
    {
      src: "/assets/kursi.avif",
      text: "Customer Engagement for FreshHarvest",
      link: "/blog/customer-engagement-for-freshharvest",
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
          {/* Innovative Section */}
          <FadeInSection>
            <div className="relative overflow-hidden rounded-lg bg-[#242424] p-8 shadow-lg">
              <div className="absolute top-0 left-0 h-2 w-2/3 bg-[#e33a07]"></div>
              <div className="mb-6 flex items-center justify-center">
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
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Innovative</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                Unleash award-winning ideas for a distinctive digital presence
                that sets you apart from the competition. Our creative team
                brings your brand to life with cutting-edge designs and
                strategies.
              </p>
              
            </div>
          </FadeInSection>

          {/* Strategic Section */}
          <FadeInSection>
            <div className="relative overflow-hidden rounded-lg bg-[#242424] p-8 shadow-lg">
              <div className="absolute top-0 left-0 h-2 w-2/3 bg-[#e33a07]"></div>
              <div className="mb-6 flex items-center justify-center">
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
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Strategic</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                Benefit from expertly crafted campaigns tailored to your brand's
                unique goals and target audience. We analyze your market,
                identify opportunities, and develop data-driven strategies for
                maximum impact.
              </p>
              
            </div>
          </FadeInSection>

          {/* Personalized Section */}
          <FadeInSection>
            <div className="relative overflow-hidden rounded-lg bg-[#242424] p-8 shadow-lg">
              <div className="absolute top-0 left-0 h-2 w-2/3 bg-[#e33a07]"></div>
              <div className="mb-6 flex items-center justify-center">
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
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Personalized
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                Experience a collaborative partnership with tailored solutions
                that resonate with your unique brand identity. We take the time
                to understand your business, values, and vision to create a
                digital strategy that authentically represents you.
              </p>
              
            </div>
          </FadeInSection>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-24">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#242424] shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={item.link}>
                <div className="aspect-w-16 aspect-h-9">
                  <FadeInSection>
                    <Image
                      src={item.src}
                      alt={`Portfolio item ${index + 1}`}
                      width={800}
                      height={450}
                      className="transform object-cover transition duration-500 ease-in-out group-hover:scale-105"
                    />
                  </FadeInSection>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <HiOutlineArrowNarrowRight className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="px-6 py-8">
                  <p className="mb-2 text-2xl font-bold text-white">
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

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
            <div className="mt-8 flex items-center space-x-6 md:mt-0 md:ml-12">
              <FadeInSection>
                <img
                  src="/assets/home1.avif"
                  alt="User profile"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </FadeInSection>
              <FadeInSection>
                <div>
                  <p className="text-xl font-medium text-white">Matthew Smith</p>
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