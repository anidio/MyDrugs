import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import type Categoria from "../../../models/Categoria"

function DeletarCategoria() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Erro ao buscar a categoria')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso!')
        } catch (error: any) {
            alert('Erro ao apagar a categoria')
        }

        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto py-20'>
            <h1 className='text-4xl text-center my-8 text-white font-bold uppercase'>
                Deletar categoria
            </h1>

            <p className='text-center font-semibold mb-4 text-slate-300'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border border-slate-700 flex flex-col rounded-3xl overflow-hidden justify-between bg-mydrugs-gray shadow-2xl'>
                <header className='py-4 px-8 bg-mydrugs-dark text-mydrugs-neon font-bold text-2xl border-b border-slate-700'>
                    Categoria
                </header>
                
                <div className="p-8">
                    <p className='text-3xl font-bold text-white uppercase'>{categoria.nome}</p>
                    <p className='text-lg text-slate-400 mt-2'>{categoria.descricao}</p>
                </div>

                <div className="flex">
                    <button 
                        className='text-slate-100 bg-slate-600 hover:bg-slate-800 w-full py-4 font-bold uppercase transition-all'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-red-600 hover:bg-red-900 flex items-center justify-center py-4 font-bold uppercase transition-all'
                        onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria