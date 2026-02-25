import { Link } from 'react-router-dom'
import { ShoppingCart, List, PlusCircle } from '@phosphor-icons/react'

function Navbar() {
  return (
    <div className='w-full bg-mydrugs-dark text-white flex justify-center pt-8 border-b-4 border-mydrugs-neon sticky top-0 z-50 shadow-2xl'>
      <div className="container mx-auto flex justify-between items-center px-8">
        
        <Link to='/home' className='text-3xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform duration-300'>
          My<span className='text-mydrugs-neon'>Drugs</span> 💊
        </Link>

        <div className='flex gap-12 items-center font-bold uppercase text-sm tracking-widest'>
          <Link to='/categorias' className='flex items-center gap-2 hover:text-mydrugs-neon hover:underline decoration-mydrugs-neon decoration-4 underline-offset-8 transition-all'>
            <List size={20} weight="bold" />
            Categorias
          </Link>
          
          <Link to='/cadastroCategoria' className='flex items-center gap-2 hover:text-mydrugs-neon hover:underline decoration-mydrugs-neon decoration-4 underline-offset-8 transition-all'>
            <PlusCircle size={20} weight="bold" />
            Cadastrar Categoria
          </Link>

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