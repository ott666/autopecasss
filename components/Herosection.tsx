import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import autoplay from 'embla-carousel-autoplay';
import { Container } from '@/components/Container' // Ajuste conforme necessário para importar Container
import '/components/emblacss/embla.css'
const colors: string[] = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC']; // Adicione as cores desejadas

const HeroSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay()]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', handleSelect);
    handleSelect(); // Set initial index
  }, [emblaApi, handleSelect]);

  return (
    <section id='hero' className='' style={{ backgroundColor: colors[currentIndex] }}>
      <Container className='px-0 lg:px-0'>
        <div className='embla w-full' ref={emblaRef}>
          <div className='embla__container w-full lg:hidden'>
            {Array(5).fill(null).map((_, index) => (
              <div className='embla__slide w-full' key={index}>
                <div className='w-full bg-black'>
                  <Image
                    src={`/banners/sliderHero/640x295.webp`}
                    objectFit='cover'
                    layout='responsive'
                    width={640}
                    height={295}
                    alt='banner'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='embla__container hidden lg:flex'>
            {Array(5).fill(null).map((_, index) => (
              <div className='embla__slide' key={index}>
                <div className='w-full bg-black'>
                  <Image
                    src={`/banners/sliderHero/1568x400.webp`}
                    objectFit='cover'
                    layout='responsive'
                    width={1568}
                    height={400}
                    alt='banner'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
