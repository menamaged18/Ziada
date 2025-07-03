"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#003366] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Brand/Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/#" className="hover:text-gray-300 transition duration-300">
            Ziada
          </Link>
        </div>
        {/* <div className="w-32 h-10">
            <a href="#" className="block">
                <Image src="/ZiadaLogo.png" alt="Ziada Logo" width={50} height={40} />
            </a>
        </div> */}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/#"
            className="hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Services
          </Link>
          {/* WhyChoosingUs */}
          <Link
            href="/WhyChoosingUs"
            className="hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Why Choosing Us
          </Link>
          <Link
            href="/Contact"
            className="hover:text-gray-300 transition duration-300 text-lg font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300"
            aria-label="Toggle navigation"
          >
            {/* Hamburger Icon SVG */}
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Show hamburger lines when menu is closed */}
              {!isOpen && (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </>
              )}
              {/* Show 'X' icon when menu is open */}
              {isOpen && (
                <>
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (conditionally rendered based on isOpen state) */}
      {isOpen && (
        <div className="md:hidden bg-[#003366] py-4">
          <div className="container mx-auto px-6 md:px-12 space-y-4">
            <Link
              href="#"
              className="block text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;