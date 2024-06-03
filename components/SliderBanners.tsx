import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "./ui/button"


type Banner={
    name:string
    url:string
    id:number
}
const dataBanners: Banner[] = [
    { name: 'parabrisas', url: '/banners/components/parabrisasAzul.png', id: 1 },
    { name: 'parachoques', url: '/banners/components/parachoquesAmarelo.png', id: 2 },
    { name: 'farois', url: '/banners/components/faroisAzul.png', id: 3 },
  ];

interface SliderBannerProps {
    banners?: Banner[];
  }



const SliderBanner: React.FC<SliderBannerProps> = ({ banners = dataBanners }) => {
  return (
    <Carousel  
    opts={{align:'start'}}
    className="  w-full lg:hidden ">
      <CarouselContent className=" w-fit  lg:max-w-[214px] lg:w-full ">
        {banners.map((banner) => (
          <CarouselItem className="lg:pr-0  max-w-[350px] min-h-[180px] lg:mr-2" key={banner.id}>
                <div className="relative max-w-[350px] w-full h-full">
                    <Image width={350} height={300} alt="img" src={banner.url} layout="responsive" />
                </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default SliderBanner