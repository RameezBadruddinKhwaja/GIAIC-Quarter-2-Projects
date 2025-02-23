"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    price: 32.0,
    oldPrice: 40.0,
    rating: 4,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "In nulla",
    price: 26.0,
    oldPrice: 36.0,
    rating: 5,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Vel sem",
    price: 48.0,
    oldPrice: 60.0,
    rating: 3,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Porttitor cum",
    price: 59.0,
    oldPrice: 70.0,
    rating: 4,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Nunc in",
    price: 34.0,
    oldPrice: 45.0,
    rating: 4,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Vitae facilisis",
    price: 40.0,
    oldPrice: 55.0,
    rating: 5,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    name: "Curabitur lectus",
    price: 35.0,
    oldPrice: 42.0,
    rating: 4,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    image:
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    price: 45.0,
    oldPrice: 55.0,
    rating: 5,
    excerpt:
      "This is a newly added product. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const brandLogos = [
  {
    id: 1,
    name: "Adobe Live",
    url: "data:image/png;base64,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",
  },
  {
    id: 2,
    name: "Creative Market",
    url: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Magento",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABVCAMAAAAfZ9TxAAAAP1BMVEX///8xLS5lYmKXlZU+Ojutq6ugnp7y8vKxsLB/fH2DgYLk4+PIx8fLystoZWaQjo9ZVlfX1tZ1cnNMSUq+vb11aFRiAAADhElEQVRoge2a6ZqrIAyGoSq4tMWF+7/WQxK2VuzytDMw5+H70aKD+JKEhOowVlVVVVVVVVVV9UeldW6CF9Rzzlcx5cZ4LIAEbUrL3CyHMpAtH8SKpCex5OZJykAODW9MS6sZTTqUZ1KAZERpNPVriyZtijIpQgZK0IVM2g59KSYlyFtKI9kPaNK5ueThupGF3FGCloZMuvaZU5SDTFIaST1sQDr8KtWdDKSi1gGl7cRPv0WUkOK8t81jyqU1yTQj5RAgjykN5KwzUsaQh5QAKS/5KNVNkTmgREiWkfJkdxhUt9OUBFkCJRUZlaK0kIVQkk13ddtBlkS5KzK6dcn8FyhHPicL3J4S67ZydbsPFefnKRfu68srlN6kEeQ9Jc7GHWCpz0BJ++C4dico+RKGf0ZpOnTPMNVbHg+KNhgpSkFt8SXKIz2hXKOuKcqN2lteyjh97ilb6/IzNolyArvOlucMP/Vm4edBthcQxcpdySVcMU5+JnKmgBchoj6iHG2wK2xyd1vQyJgLBA75NlDK2Z7tbPcteIXOnvFran1AfUapjQ2haXZ1miin1l1pbjD5YcaIcvVnz2FSMJinhC6byZ28ld+g7FYc3BCOHVHC0Gf8MrYx51rjsisZyhJAOrhKKBb8SpTmCL5U6APTEzyK488oNbrWMGlL6bzEIaTMjdrppj9FB5oIKAgPulwpRhyZwptv/trPKMHXUpoPRpRTdKlmEt2v7IOn4M0rszY9H1HSlefvUAqYdNeBt8SO0txusQtljCgtD3Y9pAT3UMh/hdJYZF2td/eUJmQFLpso5labhB/acgojfIOS1u7MLCWLsofXSmbhb8Ql5QG/xD+mxJQoPOVIR6wD6824fnHd+/5ow9XghTW+p8SE2UY7jyeU8XO3JCX6ZvKUIV+umInCAcO/jIl8uaeE6eGI02uUIPcoM0kJ41+Zp0QboRRZkeY6MZtdxkTt2VF2OAO5hW3EE8rBZi547pam7Oh2jpJJAZyKsogGw23RxinU8dHX8XtK8MdII3P9Ylz65jyU9LvniJJnfE70H1Imf5OURpnv8eUblBmfsb5Omc3d71D2z8f6OQ0vUmaFDO+fHlNmhkRdmvkxZQmQIPf+KUlZCiRqaXZrCSmLggS5908xZXGQqEWcYsoyIUFSq81SlguJmuC/Dg5f+JUkXcIL56qqqqqqqqqqqr+ifyXTILDXSYSvAAAAAElFTkSuQmCC",
  },
  {
    id: 4,
    name: "Sketch",
    url: "data:image/png;base64,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",
  },
  {
    id: 5,
    name: "Figma",
    url: "data:image/jpeg;base64,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",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function ShopSidebar() {
  return (
    <div className="space-y-6">
      {/* Product Brand */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Product Brand</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {[
            "Coaster Furniture",
            "Fusion High Fashion",
            "Unique Furniture Restor",
            "Dream Furniture Flipping",
            "Young Repurposed",
            "Green DIY Furniture",
          ].map((item) => (
            <li key={item}>
              <Link href={`/shop?brand=${encodeURIComponent(item)}`} className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Discount Offer */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Discount Offer</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {["20% Cashback", "25% Cashback", "30% Cashback", "50% Cashback"].map((offer) => (
            <li key={offer}>
              <Link href={`/shop?discount=${encodeURIComponent(offer)}`} className="hover:underline">
                {offer}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Rating Item */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Rating Item</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"].map((rating) => (
            <li key={rating}>
              <Link href={`/shop?rating=${encodeURIComponent(rating.split(" ")[0])}`} className="hover:underline">
                {rating}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {["Prestashop", "Magento", "Bigcommerce", "osCommerce", "Bags", "Accessories", "Jewelry", "Watches"].map((cat) => (
            <li key={cat}>
              <Link href={`/shop?category=${encodeURIComponent(cat)}`} className="hover:underline">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Price Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Price Filter</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>$0.00 - $50.00</li>
          <li>$50.00 - $100.00</li>
          <li>$100.00 - $150.00</li>
          <li>$150.00 - $200.00</li>
          <li>$200.00 - $250.00</li>
          <li>$250.00 +</li>
        </ul>
        <div className="mt-4">
          <input type="range" min="0" max="250" className="w-full" />
        </div>
      </div>
      {/* Filter & Color */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Filter & Color</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {["Orange", "Brown", "Green", "Purple", "Sky"].map((color) => (
            <li key={color}>
              <Link href={`/shop?color=${encodeURIComponent(color)}`} className="hover:underline">
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    color === "Orange"
                      ? "bg-orange-500"
                      : color === "Brown"
                      ? "bg-[#8B4513]"
                      : color === "Green"
                      ? "bg-green-600"
                      : color === "Purple"
                      ? "bg-purple-600"
                      : "bg-gray-500"
                  }`}
                ></span>
                {color}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ShopPage() {
  // viewMode state: "grid" or "list"
  const [viewMode, setViewMode] = useState("grid");
  const [perPage, setPerPage] = useState("12");
  const [sortBy, setSortBy] = useState("relevance");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      {/* Breadcrumb + Title */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500 mb-2">
            Home &gt; Pages &gt;{" "}
            <span className="text-pink-600">
              {viewMode === "grid" ? "Shop Grid" : "Shop List"}
            </span>
          </nav>
          <h1 className="text-3xl font-bold mb-1">
            {viewMode === "grid" ? "Shop Grid" : "Shop List"}
          </h1>
          <p className="text-gray-600">
            Home . Pages . {viewMode === "grid" ? "Shop Grid" : "Shop List"}
          </p>
        </div>
      </section>

      {/* Subheading */}
      <section className="py-6 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Ecommerce Accessories &amp; Fashion Item
          </h2>
          <p className="text-sm text-gray-500">
            About 9500 results (0.42 seconds)
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Per Page & Sort By */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Per Page:</span>
              <select
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
                className="border rounded px-2 py-1 focus:outline-none"
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-2 py-1 focus:outline-none"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          {/* View Mode Toggle & Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">View as:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-2 py-1 border rounded ${
                  viewMode === "grid"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-2 py-1 border rounded ${
                  viewMode === "list"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                List
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border rounded-l px-2 py-1 focus:outline-none"
              />
              <button className="bg-pink-600 text-white px-4 py-1 rounded-r">
                Q
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Conditional Sidebar + Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Render Sidebar only if viewMode is "list" */}
          {viewMode === "list" && (
            <aside className="w-full md:w-1/4">
              <ShopSidebar />
            </aside>
          )}
          {/* Products Section */}
          <section className={viewMode === "list" ? "w-full md:w-3/4" : "w-full"}>
            {viewMode === "grid" ? (
              // Grid View
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                {...fadeInUp}
              >
                {productsData.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-64 bg-[#F6F7FB] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-pink-600">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={14}
                            className={
                              star <= product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-2">
                        ${product.price.toFixed(2)}{" "}
                        <span className="text-sm line-through text-gray-400 ml-1">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      </p>
                      <Link
                        href={`/product-details/${product.id}`}
                        className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // List View
              <motion.div className="space-y-8" {...fadeInUp}>
                {productsData.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="md:w-1/3 h-48 md:h-auto bg-[#F6F7FB] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="md:w-2/3 p-4 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-2 text-pink-600">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={14}
                            className={
                              star <= product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-2">
                        ${product.price.toFixed(2)}{" "}
                        <span className="text-sm line-through text-gray-400 ml-1">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.excerpt}
                      </p>
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>
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
