// components/Pagination.tsx
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  total: number;
  page: number;
  limit: number;
};

export default function Pagination({ total, page, limit }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className='bg-primary w-full p-4 rounded-r-[7px] font-bold text-white font-poppins items-center flex gap-[10px]'>
      {page > 1 && (
        <button className='border-white bg-white text-primary border p-2 hover:bg-primary hover:text-white  rounded-[15px]' onClick={() => handlePageChange(page - 1)}>Anterior</button>
      )}
      <span className='border-white bg-white text-primary border p-2  hover:bg-primary hover:text-white rounded-[15px]'>{` Pág. ${page} de ${totalPages} `}</span>
      {page < totalPages && (
        <button className='border-white border p-2  bg-white text-primary  hover:bg-primary hover:text-white rounded-[15px]' onClick={() => handlePageChange(page + 1)}>Próxima</button>
      )}
    </div>
  );
}
