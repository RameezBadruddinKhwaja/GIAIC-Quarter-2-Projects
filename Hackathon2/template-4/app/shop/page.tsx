'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import ProductGrid from '@/components/shop/ProductGrid';
import ProductList from '@/components/shop/ProductList';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { Grid, List } from 'lucide-react';

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-900">Shop</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid' ? 'bg-purple-200' : 'bg-white'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list' ? 'bg-purple-200' : 'bg-white'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {showSidebar && (
            <div className="w-full md:w-64">
              <FilterSidebar />
            </div>
          )}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <ProductGrid products={products} />
            ) : (
              <ProductList products={products} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}