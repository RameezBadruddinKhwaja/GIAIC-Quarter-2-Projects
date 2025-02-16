// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { getAllPosts, createPost } from "../../lib/posts";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  // Check for a simple Authorization header (for demo only)
  const auth = request.headers.get("Authorization");
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content, author } = await request.json();
  const newPost = createPost({ title, content, author });
  return NextResponse.json(newPost);
}
