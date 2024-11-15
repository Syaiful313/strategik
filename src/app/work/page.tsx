"use client";

import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Marquee from "../components/Marquee";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const page = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=5",
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const customDescriptions = [
    "E-Commerce Extraordinaire",
    "Web Design Wiz",
    "Marketing Strategist",
    "Social Media Maven",
    "Creative Content Catalyst",
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#1a1a1a]">
        <div className="teams-page mx-5 md:mx-auto min-h-screen max-w-7xl">
          <h1 className="mb-8 text-4xl md:mt-10 text-white md:text-8xl">
            Meet Our Team
          </h1>
          <div className="team-grid md:mt-36 grid grid-cols-3 gap-6 text-white">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md bg-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full filter grayscale"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128} 
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                <p>{customDescriptions[index]}</p>
              </div>
            ))}
          </div>
          <div className="team-grid mt-6 grid grid-cols-2 gap-6 text-white">
            {teamMembers.slice(3, 5).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md bg-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full filter grayscale"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128} 
                  objectFit="cover"
                />
                <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                <p>{customDescriptions[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <Footer />
    </>
  );
};

export default page;
