"use client";

import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";

const Content2 = () => {
  const portfolioItems = [
    {
      src: "/assets/laptop.avif",
      text: "E-commerce Triumh for Artisan.io",
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
    <section className="w-full bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl bg-[#1A1A1A] px-4 py-8 text-white sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
            WHY STRATEGIK?
          </h2>
        </FadeInSection>

        <div className="mt-12 flex flex-col space-y-8 lg:mt-24 lg:flex-row lg:space-x-8 lg:space-y-0">
          {/* Innovative Section */}
          <FadeInSection>
            <div className="space-y-3 lg:flex-1">
              <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                INNOVATIVE
              </h3>
              <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                Unleash award-winning ideas for a distinctive digital presence.
              </p>
            </div>
          </FadeInSection>

          {/* Strategic Section */}
          <FadeInSection>
            <div className="border-t-2 border-[#e33a07] pt-8 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="space-y-3 lg:flex-1">
                <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  STRATEGIC
                </h3>
                <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                  Benefit from expertly crafted campaigns tailored to your
                  brand's goals.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Personalized Section */}
          <FadeInSection>
            <div className="border-t-2 border-[#e33a07] pt-8 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="space-y-3 lg:flex-1">
                <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  PERSONALIZED
                </h3>
                <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                  Experience a collaborative partnership with tailored solutions
                  that resonate.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Link href={item.link}>
                <div className="aspect-w-16 aspect-h-9 relative">
                  <FadeInSection>
                    <Image
                      src={item.src}
                      alt={`Portfolio item ${index + 1}`}
                      width={700}
                      height={475}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </FadeInSection>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-4 text-center text-base font-medium text-white sm:text-lg lg:text-2xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-8 rounded-lg bg-[#242424] p-6 lg:mt-24 lg:flex-row lg:items-center lg:p-8">
          <div className="flex-1">
            <FadeInSection>
              <p className="text-lg font-normal sm:text-xl lg:text-2xl">
                Their team of experts took my online presence to the next level,
                and the impact on my business has been remarkable.
              </p>
            </FadeInSection>
          </div>

          <div className="flex items-center space-x-4">
            <FadeInSection>
              <img
                src="/assets/home1.avif"
                alt="User profile"
                className="h-12 w-12 rounded-full border-2 border-gray-500 object-cover"
              />
            </FadeInSection>
            <FadeInSection>
              <p className="text-base font-medium sm:text-lg lg:text-xl">
                Matthew Smith from Uber
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
