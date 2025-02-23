"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";


const wishlistItemsData = [
  {
    id: 1,
    name: "Elegant Chair",
    price: 55.0,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Modern Sofa",
    price: 120.0,
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Stylish Lamp",
    price: 35.0,
    image:
      "https://images.pexels.com/photos/967016/pexels-photo-967016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Wooden Desk",
    price: 80.0,
    image:
      "https://images.pexels.com/photos/30768273/pexels-photo-30768273/free-photo-of-cozy-home-office-desk-with-computer-and-snacks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const hoverScale = {
  whileHover: { scale: 1.05, zIndex: 10 },
};

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(wishlistItemsData);

  // Handler to remove an item from the wishlist
  const removeItem = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      {/* Breadcrumb + Title */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; Pages &gt;{" "}
            <span className="text-pink-600">Wishlist</span>
          </nav>
          <h1 className="text-3xl font-bold text-center">Wishlist</h1>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-gray-600">Your wishlist is empty.</p>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              {...fadeInUp}
            >
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    {...hoverScale}
                    className="relative h-64 bg-[#F6F7FB] flex items-center justify-center group-hover:bg-[#EBF0FF] transition-colors duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1 text-pink-600">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                    <div className="flex justify-center space-x-4">
                      <Link
                        href={`/product-details/${item.id}`}
                        className="text-pink-600 font-semibold hover:underline"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-600 hover:text-pink-600"
                        aria-label="Remove from wishlist"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
