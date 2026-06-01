import type { Metadata } from "next";
import ContactPage from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Strategik for digital marketing, brand strategy, social media, e-commerce, or web design projects.",
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
