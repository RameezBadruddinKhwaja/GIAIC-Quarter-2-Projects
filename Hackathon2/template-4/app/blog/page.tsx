import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} · {post.author}
                </div>
                <h2 className="text-xl font-semibold text-purple-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}