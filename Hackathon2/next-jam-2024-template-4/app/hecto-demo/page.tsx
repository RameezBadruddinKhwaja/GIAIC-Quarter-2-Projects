"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Example cart items (right column)
const cartItemsData = [
  {
    id: 1,
    name: "Ur diam consequat",
    color: "Brown",
    size: "XL",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Ur diam consequat",
    color: "Brown",
    size: "XL",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/5807815/pexels-photo-5807815.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Ur diam consequat",
    color: "Brown",
    size: "XL",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/4245823/pexels-photo-4245823.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Ur diam consequat",
    color: "Brown",
    size: "XL",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/4042809/pexels-photo-4042809.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

// Example totals
const subtotal = 219.0;
const total = 325.0;

// Example brand logos (bottom)
const brandLogos = [
  {
    id: 1,
    name: "Adobe Live",
    url: "https://via.placeholder.com/100x50.png?text=Adobe+Live",
  },
  {
    id: 2,
    name: "Hand Crafted",
    url: "https://via.placeholder.com/100x50.png?text=Hand+Crafted",
  },
  {
    id: 3,
    name: "Mextonic",
    url: "https://via.placeholder.com/100x50.png?text=Mextonic",
  },
  {
    id: 4,
    name: "Samshine",
    url: "https://via.placeholder.com/100x50.png?text=Samshine",
  },
  {
    id: 5,
    name: "pulito",
    url: "https://via.placeholder.com/100x50.png?text=pulito",
  },
];

// Animation for fade in
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HectoDemoPage() {
  const handleContinueShipping = () => {
    // Placeholder shipping logic
    alert("Continue to Shipping!");
  };

  const handleCheckout = () => {
    // Placeholder checkout logic
    alert("Proceed to checkout!");
  };

  return (
    <div className="w-full">
      {/* Title Section */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-1">Hekto Demo</h1>
          <p className="text-gray-600">Cart Information / Shipping Payment</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Left Column: Shipping Form */}
          <motion.div
            className="lg:w-2/3 bg-white p-8 rounded shadow-md"
            {...fadeInUp}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Hekto Demo</h2>
              <Link href="/login" className="text-sm text-gray-500 hover:text-pink-600">
                Already have an account? Log in
              </Link>
            </div>
            <div className="mb-8">
              <h3 className="text-md font-semibold mb-4">Contact Information</h3>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full border rounded px-3 py-2 focus:outline-none mb-4"
              />
              <div className="flex items-center space-x-2 text-sm mb-4">
                <input type="checkbox" id="newsletter" className="h-4 w-4" />
                <label htmlFor="newsletter" className="text-gray-600">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-4">Shipping address</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="flex-1 border rounded px-3 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 border rounded px-3 py-2 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border rounded px-3 py-2 focus:outline-none mb-4"
              />
              <input
                type="text"
                placeholder="Appartment, suite, etc (optional)"
                className="w-full border rounded px-3 py-2 focus:outline-none mb-4"
              />
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="flex-1 border rounded px-3 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="flex-1 border rounded px-3 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="flex-1 border rounded px-3 py-2 focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={handleContinueShipping}
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              Continue Shipping
            </button>
          </motion.div>

          {/* Right Column: Cart Summary */}
          <motion.div
            className="lg:w-1/3 flex flex-col space-y-6"
            {...fadeInUp}
          >
            {/* Cart Items */}
            <div className="bg-white p-6 rounded shadow-md">
              {cartItemsData.map((item) => (
                <div key={item.id} className="flex items-center mb-4 last:mb-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      Color: {item.color} <br />
                      Size: {item.size}
                    </p>
                  </div>
                  <div className="ml-auto text-gray-800 font-semibold">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            {/* Totals */}
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotals:</span>
                <span className="font-semibold text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Totals:</span>
                <span className="font-semibold text-gray-800">
                  ${total.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-green-600 mb-4">
                Shipping &amp; taxes calculated at checkout
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600 transition"
              >
                Proceed To Checkout
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
          {brandLogos.map((brand) => (
            <Image
              key={brand.id}
              src={brand.url}
              alt={brand.name}
              width={100}
              height={50}
              className="object-contain grayscale"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
