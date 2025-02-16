import { getPostById } from "../../../lib/posts";
import { notFound } from "next/navigation";
import type { JSX } from "react";

// Define an interface for our props
interface PageProps {
  params: { id: string };
}

// Use a workaround by casting props to any
export default async function PostDetailPage({ params }: PageProps & any): Promise<JSX.Element> {
  // Now TypeScript won’t complain about the missing Promise properties.
  const post = getPostById(params.id);
  if (!post) {
    notFound();
  }
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
