'use client';

import { useState } from 'react';

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const categories = ['All', 'Chairs', 'Tables', 'Sofas', 'Beds', 'Storage'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Price Range
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-24 px-2 py-1 border rounded"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-24 px-2 py-1 border rounded"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
}