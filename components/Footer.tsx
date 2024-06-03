import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#082477] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">AutoPeças</h2>
            <a href="/" className="block py-2">Início</a>
            <a href="/marcas" className="block py-2">Marcas</a>
            <a href="/products" className="block py-2">Produtos</a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contato</h2>
            <a href="https://api.whatsapp.com/send/?phone=16991771717&textOla%21gostaria%21de%21mais%21informações" className="block py-2">Whatsapp</a>
            <a href="https://lista.mercadolivre.com.br/_CustId_323205984?item_id=MLB4465657214&category_id=MLB63737&seller_id=323205984" className="block py-2">Mercado Livre</a>
          </div>
       
       
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 Autopeças. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
