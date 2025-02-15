import ProductCard from '../components/ProductCard';
import { Product } from '../types';

export default async function HomePage() {
  // Fetch products from your API
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  const products: Product[] = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      {/* 
        Use Tailwind’s breakpoint classes for a responsive grid:
        - 1 column on extra small devices
        - 2 columns on small devices (>=640px)
        - 3 columns on medium devices (>=768px) and up
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
