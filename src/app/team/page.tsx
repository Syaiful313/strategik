import type { Metadata } from "next";
import TeamPage from "@/features/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Strategik team behind creative digital marketing, social media, e-commerce, and website projects.",
};

const Team = () => {
  return <TeamPage />;
};

export default Team;
