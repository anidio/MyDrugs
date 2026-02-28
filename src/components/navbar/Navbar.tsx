import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, List, PlusCircle, CaretDown, Pill } from '@phosphor-icons/react'

function Navbar() {
    // Estados para controlar a abertura dos menus
    const [openCat, setOpenCat] = useState(false)
    const [openProd, setOpenProd] = useState(false)

    return (
        <div className='w-full bg-mydrugs-dark text-white flex justify-center py-6 border-b-4 border-mydrugs-neon sticky top-0 z-50 shadow-2xl'>
            <div className="container mx-auto flex justify-between items-center px-8">
                
                <Link to='/home' className='text-3xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform duration-300'>
                    My<span className='text-mydrugs-neon'>Drugs</span> 💊
                </Link>

                <div className='flex gap-10 items-center font-bold uppercase text-sm tracking-widest'>
                    
                    <div 
                        className='relative group cursor-pointer'
                        onMouseEnter={() => setOpenCat(true)}
                        onMouseLeave={() => setOpenCat(false)}
                    >
                        <div className='flex items-center gap-2 hover:text-mydrugs-neon transition-all py-2'>
                            <List size={22} weight="bold" />
                            Categorias
                            <CaretDown size={16} weight="bold" className={`transition-transform ${openCat ? 'rotate-180' : ''}`} />
                        </div>

                        {openCat && (
                            <div className='absolute top-full left-0 w-56 bg-mydrugs-gray border border-slate-700 rounded-2xl py-3 shadow-2xl flex flex-col backdrop-blur-md bg-opacity-95'>
                                <Link to='/categorias' className='px-6 py-3 hover:bg-mydrugs-dark hover:text-mydrugs-neon flex items-center gap-3 transition-colors'>
                                    <List size={20} /> Listar Categorias
                                </Link>
                                <Link to='/cadastroCategoria' className='px-6 py-3 hover:bg-mydrugs-dark hover:text-mydrugs-neon flex items-center gap-3 transition-colors'>
                                    <PlusCircle size={20} /> Cadastrar Nova
                                </Link>
                            </div>
                        )}
                    </div>

                    <div 
                        className='relative group cursor-pointer'
                        onMouseEnter={() => setOpenProd(true)}
                        onMouseLeave={() => setOpenProd(false)}
                    >
                        <div className='flex items-center gap-2 hover:text-mydrugs-neon transition-all py-2'>
                            <Pill size={22} weight="bold" />
                            Produtos
                            <CaretDown size={16} weight="bold" className={`transition-transform ${openProd ? 'rotate-180' : ''}`} />
                        </div>

                        {openProd && (
                            <div className='absolute top-full left-0 w-56 bg-mydrugs-gray border border-slate-700 rounded-2xl py-3 shadow-2xl flex flex-col backdrop-blur-md bg-opacity-95'>
                                <Link to='/produtos' className='px-6 py-3 hover:bg-mydrugs-dark hover:text-mydrugs-neon flex items-center gap-3 transition-colors'>
                                    <Pill size={20} /> Listar Produtos
                                </Link>
                                <Link to='/cadastroProduto' className='px-6 py-3 hover:bg-mydrugs-dark hover:text-mydrugs-neon flex items-center gap-3 transition-colors'>
                                    <PlusCircle size={20} /> Cadastrar Novo
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className='relative flex items-center justify-center p-2 cursor-pointer hover:text-mydrugs-neon transition-colors ml-4'>
                        <ShoppingCart size={32} weight="bold" />
                        <span className='absolute -top-1 -right-1 bg-mydrugs-neon text-mydrugs-dark text-[11px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-mydrugs-dark'>
                            0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar