import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-slate-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <Link to='/home' className='text-2xl font-bold uppercase'>MyDrugs 💊</Link>

        <div className='flex gap-4'>
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar