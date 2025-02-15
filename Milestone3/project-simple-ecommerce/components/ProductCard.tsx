import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
