"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-6xl p-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-3xl font-semibold text-white md:text-5xl">
              Strategik.
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
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
              className="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block" id="navbar-default">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8">
            <li>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700"
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