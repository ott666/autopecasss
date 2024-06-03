// ProductList.tsx
import React from 'react';
import { Product } from '@/types/products';
import { CardProduct1 } from '@/components/cards/CardProduct1';
import Pagination from '@/components/Pagination';

interface ProductListProps {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

const ProductList: React.FC<ProductListProps> = ({ products, total, page, limit }) => {
  return (
    <><div className='flex flex-col'>

    
      <ul className='grid gap-2 sm:gap-4 min-[411px]:grid-cols-2 sm:grid-cols-3 min-[1440px]:grid-cols-5 justify-items-stretch'>
        {products.map((product) => (
          <CardProduct1 key={product.id} product={product} />
        ))}
      </ul>
      <Pagination total={total} page={page} limit={limit} />
      </div>
    </>
  );
};

export default ProductList;