'use client';

import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Calendar, User, Tag } from 'lucide-react';

interface PageProps {
  params: { id: string };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="bg-purple-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {post.category}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-purple-900 mb-6">
              {post.title}
            </h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">{post.content}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
