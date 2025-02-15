import ProductCard from '../components/ProductCard';
import { Product } from '../types';


export default async function HomePage() {
  
  const res = await fetch('/api/products', { cache: 'no-store' });
  const products: Product[] = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
