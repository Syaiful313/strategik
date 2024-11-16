import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import { Navbar } from "../components/Navbar";


const page = () => {
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

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Strategik's services boosted our brand's presence online. Their attention to detail and expertise in digital marketing is unmatched!",
      imageUrl: "/assets/foto3.avif",
    },
    {
      name: "Jane Smith",
      feedback:
        "The E-commerce solutions provided by Strategik have increased our sales by over 30%. Highly recommend for any business looking to grow online.",
      imageUrl: "/assets/foto2.avif",
    },
    {
      name: "Mark Williams",
      feedback:
        "Their website development services were exactly what we needed. The team was incredibly responsive and the results speak for themselves!",
      imageUrl: "/assets/foto1.avif",
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
                  <Link href={service.link}>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      height={400}
                      width={600}
                      className="mx-auto w-full object-cover"
                    />
                  </Link>
                </div>
                <div className="mb-4 flex flex-col items-center justify-between bg-[#1A1A1A] py-4 md:flex-row md:py-8">
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
      <section className="bg-[#1A1A1A] py-32 text-center">
        <div className="container max-w-screen-md px-7 md:mx-auto md:max-w-screen-xl md:px-4">
          <h2 className="mb-12 text-4xl font-bold text-white md:text-6xl">
            What Our Clients Say
          </h2>
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-white bg-[#1A1A1A] p-6 text-white"
              >
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <p className="text-md text-white md:text-lg">
                  {testimonial.feedback}
                </p>
                <p className="mt-4 text-xl font-bold">{testimonial.name}</p>
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
