import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-48 h-48">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <Link href={`/shop/${product.id}`}>
                <h3 className="text-xl font-semibold text-purple-900 hover:text-purple-700">
                  {product.name}
                </h3>
              </Link>
              <p className="text-pink-500 font-bold mt-2">${product.price}</p>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <button className="mt-4 flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}