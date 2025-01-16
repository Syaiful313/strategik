"use client";

import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";
import { PiAsterisk } from "react-icons/pi";

const HeroSection = () => {
  const services = [
    { title: "SOCIAL MEDIA", href: "/services/social-media" },
    { title: "E-COMMERCE", href: "/services/e-commerce" },
    { title: "WEBSITES", href: "/services/websites" },
  ];

  return (
    <section className="min-h-screen bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-16">
            <FadeInSection delay={200}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-9xl">
                <span className="block text-white">TIME TO GET</span>
                <span className="mt-2 block text-[#e33a07]">STRATEGIK</span>
              </h1>
            </FadeInSection>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px,1fr,120px]">
            <div className="space-y-6">
              {services.map((service, index) => (
                <FadeInSection key={service.href} delay={300 + index * 100}>
                  <Link href={service.href}>
                    <div className="group">
                      <h2 className="text-xl font-medium transition-colors duration-300 group-hover:text-[#e33a07] sm:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>

            <div className="max-w-2xl">
              <FadeInSection delay={600}>
                <p className="text-2xl font-light leading-tight sm:text-3xl lg:text-4xl">
                  Strategik adalah agensi pemasaran digital kecil dengan ide-ide
                  besar dan penghargaan untuk merek yang kreatif.
                </p>
              </FadeInSection>
            </div>

            <div className="group relative h-[120px] w-[120px]">
              <div className="absolute inset-0 rounded-full" />
              <div className="absolute inset-0">
                <FadeInSection>
                  <div className="relative h-full w-full">
                    <div className="group-hover:animate-rotate-once">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="fill-white text-xs font-medium" textLength="232">
                          <textPath href="#circlePath" startOffset="0">
                            BOOK A CALL • BOOK A CALL • BOOK A CALL •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <Link
                      href="/contact"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform hover:scale-110"
                    >
                      <PiAsterisk className="text-5xl text-[#e33a07]" />
                    </Link>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-24">
            <FadeInSection delay={800}>
              <div className="aspect-video overflow-hidden rounded-lg bg-[#232323]">
                <Image
                  src="/assets/home.avif"
                  alt="Featured project"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
