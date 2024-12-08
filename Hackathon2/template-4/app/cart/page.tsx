'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { productId: '1', quantity: 2 },
    { productId: '2', quantity: 1 },
  ]);

  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Start shopping to add items to your cart
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {cartProducts.map((item) => (
                    <li key={item.productId} className="p-6">
                      <div className="flex items-center">
                        <div className="relative h-24 w-24 flex-shrink-0">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.product.name}
                            </h3>
                            <p className="text-lg font-medium text-gray-900">
                              ${item.product.price}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center border rounded">
                              <button className="px-3 py-1 border-r hover:bg-gray-100">
                                -
                              </button>
                              <span className="px-4 py-1">{item.quantity}</span>
                              <button className="px-3 py-1 border-l hover:bg-gray-100">
                                +
                              </button>
                            </div>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="text-gray-900">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="text-gray-900">${shipping.toFixed(2)}</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <p className="text-lg font-medium text-gray-900">Total</p>
                    <p className="text-lg font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}