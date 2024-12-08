import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Lounge Chair',
    description: 'Elegant and comfortable lounge chair perfect for any living room.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91',
    ],
    category: 'chairs',
    features: ['Ergonomic design', 'Premium fabric', 'Sturdy construction'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Coffee Table',
    description: 'Sleek coffee table with modern design and ample storage.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d',
    ],
    category: 'tables',
    features: ['Tempered glass top', 'Hidden storage', 'Easy assembly'],
    inStock: true,
  },
  // Add more products...
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2024 Interior Design Trends',
    excerpt: 'Discover the latest trends in interior design for 2024.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Jane Smith',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    category: 'Interior Design',
  },
  // Add more blog posts...
];