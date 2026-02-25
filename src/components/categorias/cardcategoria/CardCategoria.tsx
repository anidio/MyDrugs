import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { PencilLine, Trash } from '@phosphor-icons/react'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-3xl overflow-hidden justify-between bg-mydrugs-gray text-white border border-slate-700 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-mydrugs-neon/10'>
            
            <header className='py-4 px-8 bg-mydrugs-dark text-mydrugs-neon font-bold text-3xl tracking-tighter border-b border-slate-700'>
                Categoria
            </header>

            <div className='p-8 flex flex-col gap-3 min-h-[160px]'>
                <h4 className='text-3xl font-bold uppercase tracking-tight text-white'>
                    {categoria.nome}
                </h4>
                <p className='text-lg text-slate-400 leading-relaxed'>
                    {categoria.descricao}
                </p>
            </div>

            <div className="flex border-t border-slate-700">
                <Link to={`/editarCategoria/${categoria.id}`} 
                    className='w-full text-white bg-mydrugs-dark hover:bg-indigo-700 flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-widest transition-all duration-300 border-r border-slate-700'>
                    <PencilLine size={24} />
                    Editar
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`} 
                    className='w-full text-white bg-mydrugs-dark hover:bg-red-700 flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-widest transition-all duration-300'>
                    <Trash size={24} />
                    Eliminar
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria