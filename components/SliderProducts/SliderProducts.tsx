import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel"
import { CardProductSlide } from "@/components/cards/CardProductSlide"
import {Product} from '@/types/products'


interface SliderProdutosProps{
    produtos:Array<Product>
}

export function SliderProdutos({produtos}:SliderProdutosProps) {
  return (
    <Carousel  
    opts={{align:'start'}}
    className=" pl-4 pr-0 lg:px-4 w-full ">
      <CarouselContent className="max-w-[290px]   lg:max-w-[214px] min-[1440px]:max-w-[268px]  lg:w-full ">
        {produtos.map((produto) => (
          <CarouselItem className="pl-0 pr-2 lg:pr-0 lg:mr-2" key={produto.id}>
            <CardProductSlide product={produto}/>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
