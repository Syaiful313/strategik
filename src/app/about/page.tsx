"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "../components/Marquee";

const page = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6",
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const services = [
    { title: "SOCIAL MEDIA", href: "/services/social-media" },
    { title: "E-COMMERCE", href: "/services/e-commerce" },
    { title: "WEBSITES", href: "/services/websites" },
  ];

  const customDescriptions = [
    "E-Commerce Extraordinaire",
    "Web Design Wiz",
    "Marketing Strategist",
    "Social Media Maven",
    "Creative Content Catalyst",
  ];

  return (
    <>
      <section className="bg-[#1A1A1A]">
        <div className="mx-5 min-h-screen bg-[#1A1A1A] p-4 text-white">
          <div className="relative mx-auto flex max-w-6xl pb-20 pt-10">
            <h1 className="text-5xl font-bold md:text-9xl">About</h1>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="p-0 md:col-span-2">
                <h1 className="mb-4 text-2xl font-medium leading-tight md:text-4xl">
                  We&apos;re not just a digital marketing agency. We&apos;re a
                  powerhouse of creativity, innovation, and passion for helping
                  brands thrive in the digital landscape.
                </h1>
              </div>

              <div className="space-y-0">
                {services.map((service) => (
                  <Link href={service.href}>
                    <div
                      key={service.title}
                      className="cursor-pointer p-0 transition-colors hover:text-[#e33a07] md:p-2"
                    >
                      <h2 className="text-xl font-bold md:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </Link>
                ))}

                <div className="mb-0 p-0 pt-4 md:p-4">
                  <p className="text-lg">
                    Strategik is a small digital marketing agency with big and
                    award-winning ideas for creative brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <img src="/assets/About.avif" alt="Person" />
            </div>
          </div>
          <div>
            <div className="mx-auto flex max-w-6xl flex-col">
              <div className="relative mt-10 flex">
                <h2 className="text-3xl md:text-4xl">Our Story</h2>
              </div>
              <div className="text-md mt-3 grid w-full grid-cols-1 gap-6 md:w-[60%] md:text-2xl">
                <p>
                  In a world buzzing with digital noise, we understand the
                  importance of standing out. Our mission is simple yet powerful
                  – to elevate your brand experience. Whether it's through
                  compelling social media campaigns, seamless e-commerce
                  solutions, or visually striking websites, we're here to make
                  your brand shine.
                </p>
                <p>
                  Whether you're a startup with a vision or an established brand
                  seeking a fresh digital perspective, we invite you to join us
                  on this exciting journey. Let's not just meet expectations but
                  exceed them, together.
                </p>
                <p className="text-lg font-bold md:text-2xl">
                  Welcome to Strategik – where your brand's success is not just
                  a goal; it's a commitment.
                </p>
              </div>
              <div className="mb-8 mt-4 w-[60%]">
                <Image
                  src="/assets/earphone.avif"
                  alt="earphone"
                  height={500}
                  width={600}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <Marquee />
        <section className="bg-[#1a1a1a]">
          <div className="teams-page mx-5 min-h-screen max-w-7xl md:mx-auto">
            <h1 className="mb-8 text-4xl text-white md:mt-10 md:text-8xl">
              Meet Our Team
            </h1>
            <div className="team-grid grid grid-cols-3 gap-6 text-white md:mt-36">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="team-member rounded-md bg-[#2a2a2a] p-4"
                >
                  <Image
                    className="mx-auto mb-4 rounded-full grayscale filter"
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
            <div className="team-grid mt-8 grid grid-cols-2 gap-6 text-white">
              {teamMembers.slice(3, 6).map((member, index) => (
                <div
                  key={index}
                  className="team-member rounded-md bg-[#2a2a2a] p-4"
                >
                  <Image
                    className="mx-auto mb-4 rounded-full grayscale filter"
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
      </section>
    </>
  );
};

export default page;
