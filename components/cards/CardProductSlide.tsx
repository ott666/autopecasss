import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import {Product} from '@/types/products'
import { Button } from "@/components/ui/button";

interface CardProductslide extends HTMLAttributes<HTMLElement> {
    product:Product
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export const CardProductSlide = ({ product, ...rest }: CardProductslide) => {
    return (
        <Link href={`/products/${product.id}`} className="max-w-[290px] lg:w-full lg:max-w-[214px] min-[1440px]:max-w-[268px]  lg:h-full block">
            <Card className=" h-full pb-0 pt-[10px] flex flex-col lg:justify-between items-center p-[8px] lg:p-4 ">
                <div className="flex lg:flex-col gap-x-[15px] gap-y-[8px]">

                    <CardContent className="p-0">
                        <div className="relative w-full min-w-[100px] h-auto min-h-[92px] lg:min-h-[162px]">
                            <Image unoptimized={true} src={`https://http2.mlstatic.com/D_${product.picture_ids[0]}-O.jpg`} alt="bg" objectPosition="center" objectFit="cover" fill />
                        </div>
                       
                    </CardContent>
                    <CardFooter className="flex-col items-start  pb-[8px] px-0">

                        <CardTitle className="text-[0.75rem] lg:text-[.875rem]   h-[48px] lg:h-[54px] font-poppins font-semibold line-clamp-3 leading-[1rem] lg:leading-[1.125rem]">
                            {product.title}
                        </CardTitle>
                        <div className="pt-[8px]">
                            <p className="text-[0.625rem] font-poppins lg:text-[.75rem] leading-none block">
                                Frete grátis
                            </p>
                            <p className="text-[1rem] font-poppins font-bold text-yellow-400 lg:text-[1.25rem] lg:py-[1px] block">
                                {formatPrice(product.price)}
                            </p>
                            <p className="text-[0.625rem] font-poppins lg:text-[.75rem]  leading-none block">
                                Parcelamento sem juros
                            </p>
                        </div>
                    </CardFooter>
                </div>
                   <Button className="w-full mt-[10px] lg:mt-[20px] font-poppins font-bold uppercase text-[14px] p-0">Comprar</Button>
            </Card>
        </Link>
    );
};
