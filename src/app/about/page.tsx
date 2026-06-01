import type { Metadata } from "next";
import AboutPage from "@/features/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Strategik's approach to creative digital marketing, brand strategy, and web design.",
};

const About = () => {
  return <AboutPage />;
};

export default About;
