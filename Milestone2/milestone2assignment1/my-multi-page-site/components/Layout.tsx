import Link from 'next/link';
import { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => (
  <div className="container">
    <nav className="navbar">
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/about" className="nav-link">About</Link>
      <Link href="/contact" className="nav-link">Contact</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
