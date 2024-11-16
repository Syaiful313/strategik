

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiAsterisk } from "react-icons/pi";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const revealPosition = window.innerHeight;
      const elementTop = document
        .querySelector("#fade-in-section")
        ?.getBoundingClientRect().top;

      if (elementTop && elementTop < revealPosition) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="fade-in-section"
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

const Content = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-[1440px] p-8">
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-[200px]" />

          <div className="pb-24 pt-16">
            <FadeInSection>
              <h1 className="text-5xl font-bold tracking-tight md:text-9xl">
                <div className="text-white">TIME TO GET</div>
                <div className="text-[#e33a07]">STRATEGIK</div>
              </h1>
            </FadeInSection>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="flex w-full flex-col gap-2 md:w-[300px]">
              <FadeInSection>
                <Link href="/services/social-media">
                <div className="transition-colors hover:text-[#e33a07]">
                  <h2 className="text-2xl font-medium">SOCIAL MEDIA</h2>
                </div>
                </Link>
              </FadeInSection>
              <FadeInSection>
                <Link href="/services/e-commerce">
                <div className="my-3 transition-colors hover:text-[#e33a07]">
                  <h2 className="text-2xl font-medium">E-COMMERCE</h2>
                </div>
                </Link>
              </FadeInSection>
              <FadeInSection>
                <Link href="/services/websites">
                <div className="mb-3 transition-colors hover:text-[#e33a07]">
                  <h2 className="text-2xl font-medium">WEBSITES</h2>
                </div>
                </Link>
              </FadeInSection>
            </div>

            <div className="mt-auto max-w-[600px] flex-1">
              <FadeInSection>
                <p className="text-4xl font-light leading-tight">
                  Strategik adalah agensi pemasaran digital kecil dengan ide-ide
                  besar dan penghargaan untuk merek yang kreatif.
                </p>
              </FadeInSection>
            </div>

            <div className="relative h-[120px] w-[120px] flex-shrink-0">
              <div className="animate-spin-slow absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-0 flex items-center justify-center"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="circular-container">
                  <div className="circular-text">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="fill-white text-[11px] font-medium">
                        <textPath href="#circlePath" startOffset="0">
                          BOOK A CALL BOOK A CALL BOOK A CALL
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="icon-center text-normal font-serif text-7xl">
                    <Link href="/contact">
                      <PiAsterisk />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-sm bg-[#232323]">
              <FadeInSection>
                <Image
                  src="/assets/home.avif"
                  alt="Featured project"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                  priority
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
