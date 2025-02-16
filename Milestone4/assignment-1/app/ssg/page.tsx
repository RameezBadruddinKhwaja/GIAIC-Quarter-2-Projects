import { Post } from '../../types';

export const revalidate = 60; 
// Next.js will generate static HTML and revalidate every 60s

export default async function SsgPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SSG Posts (revalidate 60s)</h1>
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
