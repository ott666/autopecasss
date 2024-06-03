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
import { Button } from "../ui/button";

interface CardProduct1Props extends HTMLAttributes<HTMLElement> {
    product:Product
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export const CardProduct1 = ({ product, ...rest }: CardProduct1Props) => {
    return (
        <Link href={`/products/${product.id}`} className="max-w-[290px] min-[600px]:w-full sm:max-w-none   min-[600px]:h-full block">
            <Card className=" h-full flex flex-col items-center p-[16px] ">
                <div className="flex flex-col">

                    <CardContent className="p-0">
                        <div className="relative w-full  h-auto min-h-[162px]">
                            <Image unoptimized={true} src={`https://http2.mlstatic.com/D_${product.picture_ids[0]}-O.jpg`} alt="bg" objectPosition="center" objectFit="cover" fill />
                        </div>
                       
                    </CardContent>
                    <CardFooter className="flex-col items-start p-0">
                        <CardTitle className="text-[0.875rem] h-[58px]   mt-[8px] text-[#42464d] font-poppins font-semibold line-clamp-3 leading-[1.25rem]">
                            {product.title}
                        </CardTitle>
                        <p className="text-[1rem] font-poppins font-bold pt-[6px] pb-[2px]  text-primary">
                            {formatPrice(product.price)}
                        </p>
                        <p className="text-[0.75rem] leading-none">Parcelamento sem júros e frete grátis</p>
                    </CardFooter>
                </div>
                   <Button className="w-[90%] font-bold uppercase p-0 mt-[26px]">Comprar</Button>
            </Card>
        </Link>
    );
};
