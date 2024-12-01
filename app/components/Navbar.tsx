"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle body scroll lock
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white animate-bounce">
          <span className="font-extrabold text-yellow-300">Gym</span>Zone
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none z-20"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`fixed inset-0 bg-gray-900 z-10 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:inset-auto md:translate-x-0 md:flex md:bg-transparent`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 h-full md:h-auto md:flex-row md:space-y-0 md:space-x-6">
            <li>
              <Link
                href="/"
                className="block text-lg text-white py-2 px-4 hover:bg-yellow-300 hover:text-black rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-lg text-white py-2 px-4 hover:bg-yellow-300 hover:text-black rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block text-lg text-white py-2 px-4 hover:bg-yellow-300 hover:text-black rounded-md"
                onClick={toggleMenu}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-lg text-white py-2 px-4 hover:bg-yellow-300 hover:text-black rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="block text-lg text-white py-2 px-4 hover:bg-yellow-300 hover:text-black rounded-md"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
