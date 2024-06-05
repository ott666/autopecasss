
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import './hero1.css'
import Image from "next/image";

export const Hero1 = () => (
  <div className="w-full  relative bg-gradient-to-b  from-black/80 to-black/50 md:h-[80vh] lg:h-screen overflow-hidden">
    <Image alt=""  fill objectFit="cover" src='/bghero.jpg' className="z-[-1] heroImage" priority /> 
    <div className="container  h-full max-[440px]:px-[10px] mx-auto">
      <div className="flex h-full gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Veja nossa reputação no ML <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
          Solução Completa em <strong className='text-amber-400'>Peças de Substituição  </strong>

          </h1>
          <p className="text-lg md:text-xl    leading-relaxed tracking-tight  max-w-2xl text-center">
          Todas as compras no nosso site são feitas pelo Mercado Livre, com frete grátis e parcelamento sem juros. Aproveite a segurança garantida!
          </p>
        </div>
        <div className="flex flex-wrap justify-center  gap-3">
          <Button size="lg" className=" max-[440px]:max-w-[256px] font-semibold sm:text-2xl sm:px-6 sm:py-3 gap-4" variant="outline">
            Whatsapp <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className=" max-[440px]:max-w-[256px] font-semibold sm:text-2xl sm:px-6 sm:py-3  gap-4">
            Ver Peças <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);