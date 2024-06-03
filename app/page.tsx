'use client'
import MarcasData from '@/data/marcas.json'
import produtosDestacados from '@/data/destaques.json'
import { ArrowRight, LayoutList, Star } from 'lucide-react';
import { MarcasSct } from "@/components/Sections/MarcasSct";
import { Banners } from "@/components/Banners";
import { Container } from "@/components/Container";
import { SliderProdutos } from '@/components/SliderProducts/SliderProducts';
import SliderCategorias from '@/components/SliderCategorys';
import Link from 'next/link';
import Image from 'next/image';
import SliderBanner from '@/components/SliderBanners';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const marcasDestacadas = MarcasData.slice(0,8)

export default function Home() {
  return (
   <main className="bg-primary">
    <section id='hero' className='py-0 pt-8'>
      <Container className='px-0 lg:px-0'>

    <Carousel opts={{loop:true}} className='hidden lg:flex'>
    
    <CarouselContent className=''>
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/1568x400Azul.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/1568x400Amarelo.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/1568x400Azul2.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
          </div></CarouselItem>
  
       
      </CarouselContent>


  
      <CarouselPrevious className='z-[2]' />
    <CarouselNext className='z-[2]' />
  
</Carousel>
<Carousel opts={{loop:true}} className='lg:hidden'>
    

      <CarouselContent className=''>
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/640x295Azul.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/640x295Amarelo.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/sliderHero/640x295Azul2.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
      
       
      </CarouselContent>

  
      <CarouselPrevious />
    <CarouselNext />
  
</Carousel>
      </Container>

    </section>

    <Container className=" flex items-center bg-[#082477] py-[16px]">
          <h3 className="uppercase font-poppins text-[.875rem] lg:text-[1.25rem] text-white font-bold">destaque semanal</h3>
    </Container>
    <Container id='carousel1' className='pr-0 bg-white pt-3'>
      <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
      <Link className='uppercase flex justify-center lg:justify-end text-[0.75rem] lg:font-bold lg:text-[.875rem] text-center gap-[10px] pt-[10px] items-center font-poppins font-semibold text-primary ' href={'/'}>ver todos <ArrowRight size={24}/></Link>
    </Container>

    <Container id='banners' className='bg-white'>
        <Banners/>
    </Container>

    <MarcasSct id='marcas' marcas={marcasDestacadas} title="Marcas Recomendadas" />

    <Container className=' bg-white pt-3'>
      <div className='flex justify-between items-center py-5'>
        <div className='flex items-center gap-[5px]'>
          <Star size={20}/>
          <h2 className='text-[16px]  uppercase text-[#42464d] font-bold font-poppins sm:text-[1.45rem] lg:text-[1.25rem]'>
            Produtos destacados
          </h2>
        </div>
      <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
      </div>
      <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
    </Container>

    <Container id='categorias' className='bg-white py-4'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-[5px]'>
          <LayoutList size={22}/>
          <h2 className='uppercase font-bold text-[1rem] text-[#42464d] leading-[.875rem] font-poppins '>categorias</h2>
        </div>
          <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
      </div>

      <SliderCategorias/>
    </Container>
    
    <Container className='bg-white hidden min-[600px]:block'>

      <Image src={'/banners/sliderHero/1568x400Amarelo.png'} width={1504} height={248} layout='responsive' alt='banner'/>
    </Container>

    <Container className=' bg-white pt-3 lg:flex lg:justify-between lg:pt-10 '>
      <div className='lg:w-[75%] lg:px-4'>
        <div className='flex justify-between items-center py-5 lg:pt-0'>
          <div className='flex items-center gap-[5px]'>
            <Star size={20}/>
            <h2 className='text-[16px]  uppercase text-[#42464d] font-bold font-poppins sm:text-[1.45rem] lg:text-[1.25rem]'>
              Produtos destacados
            </h2>
          </div>
          <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
        </div>
        <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
        <div className='flex justify-between items-center py-5 lg:pt-14'>
          <div className='flex items-center gap-[5px]'>
            <Star size={20}/>
            <h2 className='text-[16px]  uppercase text-[#42464d] font-bold font-poppins sm:text-[1.45rem] lg:text-[1.25rem]'>
              Produtos destacados
            </h2>
          </div>
          <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
        </div>
        <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
      </div>
      <div className='hidden lg:flex lg:flex-col lg:items-center lg:justify-between lg:w-[23%] '>
        <Link href={'/products?category=motor'}>
        <Image width={350} height={300} objectFit='cover' src={'/banners/components/motoresAzul.png'} alt='banner'/>
        </Link>
        <Link href={'/products?category=parabrisa'}>
        <Image width={350} height={300} objectFit='cover' src={'/banners/components/parabrisasLaranja.png'} alt='banner'/>
        </Link>
        <Link href={'/products?category=retrovisor'}>
        <Image width={350} height={300} objectFit='cover' src={'/banners/components/retrovisoresAzul.png'} alt='banner'/>
        </Link>
      </div>
    </Container>

    <Container className='bg-white pt-3'>
    <SliderBanner/>
   </Container>

    <Container className='bg-white pt-10'>
      <div className='flex justify-between items-center py-5 lg:pt-0'>
        <div className='flex items-center gap-[5px]'>
          <Star size={20}/>
          <h2 className='text-[16px]  uppercase text-[#42464d] font-bold font-poppins sm:text-[1.45rem] lg:text-[1.25rem]'>
            Produtos destacados
          </h2>
        </div>
        <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
      </div>
      <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
    </Container>

   

   <Container className='bg-white py-3'>
    <div className='flex flex-col min-[600px]:flex-row min-[600px]:justify-between w-full gap-[16px]'>
      <div className='flex flex-col w-full max-w-[480px]'>
        <Image src={'/banners/components/bannertriplo/480x210Azul.png'} alt='banner' width={480} height={210} layout='responsive'/>
        <div className='p-[16px] hidden'>
          <p className='text-[14px] font-poppins'>Lorem ipsum dolor sit amet.</p>
          <p className='text-[10px] font-poppins'>Lorem ipsum dolor sit amet.</p>
        </div>     
      </div>
      <div className='flex flex-col w-full max-w-[480px]'>
        <Image src={'/banners/components/bannertriplo/480x210Azul2.png'} alt='banner' width={480} height={210} layout='responsive'/>
        <div className='p-[16px] hidden'>
          <p className='text-[14px] font-poppins'>Lorem ipsum dolor sit amet.</p>
          <p className='text-[10px] font-poppins'>Lorem ipsum dolor sit amet.</p>
        </div>     
      </div>
      <div className='flex flex-col w-full max-w-[480px]'>
      <Link href={'/products?category=lanterna'}>
        <Image src={'/banners/components/bannertriplo/480x210Azul3.png'} alt='banner' width={480} height={210} layout='responsive'/>
        </Link>
        <div className='p-[16px] hidden'>
          <p className='text-[14px] font-poppins'>Lorem ipsum dolor sit amet.</p>
          <p className='text-[10px] font-poppins'>Lorem ipsum dolor sit amet.</p>
        </div>     
      </div>
     
    </div>
   </Container>
   </main>
  );
}
