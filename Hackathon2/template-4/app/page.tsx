import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-purple-50">
      {/* Hero Section */}
      <section className="relative bg-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900">
                New Furniture Collection Trends in 2024
              </h1>
              <p className="text-lg text-purple-700">
                Discover our latest collection of modern and trendy furniture pieces
                that will transform your space.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5"
                alt="Modern chair"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-156701643277${item}-094069958ea5`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-900">
                    Modern Chair
                  </h3>
                  <p className="text-pink-500 font-bold mt-2">$299.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              'Free Shipping',
              '24/7 Support',
              'Money Back Guarantee',
              'Secure Payment',
            ].map((feature) => (
              <div
                key={feature}
                className="text-center p-6 bg-purple-50 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {feature}
                </h3>
                <p className="text-purple-700">
                  We ensure the best shopping experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}