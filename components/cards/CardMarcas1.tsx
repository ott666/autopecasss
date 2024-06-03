import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CardMarcas1Props{
    title:string
    url:string
    href:string
    produtos:number
}

export const CardMarcas1 = ({title, url, href, produtos}:CardMarcas1Props) =>{
    return(
        <Link href={`/products?brand=${href}`} className="p-[8px] group flex flex-col relative text-center shadow-black/30  transition-all duration-300  shadow hover:shadow-lg hover:shadow-black ">
            <div className="absolute flex items-center justify-center group-hover:z-[2] scale-x-0 inset-y-0 origin-left -translate-x-2 w-full  bg-primary overflow group-hover:scale-x-100 transition-all ease-in-out duration-700 flex-col ">
                <span className="text-white opacity-0 group-hover:opacity-100 delay-400 ease-in-out   duration-300 text-[22px] font-bold font-poppins sm:text-[2.5rem] lg:font-bold">{produtos}</span>
                <span className="text-white opacity-0 group-hover:opacity-100 delay-500 uppercase font-medium tracking-tight ease-in-out duration-300 sm:text-[1.4rem] font-poppins lg:text-[1.25rem] lg:font-semibold ">produtos</span>
            </div>
            <div className="relative hover:opacity-0 transition-all ease-in-out duration-500 w-full h-auto min-h-[78px] lg:min-h-[110px] ">

                <Image src={`/marcas${url}`} alt="/" fill objectFit="contain"/>
            </div>
            <p className="text-[0.75rem] lg:text-[1.25rem] lg:font-bold sm:text-[1.1rem] sm:leading-1.[875rem] sm:font-bold text-#[42464d] block font-poppins uppercase font-semibold pt-2 pb-1">{title}</p>
            <span className="text-primary font-poppins font-semibold uppercase tracking-wider text-[10px] min-[600px]:text-[0.8rem] lg:text-[.875rem] flex justify-center gap-[3px] items-center z-[2]">Ver produtos <ArrowRight size={16}/></span>
        </Link>
    )
}