import './globals.css';
import Link from 'next/link';
import { Providers } from './providers';

export const metadata = {
  title: 'E-Commerce',
  description: 'A basic e-commerce site built with Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Providers>
          {/* HEADER */}
          <header className="bg-gray-800 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
              <Link href="/">
                <span className="text-2xl font-bold cursor-pointer">
                  E-Commerce
                </span>
              </Link>
              <nav>
                <Link href="/">
                  <span className="mr-4 hover:underline cursor-pointer">
                    Home
                  </span>
                </Link>
                <Link href="/cart">
                  <span className="hover:underline cursor-pointer">Cart</span>
                </Link>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT: flex-grow pushes footer to the bottom */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="bg-gray-800 text-center py-4 mt-8 text-gray-400">
            <p>© 2025 E-Commerce Inc.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
