import { ShoppingCart, PencilLine, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'


interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className='flex flex-col rounded-3xl overflow-hidden justify-between bg-mydrugs-gray/40 backdrop-blur-sm text-white border border-slate-700 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-mydrugs-neon/20 group'>
            
            <div className="relative h-48 w-full bg-mydrugs-dark overflow-hidden">
                <img 
                    src={produto.foto} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                    alt={produto.nome} 
                />
                <div className="absolute top-3 right-3 bg-mydrugs-neon text-mydrugs-dark font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                </div>
            </div>

            <div className='p-6 flex flex-col gap-2 flex-1'>
                <h4 className='text-2xl font-bold uppercase tracking-tighter text-mydrugs-neon'>
                    {produto.nome}
                </h4>
                <p className='text-sm text-slate-300 leading-relaxed line-clamp-3 italic'>
                    {produto.detalhes}
                </p>
                {produto.categoria && (
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-2">
                        Categoria: {produto.categoria.descricao}
                    </span>
                )}
            </div>

            <div className="flex flex-col border-t border-slate-700">
                <button className='w-full text-mydrugs-dark bg-mydrugs-neon hover:bg-white flex items-center justify-center gap-2 py-3 font-black uppercase tracking-widest transition-all duration-300'>
                    <ShoppingCart size={22} weight="bold" />
                    Adicionar
                </button>
                
                <div className="flex w-full">
                    <Link to={`/editarProduto/${produto.id}`} 
                        className='w-full text-white bg-mydrugs-dark hover:bg-indigo-700 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase transition-all duration-300 border-r border-slate-700'>
                        <PencilLine size={18} />
                        Editar
                    </Link>

                    <Link to={`/deletarProduto/${produto.id}`} 
                        className='w-full text-white bg-mydrugs-dark hover:bg-red-700 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase transition-all duration-300'>
                        <Trash size={18} />
                        Excluir
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProduto