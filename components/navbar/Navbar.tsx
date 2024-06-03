'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import Image from 'next/image';
import { Container } from '../Container';

const NavigationMenuDemo: React.FC = () => {
  return (
    
    
    <NavigationMenu.Root className="NavigationMenuRoot z-[10] py-2 bg-[#082477] text-white fixed top-0">
      <Container className='flex justify-end'>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-white text-[18px] font-bold uppercase">
            Início <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="https://lista.mercadolivre.com.br/_CustId_323205984?item_id=MLB4465657214&category_id=MLB63737&seller_id=323205984">
                    <Image src={'/mlLogo.png'} width={94} height={65} className='mx-auto' alt='bgMl'/>
                    <div className="CalloutHeading">Visite nosso Mercado Livre</div>
                    <p className="CalloutText">Confira nossa reputação e avaliações dos nossos clientes</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem href="https://api.whatsapp.com/send/?phone=16991771717&textOla%21gostaria%21de%21mais%21informações" title="Fale Conosco">
                Clique aqui para conversar com a gente no WhatsApp.
              </ListItem>
              <ListItem href="/products" title="Nossos Produtos">
                Explore nossa linha completa de produtos.
              </ListItem>
              <ListItem href="/" title="Página Inicial">
                Volte para a página inicial.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        


        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </Container>
    </NavigationMenu.Root>

  );
};

type ListItemProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
