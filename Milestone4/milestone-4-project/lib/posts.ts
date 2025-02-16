// lib/posts.ts
import { Post } from "../types";

let posts: Post[] = []; // In‑memory store (for demo only)

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function createPost(post: Omit<Post, "id" | "createdAt">): Post {
  const newPost: Post = {
    ...post,
    id: String(Date.now()),
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  return newPost;
}

export function updatePost(
  id: string,
  updated: Partial<Omit<Post, "id" | "createdAt" | "author">>
): Post | null {
  const post = getPostById(id);
  if (!post) return null;
  Object.assign(post, updated);
  return post;
}

export function deletePost(id: string): boolean {
  const initialLength = posts.length;
  posts = posts.filter((p) => p.id !== id);
  return posts.length < initialLength;
}
