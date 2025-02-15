import { NextResponse } from 'next/server';
import { Product } from '../../../../types';

const products: Product[] = [
  {
    id: "1",
    name: "Product One",
    description: "This is a great product that you will love!",
    price: 29.99,
    image: "/images/product1.jpg",
  },
  {
    id: "2",
    name: "Product Two",
    description: "Experience quality and style with this product.",
    price: 39.99,
    image: "/images/product2.jpg",
  },
  {
    id: "3",
    name: "Product Three",
    description: "The perfect choice for everyday use.",
    price: 49.99,
    image: "/images/product3.jpg",
  },
];

export async function GET(
  request: Request,
  context: any // Workaround: bypass strict typing for context
) {
  // Ensure params is handled as a promise, whether it already is or not
  const { id } = await Promise.resolve(context.params);
  const product = products.find((p) => p.id === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}
