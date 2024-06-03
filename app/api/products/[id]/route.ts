//C:\Users\ottav\autopecas2\app\api\produtos\[id]
import { NextResponse } from 'next/server';
import products from '@/data/anuncios_atualizados.json'; // Certifique-se de que o caminho está correto

export async function GET(request: Request, { params }: { params: { id: string } }) {
  console.log('Request Params:', params); // Adicionado para depuração
  const product = products.find(p => p.id === params.id);
  console.log('Found Product:', product); // Adicionado para depuração

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
