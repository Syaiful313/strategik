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
    <footer className="relative w-full bg-black text-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-black" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-20 flex flex-col items-start justify-between gap-12 border-b border-white/10 pb-20 lg:flex-row lg:items-center">
          <h2 className="text-5xl font-extralight tracking-tight sm:text-7xl lg:text-8xl">
            LET'S GET
            <br className="block sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text font-medium text-transparent">
              STRATEGIK
            </span>
          </h2>

          <div className="group relative h-36 w-36 cursor-pointer sm:h-40 sm:w-40 lg:h-44 lg:w-44">
            <div className="animate-spin-slow">
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-60">
                <defs>
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="fill-[url(#textGradient)] text-sm font-light tracking-[0.2em]">
                  <textPath href="#circlePath" startOffset="0">
                    BOOK A CALL • BOOK A CALL • BOOK A CALL •
                  </textPath>
                </text>
              </svg>
            </div>
            <Link
              href="/contact"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-90"
            >
              <PiAsterisk className="text-4xl text-white/90 transition-colors duration-300 group-hover:text-white sm:text-5xl lg:text-6xl" />
            </Link>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr,2fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-extralight tracking-wide text-white/90">
                Strategik
              </h3>
              <p className="text-base font-light leading-relaxed text-white/60">
                Digital excellence through strategic innovation
              </p>
            </div>
            
            <div className="flex gap-8">
              {[
                { Icon: PiFacebookLogo, href: "#" },
                { Icon: PiInstagramLogo, href: "#" },
                { Icon: PiYoutubeLogo, href: "#" },
                { Icon: PiTiktokLogo, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="group relative"
                >
                  <span className="absolute -inset-3 -z-10 scale-50 rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  <Icon className="h-6 w-6 text-white/60 transition-colors duration-300 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6">
              <span className="text-sm font-medium uppercase tracking-wider text-white/40">
                Menu
              </span>
              <Link href="/" className="block text-base font-light text-white/60 transition-all duration-300 hover:ml-2 hover:text-white">
                Home
              </Link>
              {["About", "Teams", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-base font-light text-white/60 transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-6">
              <span className="text-sm font-medium uppercase tracking-wider text-white/40">
                Services
              </span>
              {[
                ["Services", "services"],
                ["Social Media", "services/social-media"],
                ["E-commerce", "services/e-commerce"],
                ["Websites", "services/websites"],
              ].map(([text, href]) => (
                <Link
                  key={text}
                  href={`/${href}`}
                  className="block text-base font-light text-white/60 transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm font-light text-white/40">
            &copy; {new Date().getFullYear()} Strategik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
