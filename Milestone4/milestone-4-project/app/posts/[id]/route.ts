// app/posts/[id]/route.ts
import { NextResponse } from 'next/server';
import { getPostById, updatePost, deletePost } from '../../../lib/posts';

// Workaround: cast context to any to bypass the strict type-checking
export async function GET(request: Request, context: any) {
  // Ensure we await the context.params in case it is a promise
  const { id } = await Promise.resolve(context.params);
  const post = getPostById(id);
  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}

export async function PUT(request: Request, context: any) {
  const { id } = await Promise.resolve(context.params);
  const { title, content } = await request.json();
  const updated = updatePost(id, { title, content });
  if (updated) {
    return NextResponse.json(updated);
  } else {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}

export async function DELETE(request: Request, context: any) {
  const { id } = await Promise.resolve(context.params);
  const success = deletePost(id);
  if (success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
