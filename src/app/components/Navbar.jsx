"use client";
import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"; // Using Heroicons for a clean look
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navMenu = () => {
    return (
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        <Link
          onClick={toggleMobileMenu}
          href="/"
          className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          onClick={toggleMobileMenu}
          href="/about"
          className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          onClick={toggleMobileMenu}
          href="/services"
          className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          onClick={toggleMobileMenu}
          href="/blogs"
          className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          onClick={toggleMobileMenu}
          href="/contact"
          className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    );
  };

  return (
    <nav className="bg-white font-[Inter] sticky top-0 z-50 py-2 px-2 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Image width={80} height={80} src="/assets/logo.svg" alt="logo" />
          </div>

          {/* Desktop Menu - Hidden on small screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navMenu()}
          </div>

          {/* Icons and Button */}
          <div className="flex items-center space-x-4">
            <ShoppingBagIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-200 hidden lg:block" />
            <Link
              href="/register"
              className="hidden lg:block border border-orange-600 text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Register
            </Link>
    
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
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 pt-6 pb-4 space-y-4 h-full flex flex-col">
          {/* Navigation */}
          <div className="flex flex-col items-start">
            {navMenu()}
            <div className="flex space-x-4 mb-6 mt-4">
              <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
              <Link
                onClick={toggleMobileMenu}
                href="/register"
                className="lg:block border border-orange-600 text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Spacer to push button down if needed */}
          <div className="flex-grow"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
