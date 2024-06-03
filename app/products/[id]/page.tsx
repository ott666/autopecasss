//C:\Users\ottav\autopecas2\app\produtos\[id]\page.tsx
'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Product } from '@/types/products'; // Certifique-se de que o caminho está correto
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { BoltIcon, BriefcaseIcon, MoveHorizontalIcon, RocketIcon } from 'lucide-react';
import Link from 'next/link';
import Card1Text from '@/components/cards/CardText1';
import dataTexts from '@/data/texts.json'

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

  useEffect(() => {
    if (!id) return;

    console.log('Fetching product with id:', id);

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Product data:', data);
          setProduct(data);
        } else {
          console.error('Error fetching product:', response.statusText);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  
  return (
    <>
    <Container className='font-poppins pt-10 bg-white'>
     <div className="grid  md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
            <div className="text-sm  dark:text-gray-400 px-2 rounded-full py-1 bg-primary text-white">{product.value_name_brand}</div>
          </div>  
        </div>
        <div className="flex flex-col w-fit  gap-4">
          <Button size="lg" className='  text-[18px] p-2 uppercase font-bold'> <Link href={product.permalink}>Comprar agora</Link></Button>
          <Button size="lg"  className='w-fit bg-[#212121] hover:bg-white hover:text-black  shadow-black shadow-sm hover:shadow-xl text-[18px] p-2 uppercase font-bold border-primary'>
            <Link href={`https://api.whatsapp.com/send/?phone=16991771717&textOla%21estava%21vendo%21este%21produto%21${product.id}`}>Fale com o vendedor</Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={`https://http2.mlstatic.com/D_${product.picture_ids[0]}-O.jpg`}
            width={600}
          />
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={`https://http2.mlstatic.com/D_${product.picture_ids[1]}-O.jpg`}
            width={600}
          />
        </div>
        <p className='italic font-medium'>Clique em 'Comprar agora' para ser redirecionado diretamente ao nosso anúncio no Mercado Livre.</p>
      </div>
    </div>
    <section className="w-full py-12 md:py-24 lg:py-16">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl py-5 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Reputação sólida
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Há mais de 5 anos vendendo peças e acessórios automotivos no Mercado Livre
              </p>
            </div>
            <Link
              className="uppercase font-bold inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 hover:bg-[#0d329f] hover:text-white  shadow-black shadow-sm hover:shadow-xl py-8 text-lg text-[#202020] px-4 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="https://lista.mercadolivre.com.br/_CustId_323205984?item_id=MLB4465657214&category_id=MLB63737&seller_id=323205984"
            >
              Ver reputação
            </Link>
          </div>
         
        </div>
      </section>
    </Container>

      <section>
        <Container className='bg-white py-12 md:py-24 lg:py-32'>

        <div className=" grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 md:px-6">
          {dataTexts.map((text)=>{
            return(
              <Card1Text icon={<BoltIcon />} title={text.title} description={text.text} key={text.id}/>
            )
          })}
        </div>
        </Container>
      </section>

      <section className="w-full ">
        <Container className='py-12 md:py-18 lg:py-18 bg-white'>

        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Tem alguma dúvida ou quer falar conosco?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Descubra como nossa empresa pode ajudar você. Clique abaixo para entrar em contato.
            </p>
          </div>
          <Link
            className="inline-flex w-fit mx-auto py-4  items-center justify-center rounded-md bg-[#0d329f] hover:bg-yellow-500 hover:text-[#212121] px-12 text-[22px] font-bold uppercase text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href={`https://api.whatsapp.com/send/?phone=16991771717&textOla%21estava%21vendo%21este%21produto%21${product.id}`}
            >
            Fale Conosco
          </Link>
        </div>
            </Container>
      </section>
      
      </>
  );
};

export default ProductPage;
