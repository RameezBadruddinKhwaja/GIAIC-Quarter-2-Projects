"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

type Post = {
  slug: string;
  title: string;
  content: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "first-post",
    title: "My First Post",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut eros vel ex pharetra consectetur. Quisque auctor, velit vitae maximus finibus, ex justo tincidunt nunc, non tincidunt justo libero sed mauris. Vivamus non tincidunt nisi. Donec ut neque sed nunc vehicula facilisis.`,
    date: "2023-09-01",
  },
  {
    slug: "nextjs-tips",
    title: "Next.js Tips and Tricks",
    content:
      "Next.js offers a lot of cool features including dynamic routing, server-side rendering, and more. Here are some tips...",
    date: "2023-09-05",
  },
  {
    slug: "react-state-management",
    title: "Understanding React State Management",
    content:
      "Managing state in React can be challenging. In this post, we explore various approaches and best practices.",
    date: "2023-09-10",
  },
];

type Comment = {
  id: number;
  name: string;
  text: string;
};

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts.find((p) => p.slug === slug);

  // Comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName.trim() === "" || commentText.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      name: commentName,
      text: commentText,
    };

    setComments([...comments, newComment]);
    setCommentName("");
    setCommentText("");
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <div className="prose dark:prose-dark">
          <p>{post.content}</p>
        </div>
      </motion.div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="mb-4">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded"
              >
                <p className="font-semibold">{comment.name}</p>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleCommentSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="text" className="block font-medium mb-1">
              Comment
            </label>
            <textarea
              id="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
