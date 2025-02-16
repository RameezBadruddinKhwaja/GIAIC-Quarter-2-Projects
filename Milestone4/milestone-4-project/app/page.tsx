// app/page.tsx
import { getAllPosts } from "../lib/posts";
import Link from "next/link";
import { Post } from "../types";

export default function HomePage() {
  const posts: Post[] = getAllPosts(); // For demo: direct import; replace with API fetch for production

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.length === 0 && <p>No posts available.</p>}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded bg-white">
            <Link href={`/post/${post.id}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600">
              By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
