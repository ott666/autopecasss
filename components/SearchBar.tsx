// components/SearchBar.tsx
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams();

    if (debouncedSearch) {
      query.set('search', debouncedSearch);
    }

    const queryString = query.toString();
    const path = `/products${queryString ? `?${queryString}` : ''}`;
    router.push(path);
  }, [debouncedSearch]);

  return (
    <input
    className='px-4 py-2 w-full text-[14px]'
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Pesquisar produtos"
    />
  );
}
