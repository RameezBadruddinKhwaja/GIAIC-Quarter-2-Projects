"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dynamic Blog</h1>
      <p className="mb-8">Discover interesting articles and share your thoughts.</p>
      <Link
        href="/blog"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Blog
      </Link>
    </motion.div>
  );
}
