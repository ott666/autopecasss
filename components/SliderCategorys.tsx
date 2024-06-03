import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"


type Category={
    name:string
    url:string
    id:number
    href:string
}
const dataCategorys: Category[] = [
    { name: 'parabrisa', url: '/categorias/parabrisa.png', id: 1 , href:'/products?category=parabrisa'},
    { name: 'parachoque', url: '/categorias/parachoque.png', id: 2, href:'/products?category=parabrisa' },
    { name: 'farol', url: '/categorias/farol.png', id: 3, href:'/products?category=farol' },
    { name: 'catalisadores', url: '/categorias/catalisador.png', id: 4, href:'/products?category=catalisador' },
    { name: 'radiadores', url: '/categorias/radiador.png', id: 5, href:'/products?category=radiador' },
    { name: 'lanternas', url: '/categorias/lanterna.png', id: 6, href:'/products?category=lanterna'},
    { name: 'motor', url: '/categorias/motor.png', id: 7,href:'/products?category=motor' },
    { name: 'portinhola', url: '/categorias/portinhola.png', id: 8, href:'/products?category=portinhola' },
    { name: 'retrovisores', url: '/categorias/retrovisor.png', id: 9, href:'/products?category=retrovisor' },
    { name: 'portas', url: '/categorias/porta.png', id: 10, href:'/products?category=porta' },
  ];

interface sliderCategoriasProps {
    categorias?: Category[];
  }



const SliderCategorias: React.FC<sliderCategoriasProps> = ({ categorias = dataCategorys }) => {
  return (
    <Carousel  
    opts={{align:'start'}}
    className="  w-full ">
      <CarouselContent className="max-w-[290px] w-fit  lg:max-w-[214px] lg:w-full ">
        {categorias.map((categoria) => (
          <CarouselItem className=" basis-auto lg:pr-0 lg:mr-2" key={categoria.id}>
            <div className="flex flex-col gap-[10px] min-[600px]:gap-[25px] items-center">
                <div className="relative  w-[105px] h-[80px]">
                    <Image fill alt="img" src={categoria.url} objectFit="cover" />
                </div>
                <Button className="text-[.875rem] text-white border-primary border min-w-[110px] leading-[1rem] font-bold  font-poppins uppercase  px-3 py-2"><Link href={categoria.href}>{categoria.name}</Link></Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default SliderCategorias