'use client'
import CartaoProduto from "@/components/produto/CartaoProduto";
import produtos from "@/data/constants/produtos";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Home() {
  return <Pagina> 
    <div className="flex  justify-center gap-5 flex-wrap">
      {produtos.map(produto => (<CartaoProduto key = {produto.id}produto = {produto}/>))}
    </div>
    </Pagina>

}
