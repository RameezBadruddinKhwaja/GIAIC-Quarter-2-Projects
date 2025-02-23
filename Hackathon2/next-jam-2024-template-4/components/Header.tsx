"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// React Icons
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close desktop Pages dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pagesRef.current && !pagesRef.current.contains(event.target as Node)) {
        setIsPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#7E33E0] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left: Email & Phone */}
          <div className="flex space-x-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-1" />
              <span>nehiloww@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-1" />
              <span>+1 (234) 567890</span>
            </div>
          </div>
          {/* Right: Language/Currency & Account Links */}
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-1 items-center">
              <span>English</span>
              <span className="text-gray-200">|</span>
              <span>USD</span>
            </div>
            <Link href="/my-account" className="flex items-center hover:text-gray-200">
              <FaUser className="mr-1" />
              <span>Login / My Account</span>
            </Link>
            <Link href="/wishlist" className="flex items-center hover:text-gray-200">
              <FaHeart className="mr-1" />
              <span>Wishlist</span>
            </Link>
            <Link href="/cart" className="hover:text-gray-200">
              <FaShoppingCart className="text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION (Bottom Navigation) */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-[#7E33E0]">
              Hekto
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-8 items-center relative">
            <Link href="/" className="text-gray-600 hover:text-[#7E33E0]">
              Home
            </Link>

            {/* Pages Dropdown */}
            <div ref={pagesRef} className="relative">
              <button
                onClick={() => setIsPagesOpen((prev) => !prev)}
                className="text-gray-600 hover:text-[#7E33E0] focus:outline-none"
              >
                Pages
              </button>
              {isPagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-8 left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50"
                >
                  <ul>
                    <li>
                      <Link
                        href="/order-completed"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        Order Completed
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hecto-demo"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        Hekto Demo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/404"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        404 Not Found
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <Link href="/products" className="text-gray-600 hover:text-[#7E33E0]">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#7E33E0]">
              Blog
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-[#7E33E0]">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#7E33E0]">
              Contact
            </Link>
          </nav>

          {/* Search Box */}
          <div className="ml-auto flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-gray-300 rounded-l-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
            <button className="bg-[#FB2E86] text-white px-4 py-1 rounded-r-md hover:bg-[#f72c85] transition">
              <FaSearch />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-gray-600 hover:text-[#7E33E0]">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-[#7E33E0]">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#7E33E0]">
              Blog
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-[#7E33E0]">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#7E33E0]">
              Contact
            </Link>
            {/* Optional mobile "Pages" link if desired */}
            <Link href="/pages" className="text-gray-600 hover:text-[#7E33E0]">
              Pages
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
