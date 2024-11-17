"use client";

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
    <section className="bg-[#1A1A1A]">
      <div className="max-w-[100vw] bg-[#1A1A1A] p-4 text-white md:px-36 md:py-12">
        <h2 className="mb-8 mt-6 px-4 text-start text-3xl font-bold md:mb-16 md:mt-10 md:px-10 md:text-6xl">
          WHY STRATEGIK?
        </h2>

        <div className="flex flex-col space-y-8 px-4 md:my-32 md:flex-row md:space-x-8 md:space-y-0 md:px-10">
          <div className="space-y-2">
            <h3 className="pt-8 text-xl font-bold md:text-4xl">INNOVATIVE</h3>
            <p className="text-xl text-gray-300 md:text-2xl">
              Unleash award-winning ideas for a distinctive digital presence.
            </p>
          </div>

          <div className="space-y-2 border-t-2 border-[#e33a07] md:border-l-2 md:border-t-0 md:border-[#e33a07] md:pl-8">
            <h3 className="pt-8 text-xl font-bold md:text-4xl">STRATEGIC</h3>
            <p className="text-xl text-gray-300 md:text-2xl">
              Benefit from expertly crafted campaigns tailored to your brand's
              goals.
            </p>
          </div>

          <div className="space-y-2 border-t-2 border-[#e33a07] md:border-l-2 md:border-t-0 md:border-[#e33a07] md:pl-8">
            <h3 className="pt-8 text-xl font-bold md:text-4xl">PERSONALIZED</h3>
            <p className="text-xl text-gray-300 md:text-2xl">
              Experience a collaborative partnership with tailored solutions
              that resonate.
            </p>
          </div>
        </div>

        <section className="bg-[#1A1A1A]">
          <div className="max-w-[100vw] bg-[#1A1A1A] text-white md:px-12 md:py-12">
            <div className="mx-5 mt-10 grid grid-cols-1 p-0 md:mt-0 md:grid-cols-2">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group relative">
                  <Link href={item.link}>
                    <Image
                      src={item.src}
                      alt={`Portfolio item ${index + 1}`}
                      width={700}
                      height={475}
                      className="w-full object-cover transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="rounded bg-opacity-50 text-center text-sm md:text-3xl text-white">
                        {item.text}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-4 mb-0 flex flex-col justify-between gap-6 px-4 py-20 text-start md:mx-10 md:flex-row md:items-center md:px-10">
          <div className="flex-1">
            <p className="text-2xl font-normal">
              Their team of experts took my online presence to the next level,
              <br />
              and the impact on my business has been remarkable.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center md:mt-0 md:items-start">
            <img
              src="/assets/home1.avif"
              alt="User profile"
              className="h-12 w-12 rounded-full border-2 border-gray-500"
            />
            <p className="mt-3 rounded-md px-2 py-1 text-center text-sm font-medium md:text-left md:text-xl">
              Matthew Smith from Uber
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
