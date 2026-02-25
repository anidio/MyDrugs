import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState, type ChangeEvent } from "react";

function FormularioCategoria() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('Categoria atualizada com sucesso!');
            } catch (error: any) {
                alert('Erro ao atualizar a Categoria');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('Categoria cadastrada com sucesso!');
            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria');
            }
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto py-20">
            <h1 className="text-4xl text-center my-8 text-white font-bold uppercase">
                {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 bg-mydrugs-gray p-10 rounded-3xl border border-slate-700 shadow-2xl" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-mydrugs-neon font-bold uppercase">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Ex: Medicamentos"
                        name='nome'
                        className="border-2 border-slate-700 rounded-lg p-3 bg-mydrugs-dark text-white focus:border-mydrugs-neon outline-none transition-all"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-mydrugs-neon font-bold uppercase">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descrição da categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded-lg p-3 bg-mydrugs-dark text-white focus:border-mydrugs-neon outline-none transition-all"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded-full bg-mydrugs-neon text-mydrugs-dark font-black uppercase py-4 mt-4 hover:scale-105 transition-all shadow-lg shadow-mydrugs-neon/20"
                    type="submit"
                >
                    {id !== undefined ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;