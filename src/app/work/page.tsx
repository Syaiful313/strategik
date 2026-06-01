import type { Metadata } from "next";
import WorkPage from "@/features/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "View selected Strategik portfolio work for creative digital campaigns, websites, and brand experiences.",
};

const Work = () => {
  return <WorkPage />;
};

export default Work;
