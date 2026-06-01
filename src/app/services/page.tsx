import type { Metadata } from "next";
import ServicesPage from "@/features/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse Strategik services across social media, e-commerce, web design, and digital brand strategy.",
};

const Services = () => {
  return <ServicesPage />;
};

export default Services;
