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
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-full mx-auto px-4 md:px-0 py-20 md:mx-10">
        <div className="flex justify-between items-start mb-20">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
            LET'S GET STRATEGIK
          </h2>
          <div className="circular-container">
            <div className="circular-text">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[11px] md:text-[11px] font-medium fill-white">
                  <textPath href="#circlePath" startOffset="0">
                    BOOK A CALL BOOK A CALL BOOK A CALL
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="icon-center text-5xl md:text-7xl">
              <Link href="/contact">
                <PiAsterisk />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl mb-6">Strategik</h3>
            <div className="flex gap-4">
              <PiFacebookLogo className="w-7 h-7 text-[#e33a07] cursor-pointer" />
              <PiInstagramLogo className="w-7 h-7 text-[#e33a07] cursor-pointer" />
              <PiYoutubeLogo className="w-7 h-7 text-[#e33a07] cursor-pointer" />
              <PiTiktokLogo className="w-7 h-7 text-[#e33a07] cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7">
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                About
              </Link>
              <Link
                href="/team"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                Teams
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                Contact
              </Link>
            </div>
            <div className="space-y-3">
              <Link
                href="/services"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                Services
              </Link>
              <Link
                href="/services/social-media"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                Social Media
              </Link>
              <Link
                href="/services/e-commerce"
                className="block text-sm text-white hover:text-[#e33a07]"
              >
                E-commerce
              </Link>
              <Link
                href="/services/websites"
                className="block text-sm text-white hover:text-[#e33a07]"
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
