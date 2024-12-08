import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden group"
        >
          <Link href={`/shop/${product.id}`}>
            <div className="relative h-64">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/shop/${product.id}`}>
              <h3 className="text-lg font-semibold text-purple-900 hover:text-purple-700">
                {product.name}
              </h3>
            </Link>
            <p className="text-pink-500 font-bold mt-2">${product.price}</p>
            <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}