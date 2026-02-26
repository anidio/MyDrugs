import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";
import { DNA } from "react-loader-spinner";
import type Produto from "../../../models/Produto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos);
        } catch (error: any) {
            alert('Erro ao listar os Produtos');
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <div className="w-full flex flex-col items-center">
            {produtos.length === 0 && (
                <div className="flex justify-center items-center h-60">
                    <DNA visible={true} height="100" width="100" />
                </div>
            )}

            <div className="flex justify-center w-full my-8">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaProdutos;