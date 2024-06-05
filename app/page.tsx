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
import Autoplay from 'embla-carousel-autoplay'


import SliderBanner from '@/components/SliderBanners';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Hero1 } from '@/components/Sections/Hero1/Hero1';


const marcasDestacadas = MarcasData.slice(0,8)

export default function Home() {
  return (
   <main>
    <Hero1/>
    <section id='hero' className='py-0 pt-[58px]'>
      <Container className='px-0 lg:px-0'>

        <Carousel       plugins={[
            Autoplay({
              delay: 3000,
                  }),
                ]}
          opts={{loop:true}}  className='hidden smm:flex'>
              
          <CarouselContent className=''>
              <CarouselItem><div className='w-full   bg-black'>
                <Image src={'/banners/Banner1568-400.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
                </div></CarouselItem>
            
              <CarouselItem><div className='w-full   bg-black'>
                <Image src={'/banners/Banner2-1568-400.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
                </div></CarouselItem>
            
              <CarouselItem><div className='w-full   bg-black'>
                <Image src={'/banners/Banner3-1568-400.png'}  objectFit='cover' layout='responsive' width={1568} height={400} alt='banner'/>
                </div></CarouselItem>
        
            
          </CarouselContent>
        </Carousel>
  <Carousel       plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
  opts={{loop:true}}  className='sm:hidden'>
      

      <CarouselContent className=''>
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/Banner640-295.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full   bg-black'>
          <Image src={'/banners/Banner2-640-295.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
       
        <CarouselItem><div className='w-full  bg-black'>
          <Image src={'/banners/Banner3-640-295.png'}  objectFit='cover' layout='responsive' width={640} height={295} alt='banner'/>
          </div></CarouselItem>
      
       
      </CarouselContent>

  
   
  
</Carousel>
      </Container>

    </section>

     <div className="container max-[440px]:pr-[0px] max-[440px]:pl-[10px]">
    <h3 className="uppercase font-poppins text-[.875rem] lg:text-[1.25rem] text-white font-bold">destaque semanal</h3>

      <SliderProdutos produtos={produtosDestacados.slice(0,10)}/>
      <Link className='uppercase flex justify-center lg:justify-end text-[0.75rem] lg:font-bold lg:text-[.875rem] text-center gap-[10px] pt-[10px] items-center font-poppins font-semibold  ' href={'/'}>ver todos <ArrowRight size={24}/></Link>
      </div>

    <Container id='banners'>
        <Banners/>
    </Container>

    <MarcasSct id='marcas' marcas={marcasDestacadas} title="Marcas Recomendadas" />

    <Container className='  pt-3'>
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

      <Image src={'/banners/Banner3-1568-400.png'} width={1504} height={248} layout='responsive' alt='banner'/>
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
