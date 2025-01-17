import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";

const TestimoniSection = () => {
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
    <section className="bg-[#1A1A1A] py-32 text-center">
      <div className="container max-w-screen-md px-7 md:mx-auto md:max-w-screen-lg md:px-4">
        <FadeInSection>
          <h2 className="mb-12 text-4xl font-bold text-white md:text-6xl">
            What Our Clients Say
          </h2>
        </FadeInSection>
        <FadeInSection>
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-white bg-[#1A1A1A] p-6 text-white"
              >
                <FadeInSection>
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full object-cover"
                  />
                </FadeInSection>
                <FadeInSection>
                  <p className="text-md text-white md:text-lg">
                    {testimonial.feedback}
                  </p>
                  <p className="mt-4 text-xl font-bold">{testimonial.name}</p>
                </FadeInSection>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TestimoniSection;
