import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Marquee from "../components/Marquee";
import { PiArrowCircleRightFill } from "react-icons/pi";

const page = () => {
  const services = [
    {
      title: "SOCIAL MEDIA",
      description:
        "Boost your brand's online presence with Strategik's Social Media mastery – from strategy to engaging content, we drive growth across platforms.",
      imageUrl: "/assets/About.avif",
    },
    {
      title: "E-COMMERCE",
      description:
        "Optimize your online store with Strategik's E-commerce solutions. Elevate user experience and implement strategic marketing for a thriving digital storefront.",
      imageUrl: "/assets/earphone.avif",
    },
    {
      title: "WEBSITES",
      description:
        "Maximize communication impact with our Websites. Tailored campaigns and automation drive engagement, loyalty, and measurable conversions.",
      imageUrl: "/assets/servis.webp",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="bg-[#1A1A1A] py-12 text-white">
        <div className="container max-w-screen-md px-7 md:mx-auto md:max-w-screen-xl md:px-4">
          <h2 className="mb-20 text-5xl font-bold md:mb-32 md:text-9xl">
            SERVICES
          </h2>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="overflow-hidden shadow-lg">
                <div>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="mx-auto w-full object-cover"
                  />
                </div>
                <div className="mb-8 flex flex-col items-center justify-between bg-[#1A1A1A] py-8 md:flex-row">
                  <div>
                    <h3 className="text-4xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-base text-white md:text-2xl">
                      {service.description}
                    </p>
                    <button className="mt-4 text-5xl text-red-500 md:mt-0 md:hidden">
                      <PiArrowCircleRightFill />
                    </button>
                  </div>
                  <button className="mt-4 hidden text-5xl text-red-500 md:mt-0 md:inline-flex">
                    <PiArrowCircleRightFill />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
      <Footer />
    </>
  );
};

export default page;
