import { HTMLAttributes } from "react"
import { Container } from "@/components/Container"
import { CardMarcas1 } from "../cards/CardMarcas1"
import {  ArrowRight, ThumbsUp } from "lucide-react"
import Link from "next/link"


type Marca={
    id:string
    marca:string
    produtos:number
    url:string
    link:string
}

interface MarcasSctProps extends HTMLAttributes<HTMLElement>{
    marcas:Marca[]
    title:string
}

export const MarcasSct = ({marcas, title, ...rest}:MarcasSctProps) =>{

    return(
        <section className="">
        <Container className="pt-2 bg-white">
          <div className="text-start">
            <div className="flex items-center w-full gap-[20px]  justify-between py-5 ">
                <div className="flex items-center  gap-[5px]">
                    <ThumbsUp size={25} />
                    <span className="text-[16px]  uppercase text-[#42464d] font-bold font-poppins sm:text-[1.45rem] lg:text-[1.25rem] inline-block">
                        {title}
                    </span>
                </div>
                <Link href={'/marcas'} className="uppercase flex items-center gap-[2px] text-[0.75rem] sm:text-[1rem] text-primary font-poppins font-semibold">ver todas<ArrowRight size={22}/></Link>
            </div>
            <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-[0.5rem] lg:gap-[24px]">
              {marcas.map((marca)=>{
                return(
                  <CardMarcas1 produtos={marca.produtos} href={marca.link} url={marca.url} title={marca.marca} key={marca.id}/>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    )
}