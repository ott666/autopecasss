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
  const [brand, setBrand] = useState<string | null>(selectedBrand);
  const [category, setCategory] = useState<string | null>(selectedCategory);
  const [subcategory, setSubcategory] = useState<string | null>(selectedSubcategory);

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

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBrand(value === brand ? null : value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategory(value === category ? null : value);
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubcategory(value === subcategory ? null : value);
  };

  return (
    <div className='flex font-poppins flex-col lg:max-w-[280px] gap-[10px] lg:w-full min-[1440px]:max-w-[224px]'>
      <Accordion type='single' className='px-4 py-0 bg-white' collapsible>
        <AccordionItem className='border-0' value="brands">
          <AccordionTrigger >Marcas</AccordionTrigger>
          <AccordionContent className='flex flex-col'>
            {brands.map((brandItem) => (
              <label key={brandItem} className='capitalize flex flex-row-reverse justify-between py-3'>
                <input 
                  type='checkbox' 
                  value={brandItem} 
                  checked={brandItem === brand} 
                  onChange={handleBrandChange}
                  className='mr-2'
                />
                {brandItem}
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type='single' className='px-4 py-0 bg-white' collapsible>
        <AccordionItem className='border-0' value="categories">
          <AccordionTrigger>Categorias</AccordionTrigger>
          <AccordionContent className='flex flex-col'>
            {categories.map((categoryItem) => (
              <label key={categoryItem} className='capitalize flex flex-row-reverse justify-between py-3'>
                <input 
                  type='checkbox' 
                  value={categoryItem} 
                  checked={categoryItem === category} 
                  onChange={handleCategoryChange}
                  className='mr-2'
                />
                {categoryItem}
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type='single' className='px-4 py-0 bg-white' collapsible>
        <AccordionItem className='border-0' value="subcategories">
          <AccordionTrigger>Subcategorias</AccordionTrigger>
          <AccordionContent className='flex flex-col'>
            {subcategories.map((subcategoryItem) => (
              <label key={subcategoryItem} className='capitalize flex flex-row-reverse justify-between py-3'>
                <input 
                  type='checkbox' 
                  value={subcategoryItem} 
                  checked={subcategoryItem === subcategory} 
                  onChange={handleSubcategoryChange}
                  className='mr-2'
                />
                {subcategoryItem}
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
