import Image from 'next/image';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Hekto</h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              We're passionate about bringing modern, stylish furniture to your home
              at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description:
                  'Our team of furniture experts is here to help you find the perfect pieces.',
              },
              {
                icon: Award,
                title: 'Quality Products',
                description:
                  'We source only the highest quality materials for our furniture.',
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                description:
                  'Quick and reliable delivery service to get your furniture to you.',
              },
              {
                icon: ThumbsUp,
                title: 'Customer Satisfaction',
                description:
                  'We are committed to ensuring you are completely satisfied with your purchase.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Hekto has grown from a small local furniture store
                to a leading online destination for modern home furnishings. Our
                mission is to make beautiful, comfortable, and functional furniture
                accessible to everyone.
              </p>
              <p className="text-gray-600">
                We work directly with manufacturers to ensure the highest quality
                standards while keeping prices affordable. Our team carefully
                curates each piece in our collection to bring you the latest trends
                and timeless classics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}