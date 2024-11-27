"use client";

import Link from "next/link";
import {
  PiAsterisk,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:mb-20 lg:flex-row lg:items-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
            LET'S GET
            <br className="block sm:hidden" /> STRATEGIK
          </h2>

          <div className="circular-container">
            <div className="circular-text">
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
            <Link href="/contact" className="icon-center">
              <PiAsterisk className="text-4xl sm:text-5xl lg:text-6xl" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr,2fr]">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Strategik
            </h3>
            <div className="flex gap-6">
              <Link href="#" className="transition-transform hover:scale-110">
                <PiFacebookLogo className="h-8 w-8 text-[#e33a07]" />
              </Link>
              <Link href="#" className="transition-transform hover:scale-110">
                <PiInstagramLogo className="h-8 w-8 text-[#e33a07]" />
              </Link>
              <Link href="#" className="transition-transform hover:scale-110">
                <PiYoutubeLogo className="h-8 w-8 text-[#e33a07]" />
              </Link>
              <Link href="#" className="transition-transform hover:scale-110">
                <PiTiktokLogo className="h-8 w-8 text-[#e33a07]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                About
              </Link>
              <Link
                href="/team"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Teams
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Contact
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="/services"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Services
              </Link>
              <Link
                href="/services/social-media"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Social Media
              </Link>
              <Link
                href="/services/e-commerce"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                E-commerce
              </Link>
              <Link
                href="/services/websites"
                className="block text-sm font-medium transition-colors hover:text-[#e33a07] sm:text-base"
              >
                Websites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
