import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600">404</h1>
        <h2 className="text-2xl font-semibold text-purple-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you&apos;sre looking for doesn&apos;st exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 mt-8 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          <Home className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}