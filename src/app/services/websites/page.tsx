"use client";
import Image from "next/image";

const WebsitesPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#1A1A1A] px-24 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mx-16 mb-6 text-7xl font-bold md:text-8xl">
            Websites
          </h1>
          <p className="mx-16 max-w-6xl text-xl md:text-2xl">
            Maximize communication impact with our Websites. Tailored campaigns
            and automation drive engagement, loyalty, and measurable
            conversions.
          </p>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/servis.webp"
              alt="Person"
              width={1340}
              height={600}
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#1A1A1A] px-24 text-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="mx-10 mb-12 text-4xl font-bold md:text-6xl">
            WHAT'S INCLUDED?
          </h2>

          <div className="ml-10 max-w-4xl space-y-12 text-start">
            <div className="border-t border-gray-800 pt-8">
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                Strategic Planning
              </h3>
              <p className="text-lg text-gray-300">
                Unlock the full potential of your brand on social media with our
                meticulous strategic planning. We analyze your target audience,
                competitors, and industry trends to develop a tailored social
                media roadmap. From content calendars to campaign strategies, we
                ensure every post serves a purpose in achieving your business
                objectives.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                Creative Content
              </h3>
              <p className="text-lg text-gray-300">
                Stand out in the digital crowd with our captivating and
                award-winning creative content. Our team of talented designers,
                copywriters, and multimedia experts craft visually stunning and
                engaging posts that not only grab attention but also tell your
                brand story authentically. From eye-catching visuals to
                compelling copy, we ensure your social media presence reflects
                the essence of your brand.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                Data-Driven Optimization
              </h3>
              <p className="text-lg text-gray-300">
                We don't just stop at posting – we constantly monitor and
                analyze social media metrics to fine-tune our approach. Through
                data-driven insights, we identify what works best for your
                audience and optimize our strategy accordingly. From engagement
                analytics to conversion tracking, we ensure your social media
                efforts translate into measurable results, providing you with a
                clear return on investment.
              </p>
            </div>
          </div>

          <div className="mx-auto px-4 py-12">
            <div className="mx-7">
              <Image
                src="/assets/website.avif"
                alt="Person"
                width={871}
                height={522}
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="container mx-7 px-4 py-16">
            <h2 className="mb-8 text-4xl font-bold md:text-6xl">THE PROCESS</h2>
            <div className="max-w-4xl">
              <p className="mb-5 text-lg leading-relaxed text-gray-300">
                At Strategik, our seamless process begins with a deep dive into
                your brand's essence, shaping a tailored social media strategy
                aligned with your business goals. Our creative team transforms
                insights into captivating content that resonates with your
                audience. Executing meticulously planned campaigns across chosen
                platforms, we continuously monitor, adapt, and optimize based on
                real-time data analysis. Regular reporting keeps you informed,
                allowing us to collaboratively refine strategies and ensure your
                brand achieves sustained visibility, engagement, and measurable
                success in the dynamic landscape of social media. With
                Strategik, it's more than a service – it's a strategic and
                iterative partnership committed to elevating your brand's social
                media presence.
              </p>

              <h2 className="mb-8 text-4xl font-bold md:text-6xl">
                WORK WITH US
              </h2>
              <div className="max-w-4xl">
                <p className="text-lg leading-relaxed text-gray-300">
                  With Strategik, it's not just a service; it's a partnership
                  focused on elevating your brand's social media presence
                  through a well-defined and iterative process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsitesPage;
