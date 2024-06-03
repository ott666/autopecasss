// /app/api/products/route.ts
import { NextResponse } from 'next/server';
import products from '@/data/anuncios_atualizados.json';
import { Product } from '@/types/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const value_name_brand = searchParams.get('brand')?.toLowerCase();
  const category = searchParams.get('category')?.toLowerCase();
  const subcategory = searchParams.get('subcategory')?.toLowerCase();
  const search = searchParams.get('search')?.toLowerCase();

  let filteredProducts = products as Product[];

  if (value_name_brand) {
    filteredProducts = filteredProducts.filter(product => product.value_name_brand.toLowerCase() === value_name_brand);
  }

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category);
  }

  if (subcategory) {
    filteredProducts = filteredProducts.filter(product => {
      if (Array.isArray(product.subcategory)) {
        return product.subcategory.map(sc => sc.toLowerCase()).includes(subcategory);
      }
      if (typeof product.subcategory === 'string') {
        return product.subcategory.toLowerCase() === subcategory;
      }
      return false;
    });
  }

  if (search) {
    const searchWords = search.split(' ').filter(word => word);
    filteredProducts = filteredProducts.filter(product => {
      const titleWords = product.title.toLowerCase().split(' ').filter(word => word);
      return searchWords.every(word => titleWords.includes(word));
    });
  }

  const total = filteredProducts.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = filteredProducts.slice(start, end);

  const brands = Array.from(new Set(filteredProducts.map(product => product.value_name_brand)));
  const categories = Array.from(new Set(filteredProducts.map(product => product.category)));
  const subcategories = Array.from(new Set(filteredProducts.flatMap(product => product.subcategory)));

  return NextResponse.json({
    total,
    page,
    limit,
    products: paginatedProducts,
    brands,
    categories,
    subcategories,
  });
}
