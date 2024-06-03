// app/products/page.tsx
'use client';
import { Suspense } from 'react';
import FetchProducts from '@/components/FetchProducts';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';
import SearchBar from '@/components/SearchBar';
import { Product } from '@/types/products';
import { CardProduct1 } from '@/components/cards/CardProduct1';
import { Container } from '@/components/Container';

const ProductsContent: React.FC<{
  products: Product[];
  total: number;
  page: number;
  limit: number;
}> = ({ products, total, page, limit }) => {
  return (
    <div>
      <ul className='grid place-content-center gap-2 sm:gap-4 min-[411px]:grid-cols-2 sm:grid-cols-3 min-[1440px]:grid-cols-5 justify-items-stretch'>
        {products.map((product) => (
          <CardProduct1 key={product.id} product={product} />
        ))}
      </ul>
      <Pagination total={total} page={page} limit={limit} />
    </div>
  );
};

export default function ProductsPage() {
  return (
    <Container className='bg-[#F2F3F4] pt-3 pb-0'>
      <div className='lg:flex lg:gap-[32px]'>
        <div className='flex flex-col gap-2 py-3 lg:py-0'>
          <SearchBar />
          <Suspense fallback={<p>Loading filters...</p>}>
            <FetchProducts>
              {({ brands, categories, subcategories, brand, category, subcategory }) => (
                <Filters
                  brands={brands}
                  categories={categories}
                  subcategories={subcategories}
                  selectedBrand={brand}
                  selectedCategory={category}
                  selectedSubcategory={subcategory}
                />
              )}
            </FetchProducts>
          </Suspense>
        </div>

        <Suspense fallback={<p>Loading products...</p>}>
          <FetchProducts>
            {({ products, total, page, limit }) => (
              <ProductsContent products={products} total={total} page={page} limit={limit} />
            )}
          </FetchProducts>
        </Suspense>
      </div>
    </Container>
  );
}
