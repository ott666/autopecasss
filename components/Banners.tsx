import Image from "next/image"
import Link from "next/link"


export const Banners = () =>{
    return(
<div className="flex flex-col pt-[24px] lg:pt-[32px] gap-[16px] lg:gap-[2rem] min-[600px]:flex-row ">
  <div className=" relative  w-full ">
  <Link href={'/products?category=farol'}>
    <Image src={'/banners/components/bannerduplo/736x198Azul2.png'} alt="img" layout="responsive" width={736} height={198}/>
  </Link>
  </div>
  <div className=" relative h-auto w-full ">
  <Link href={'/products?category=parachoque'}>
  <Image src={'/banners/components/bannerduplo/736x198Azul.png'} alt="img" layout="responsive" width={736} height={198}/>    
    </Link>
  </div>
</div>
    )
}