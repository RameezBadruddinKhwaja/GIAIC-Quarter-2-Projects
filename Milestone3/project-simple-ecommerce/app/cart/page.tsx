'use client';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* If cart is empty, display a message */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* Map through cart items */}
          {cartItems.map((item, index) => (
            // Use a composite key to ensure uniqueness
            <div
              key={`${item.id}-${index}`}
              className="flex items-center bg-white rounded-lg shadow p-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded"
                />
              </div>
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Display total price */}
          <div className="text-right text-2xl font-bold mt-4">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
