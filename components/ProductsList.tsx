// app/components/ProductList.tsx

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type Product = {
  id: number;
  name: string;
  value_name_brand: string;
  category: string;
  subcategory: string;
  price: number;
  title: string;
};

const ProductList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const [limit] = useState(parseInt(searchParams.get('limit') || '10', 10));
  const [filters, setFilters] = useState({
    brand: searchParams.get('brand') || '',
    category: searchParams.get('category') || '',
    subcategory: searchParams.get('subcategory') || ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const query = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        ...filters
      });
      const response = await fetch(`/api/products?${query}`);
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    };

    fetchProducts();
  }, [page, limit, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1); // Reset page to 1 when filters change
  };

  const applyFilters = () => {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      ...filters
    });
    router.push(`/products?${params}`);
  };

  return (
    <div>
      <div>
        {/* Filtros */}
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={filters.brand}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="subcategory"
          placeholder="Subcategory"
          value={filters.subcategory}
          onChange={handleFilterChange}
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <div>
        {/* Lista de Produtos */}
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div>
        {/* Paginação */}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page * limit >= total}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
