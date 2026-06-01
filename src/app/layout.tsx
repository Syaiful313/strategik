import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Strategik | Digital Marketing & Web Design Portfolio",
    template: "%s | Strategik",
  },
  description:
    "Strategik is a digital marketing and web design portfolio focused on creative brand strategy, social media, e-commerce, and website experiences.",
  applicationName: "Strategik",
  keywords: [
    "Strategik",
    "digital marketing",
    "web design",
    "social media",
    "e-commerce",
    "brand strategy",
    "portfolio",
  ],
  icons: {
    icon: "/assets/undraw.svg",
  },
  openGraph: {
    title: "Strategik | Digital Marketing & Web Design Portfolio",
    description:
      "A portfolio for creative digital marketing, brand strategy, social media, e-commerce, and website work.",
    siteName: "Strategik",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Marquee/>
        <Footer/>
      </body>
    </html>
  );
}
