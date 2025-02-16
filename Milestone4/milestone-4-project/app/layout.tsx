// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";

export const metadata = {
  title: "Blog Platform",
  description: "A fully-functional blog platform with user auth",
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
                <span className="font-bold text-xl cursor-pointer">My Blog</span>
              </Link>
              <nav className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/create">Create Post</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-200 text-center py-4 mt-auto">
            <p className="text-gray-600">© 2025 My Blog Inc.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
