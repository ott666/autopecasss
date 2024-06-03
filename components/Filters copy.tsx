// components/Filters.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FiltersProps = {
  brands: string[];
  categories: string[];
  subcategories: string[];
  selectedBrand: string;
  selectedCategory: string;
  selectedSubcategory: string;
};

export default function Filters({
  brands,
  categories,
  subcategories,
  selectedBrand,
  selectedCategory,
  selectedSubcategory
}: FiltersProps) {
  const router = useRouter();
  const [brand, setBrand] = useState(selectedBrand);
  const [category, setCategory] = useState(selectedCategory);
  const [subcategory, setSubcategory] = useState(selectedSubcategory);

  useEffect(() => {
    const query = new URLSearchParams();

    if (brand) {
      query.set('brand', brand);
    }
    if (category) {
      query.set('category', category);
    }
    if (subcategory) {
      query.set('subcategory', subcategory);
    }

    const queryString = query.toString();
    const path = `/products${queryString ? `?${queryString}` : ''}`;
    router.push(path);
  }, [brand, category, subcategory]);

  return (
    <div className='bg-black p-4 flex flex-col lg:max-w-[224px]'>
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option className='capitalize' key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option className='capitalize' key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
        <option value="">All Subcategories</option>
        {subcategories.map((subcategory) => (
          <option className='capitalize' key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>
    </div>
  );
}
