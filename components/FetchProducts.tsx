// FetchProducts.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '@/types/products';

interface FetchProductsProps {
  children: (data: {
    products: Product[];
    total: number;
    brands: string[];
    categories: string[];
    subcategories: string[];
    page: number;
    limit: number;
    brand: string;
    category: string;
    subcategory: string;
    search: string;
  }) => React.ReactNode;
}

const FetchProducts: React.FC<FetchProductsProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const brand = searchParams.get('brand') || '';
  const category = searchParams.get('category') || '';
  const subcategory = searchParams.get('subcategory') || '';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `/api/products?page=${page}&limit=${limit}&brand=${brand}&category=${category}&subcategory=${subcategory}&search=${search}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
      setBrands(data.brands);
      setCategories(data.categories);
      setSubcategories(data.subcategories);
    };

    fetchProducts();
  }, [page, limit, brand, category, subcategory, search]);

  return (
    <>
      {children({
        products,
        total,
        brands,
        categories,
        subcategories,
        page,
        limit,
        brand,
        category,
        subcategory,
        search,
      })}
    </>
  );
};

export default FetchProducts;
