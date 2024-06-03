// components/Breadcrumb.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const Breadcrumb = () => {
  const pathname = usePathname();

  // Dividir a URL em partes
  const pathParts = pathname.split('/').filter((part) => part);

  // Não exibir o breadcrumb na página raiz
  if (pathParts.length === 0) {
    return null;
  }

  return (
    
      
    <nav aria-label="breadcrumb" className=" flex flex-col   items-center pt-8 justify-end  bg-black/50 text-primary h-[300px] sm:h-[400px] relative ">
      <Image src={'/autoparts2.jpg'}   objectFit='cover'  fill className='absolute z-[-2]' alt='banner'/>
     
      <div className='absolute inset-0  flex items-center pt-12 justify-center'>
      <div className='w-fit flex flex-col  items-center '>

      <span className='bg-primary text-white px-4 py-2 rounded-[30px] mb-4 font-poppins font-light w-fit'>Você está aqui <ArrowDown size={24} className='inline-block'/></span>
    <div className='flex  flex-wrap space-x-2 text-sm bg-white/100 text-[14px] font-poppins font-bold px-4 py-2 rounded-full'>
     
    
        
        <Link href="/">
    Home
      </Link>
      {pathParts.map((part, index) => {
        // Construir a URL parcial até o ponto atual
        const href = '/' + pathParts.slice(0, index + 1).join('/');

        // O último elemento não deve ser um link
        const isLast = index === pathParts.length - 1;

        return (
          <span key={href} className="flex items-center">
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="capitalize text-blue-500">{decodeURIComponent(part)}</span>
            ) : (
              <Link href={href}>
                {decodeURIComponent(part)}
              </Link>
            )}
          </span>
        );
      })}
        </div>
        </div>
      </div>
        
    </nav>
    
   
  );
};

export default Breadcrumb;
