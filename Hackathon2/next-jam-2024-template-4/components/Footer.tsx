"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] py-16">
      <div className="container mx-auto px-4">
        {/* Top section with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1) Hekto brand + email signup + contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hekto</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#7E33E0]"
              />
              <button
                type="submit"
                className="bg-[#FB2E86] text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">Contact Info</p>
            <p className="text-sm text-gray-600">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* 2) Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Laptops &amp; Computers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Cameras &amp; Photography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Smart Phones &amp; Tablets
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Video Games &amp; Consoles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Waterproof Headphones
                </Link>
              </li>
            </ul>
          </div>

          {/* 3) Customer Care */}
          <div>
            <h4 className="font-bold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Discount
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Orders History
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* 4) Pages */}
          <div>
            <h4 className="font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Browse the Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Pre-Built Pages
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  Visual Composer Elements
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#7E33E0]"
                >
                  WooCommerce Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with icons */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p className="mb-4 md:mb-0">©Webecy - All Rights Reserved</p>
          <div className="flex space-x-4 text-lg">
            <Link href="#" className="hover:text-[#7E33E0]">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-[#7E33E0]">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-[#7E33E0]">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
