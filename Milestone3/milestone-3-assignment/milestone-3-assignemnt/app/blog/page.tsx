"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "first-post",
    title: "My First Post",
    excerpt:
      "This is the excerpt for my first post. It gives an overview of what the post is about.",
    date: "2023-09-01",
  },
  {
    slug: "nextjs-tips",
    title: "Next.js Tips and Tricks",
    excerpt: "Explore some useful tips and tricks for working with Next.js.",
    date: "2023-09-05",
  },
  {
    slug: "react-state-management",
    title: "Understanding React State Management",
    excerpt:
      "Learn how to manage state effectively in your React applications.",
    date: "2023-09-10",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
