// app/edit/[id]/page.tsx
"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import { AuthContext } from "../../../context/AuthContext";

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/posts/${id}`);
      if (res.ok) {
        const post = await res.json();
        setTitle(post.title);
        setContent(post.content);
      }
    }
    fetchPost();
  }, [id]);

  if (!user) {
    router.push("/login");
    return <p>Redirecting...</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      router.push(`/post/${id}`);
    } else {
      alert("Failed to update post");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Content</label>
          <textarea
            className="w-full border p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Post
        </button>
      </form>
    </div>
  );
}
