'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative h-96">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? 'ring-2 ring-purple-600'
                        : 'opacity-75'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-purple-900">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-pink-500">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-900">Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-purple-600">
                  <Heart className="h-5 w-5 mr-1" />
                  Add to Wishlist
                </button>
                <button className="flex items-center text-gray-600 hover:text-purple-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}