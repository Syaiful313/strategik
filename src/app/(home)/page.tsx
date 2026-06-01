import type { Metadata } from "next";
import HomePage from "@/features/home";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Design Portfolio",
  description:
    "Explore Strategik, a creative digital marketing and web design portfolio for brands that need stronger online presence.",
};

const Home = () => {
  return <HomePage />;
};

export default Home;
