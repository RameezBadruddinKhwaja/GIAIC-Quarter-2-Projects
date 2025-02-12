import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Blog",
  description: "A dynamic blog built with Next.js 15 and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header / Navigation */}
        <header className="bg-gray-200 dark:bg-gray-800 py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-xl font-bold">
              Dynamic Blog
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="py-4 bg-gray-200 dark:bg-gray-800 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dynamic Blog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
