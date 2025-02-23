"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      code: "SOFA-001",
      price: 499.99,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      code: "TABLE-002",
      price: 799.99,
      image:
        "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      code: "CHAIR-003",
      price: 299.99,
      image:
        "https://images.pexels.com/photos/30768273/pexels-photo-30768273/free-photo-of-cozy-home-office-desk-with-computer-and-snacks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Luxury Bed",
      code: "BED-004",
      price: 899.99,
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Office Desk",
      code: "DESK-005",
      price: 399.99,
      image:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Bookshelf",
      code: "BOOK-006",
      price: 199.99,
      image:
        "https://images.pexels.com/photos/271637/pexels-photo-271637.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      name: "Accent Chair",
      code: "CHAIR-007",
      price: 249.99,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      name: "Coffee Table",
      code: "TABLE-008",
      price: 159.99,
      image:
        "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={`Product ${product.id}`}
              width={300}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">Code - {product.code}</p>
              <p className="text-purple-600 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
