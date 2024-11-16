"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-black">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <Link href="/">
        <span className="self-center whitespace-nowrap text-3xl font-semibold md:text-5xl  dark:text-white">
          Strategik.
        </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            document
              .getElementById("navbar-default")!
              .classList.toggle("hidden");
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-black dark:bg-black md:dark:bg-black">
            <li>
              <Link
                href="/"
                className="block text-center rounded px-3 py-2 text-white hover:text-[#e33a07] md:p-0 md:text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-center rounded px-3 py-2 text-white hover:text-[#e33a07] md:p-0 md:text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block text-center rounded px-3 py-2 text-white hover:text-[#e33a07] md:p-0 md:text-2xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="block text-center rounded px-3 py-2 text-white hover:text-[#e33a07] md:p-0 md:text-2xl"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-center rounded px-3 py-2 text-white hover:text-[#e33a07] md:p-0 md:text-2xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
