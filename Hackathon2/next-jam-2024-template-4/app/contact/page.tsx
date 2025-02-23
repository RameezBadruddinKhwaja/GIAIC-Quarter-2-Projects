"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Fade-in animation: changed from whileInView to animate
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb + Title */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-2 text-gray-500">
            Home &gt; Pages &gt;{" "}
            <span className="text-pink-600">Contact Us</span>
          </nav>
          <h1 className="text-3xl font-bold mb-1">Contact Us</h1>
          <p className="text-gray-600">Home . Pages . Contact us</p>
        </div>
      </section>

      {/* Info & Contact Way */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start gap-8"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            {/* Left Column: Information About Us */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-4">Information About us</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                neque ultrices mattis aliquam, malesuada enim est. Molestie nisi
                tincidunt amet est vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className="flex space-x-3">
                {/* Example of 3 colored circles */}
                <span className="w-5 h-5 rounded-full bg-pink-500"></span>
                <span className="w-5 h-5 rounded-full bg-purple-500"></span>
                <span className="w-5 h-5 rounded-full bg-blue-500"></span>
              </div>
            </div>

            {/* Right Column: Contact Way */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-4">Contact Way</h2>
              <div className="mb-4">
                <p className="text-gray-600">
                  Tel: +77-878-89-99 <br />
                  E-Mail: info@hekto.com
                </p>
              </div>
              <div className="mb-4 text-gray-600">
                <p>20 Margaret St, London</p>
                <p>Great britain, 3NM98-LK</p>
              </div>
              <div className="text-gray-600">
                <p>Support Forum for over 24hr</p>
                <p>Free standard shipping on all orders.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            {/* Left Column: Form & Title */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                neque ultrices tristique amet erat exit eget dolor lobortis quis
                bibendum quam.
              </p>
              {/* Form */}
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="flex-1 border rounded px-3 py-2 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 border rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full border rounded px-3 py-2 focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Type Your Message*"
                  rows={4}
                  className="w-full border rounded px-3 py-2 focus:outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
                >
                  Send Mail
                </button>
              </form>
            </div>

            {/* Right Column: Illustration */}
            <div className="w-full md:w-1/2 relative h-72 md:h-96">
              <Image
                src="data:image/jpeg;base64,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"
                alt="Contact Illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
