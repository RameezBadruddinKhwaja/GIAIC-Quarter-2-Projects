import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Product One',
    description: 'This is a great product that you will love!',
    price: 29.99,
    image: '/images/product1.jpg',
  },
  {
    id: '2',
    name: 'Product Two',
    description: 'Experience quality and style with this product.',
    price: 39.99,
    image: '/images/product2.jpg',
  },
  {
    id: '3',
    name: 'Product Three',
    description: 'The perfect choice for everyday use.',
    price: 49.99,
    image: '/images/product3.jpg',
  },
];

// Return all products
export function getAllProducts(): Product[] {
  return products;
}

// Return a single product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
