import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rameez Portfolio",
  description: "Portfolio of Rameez Badruddin Khwaja, Full-Stack Engineer in Training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header / Navigation */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Rameez
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-700 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 py-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            &copy; {new Date().getFullYear()} Rameez Badruddin Khwaja. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
