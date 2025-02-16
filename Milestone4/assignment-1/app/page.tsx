import { Post } from '../types';

export const dynamic = 'force-dynamic'; 


export default async function HomePage() {
  // SSR: fetch on every request
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SSR Posts</h1>
      <ul className="space-y-2">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border p-2 rounded bg-white">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
