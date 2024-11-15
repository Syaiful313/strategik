import React from "react";
import { Navbar } from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 bg-[#1A1A1A] text-white text-center">
        <div className="countainer mx-4 md:mx-auto max-w-6xl">
          <div>
            <h2 className="text-5xl md:text-9xl font-bold mb-4">GET IN TOUCH</h2>
          </div>
          <div>
          <p className="text-white mb-24 text-1xl md:text-3xl">
            Lorem ipsum dolor sit amet consectetur. The fringed adornment
            enhances the beauty of the alien. A distinctive resting
            characteristic prevails.
          </p>
          </div>
        </div>
        <div className="container mx-auto max-w-2xl px-4">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none placeholder:text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none placeholder:text-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none placeholder:text-lg"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#e33a07] text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Marquee />
      <Footer />
    </>
  );
};

export default page;
