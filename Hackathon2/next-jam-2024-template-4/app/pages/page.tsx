import Image from 'next/image'
import Link from 'next/link'

export default function Pages() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">All Pages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: "Blog", link: "/blog" },
          { name: "Shop", link: "/shop" },
          { name: "Contact", link: "/contact" },
          { name: "About Us", link: "/about" },
          { name: "FAQ", link: "/faq" },
          { name: "404 Not Found", link: "/404" },
        ].map((page, index) => (
          <Link href={page.link} key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">{page.name}</h2>
            <p className="text-gray-600 mb-4">Visit the {page.name} page to explore more.</p>
            <span className="text-purple-600 font-semibold">View Page →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
