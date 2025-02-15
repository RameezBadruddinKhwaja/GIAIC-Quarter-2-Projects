'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '../../../context/CartContext';
import { Product } from '../../../types';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product)
    return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
