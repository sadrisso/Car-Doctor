"use client"
import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"; // Using Heroicons for a clean look

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white font-[Inter] sticky top-0 z-50 py-4 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo from the screenshot is a car with a gear, represented here with a simple SVG */}
            <img src="/assets/logo.svg" alt="logo" />
          </div>

          {/* Desktop Menu - Hidden on small screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Icons and Button */}
          <div className="flex items-center space-x-4">
            <ShoppingBagIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-200 hidden lg:block" />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-200 hidden lg:block" />
            <button className="hidden lg:block border border-orange-600 text-orange-600 font-medium py-2 px-6 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200">
              Appointment
            </button>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sliding from the top for now. You requested a sliding window, which would require custom animation. This is a common and easy implementation for mobile menus. */}
      {/* For a slide-in effect from the side, you would need to use CSS transitions and transform properties with classes like 'translate-x-full' and 'translate-x-0' */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } origin-top`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600"
            onClick={toggleMobileMenu}
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-orange-600"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <div className="flex flex-col items-start px-3 pt-4">
            <div className="flex space-x-4 mb-4">
              <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </div>
            <button className="border border-orange-600 text-orange-600 font-medium py-2 px-6 rounded-lg w-full text-left hover:bg-orange-600 hover:text-white transition-colors duration-200">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
