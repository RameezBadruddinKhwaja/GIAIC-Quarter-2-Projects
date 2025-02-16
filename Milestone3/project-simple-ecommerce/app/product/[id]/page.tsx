'use client';

import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { CartContext } from '../../../context/CartContext';
import { Product } from '../../../types';
import { getProductById } from '../../../lib/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      const productId = Array.isArray(id) ? id[0] : id;
      const found = getProductById(productId);
      if (found) setProduct(found);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-8">Loading or Not Found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
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
