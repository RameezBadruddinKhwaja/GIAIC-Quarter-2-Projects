"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

const cartItemsData = [
  {
    id: 1,
    name: "Duum consequat",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Praon pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; 
  const total = subtotal + shipping;


  const incrementQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleUpdateCart = () => {
    
    alert("Cart updated!");
  };

  const handleClearCart = () => {
    
    alert("Cart cleared!");
  };

  const handleCheckout = () => {
    
    alert("Proceed to checkout!");
  };

  const handleCalculateShipping = () => {
   
    alert("Shipping calculated!");
  };

  return (
    <div className="w-full">
      {/* Breadcrumb + Title */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-2 text-gray-500">
            Home &gt; Pages &gt; <span className="text-pink-600">Shopping Cart</span>
          </nav>
          <h1 className="text-3xl font-bold mb-1">Shopping Cart</h1>
          <p className="text-gray-600">Home . Pages . shopping cart</p>
        </div>
      </section>

      {/* Table & Totals */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Cart Table */}
          <motion.div
            className="lg:w-2/3 bg-white p-6 rounded shadow-md overflow-auto"
            {...fadeInUp}
          >
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b">
                  <th className="py-4 font-semibold text-gray-700">Product</th>
                  <th className="py-4 font-semibold text-gray-700">Price</th>
                  <th className="py-4 font-semibold text-gray-700">Quantity</th>
                  <th className="py-4 font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const lineTotal = item.price * item.quantity;
                  return (
                    <tr key={item.id} className="border-b">
                      {/* Product Column */}
                      <td className="py-4">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded mr-4 object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Color: {item.color} <br />
                              Size: {item.size}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Price */}
                      <td className="py-4">
                        <span className="text-gray-700">${item.price.toFixed(2)}</span>
                      </td>
                      {/* Quantity */}
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => decrementQty(item.id)}
                            className="border border-gray-300 rounded-l px-2 py-1 hover:bg-gray-200"
                          >
                            <FaMinus size={12} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="border-t border-b w-12 text-center"
                          />
                          <button
                            onClick={() => incrementQty(item.id)}
                            className="border border-gray-300 rounded-r px-2 py-1 hover:bg-gray-200"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </td>
                      {/* Total */}
                      <td className="py-4 font-semibold text-gray-800">
                        ${lineTotal.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Update & Clear Cart */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleUpdateCart}
                className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
              >
                Update Curt
              </button>
              <button
                onClick={handleClearCart}
                className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
              >
                Clear Curt
              </button>
            </div>
          </motion.div>

          {/* Sidebar: Cart Totals & Calculate Shipping */}
          <motion.div
            className="lg:w-1/3 flex flex-col space-y-6"
            {...fadeInUp}
          >
            {/* Cart Totals */}
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotals</span>
                <span className="font-semibold text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax/Shipping</span>
                <span className="font-semibold text-gray-800">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-2 rounded mt-6 hover:bg-green-600 transition"
              >
                Proceed To Checkout
              </button>
            </div>

            {/* Calculate Shipping */}
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">Calculate Shopping</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full border rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Mirpur Dhaka - 1200"
                    className="w-full border rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleCalculateShipping}
                  className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition w-full"
                >
                  Calculate Shipping
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
