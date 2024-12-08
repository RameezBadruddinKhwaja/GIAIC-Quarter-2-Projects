'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/blog', label: 'Blog' },
    { href: '/pages', label: 'Pages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-purple-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Hekto
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:bg-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="text-white hover:text-purple-200">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/account" className="text-white hover:text-purple-200">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-purple-600">
              <div className="flex items-center px-5 space-x-4">
                <Link
                  href="/cart"
                  className="text-white hover:text-purple-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="h-6 w-6" />
                </Link>
                <Link
                  href="/account"
                  className="text-white hover:text-purple-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}