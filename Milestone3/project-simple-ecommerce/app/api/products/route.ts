import { NextResponse } from 'next/server';
import { getAllProducts } from '../../../lib/products';

export async function GET() {
  const allProducts = getAllProducts();
  return NextResponse.json(allProducts);
}
