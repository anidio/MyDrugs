import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias');
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="w-full flex flex-col items-center">
            {categorias.length === 0 && (
                <div className="flex justify-center items-center h-40">
                    <DNA visible={true} height="100" width="100" />
                </div>
            )}

            <div className="flex justify-center w-full pt-28">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 justify-items-center w-full">
                        {categorias.map((categoria) => (
                            <div key={categoria.id} className="w-full max-w-[450px]"> 
                                <CardCategoria categoria={categoria} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaCategorias;