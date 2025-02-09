import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center bg-gray-100">
      <nav className="bg-blue-500 text-white py-4 w-full">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <main className="flex-1 flex flex-col justify-center items-center p-8 w-full">{children}</main>
      <footer className="bg-gray-900 text-white py-4 w-full">&copy; 2025 My Website</footer>
    </div>
  );
};
export default Layout;
