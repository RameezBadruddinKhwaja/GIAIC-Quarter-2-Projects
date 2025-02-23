import Image from "next/image"

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 8].map((item) => (
          <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt={`Product ${item}`} width={300} height={300} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Code - Y523201</p>
              <p className="text-purple-600 font-bold">$42.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

