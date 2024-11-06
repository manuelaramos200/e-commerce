'use client';
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCarrinho(); 
    
    return (
        <Pagina className="flex flex-col gap-10 p-6">
            {itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {itens.map((item) => (
                            <AreaItemCarrinho 
                                key={item.produto.id}
                                item={item}
                                adicionar={() => adicionar(item.produto)}
                                remover={() => remover(item.produto)}
                            />
                        ))}
                    </div>
                    <div className="border-t pt-4">
                        <TotalCarrinho itens={itens} />
                    </div>
                </>
            )}
        </Pagina>
    );
}
