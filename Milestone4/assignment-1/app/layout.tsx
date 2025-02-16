import './globals.css';
import { Providers } from './providers';
import Link from 'next/link';

export const metadata = {
  title: 'Next.js SSR/SSG Auth Demo',
  description: 'Example with SSR, SSG, and basic auth using Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Providers>
          <header className="bg-blue-700 text-white py-4 shadow">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link href="/">
                <span className="font-bold text-xl cursor-pointer">My App</span>
              </Link>
              <nav className="space-x-4">
                <Link href="/">
                  <span className="hover:underline cursor-pointer">SSR</span>
                </Link>
                <Link href="/ssg">
                  <span className="hover:underline cursor-pointer">SSG</span>
                </Link>
                <Link href="/protected">
                  <span className="hover:underline cursor-pointer">
                    Protected
                  </span>
                </Link>
                <Link href="/login">
                  <span className="hover:underline cursor-pointer">Login</span>
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-200 text-center py-4 mt-auto">
            <p className="text-gray-600">© 2025 My App Inc.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
