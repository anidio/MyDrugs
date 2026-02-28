import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";
import imageMyDrugs from "../../assets/mydrugs.png"

function Home() {
    return (
        <>
            <div className="bg-mydrugs-dark flex justify-center py-16">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white items-center px-8'>
                    
                    <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
                        <h2 className='text-5xl md:text-6xl font-bold leading-tight'>
                            Bem vindo ao <span className="text-mydrugs-neon">MyDrugs</span> 💊
                        </h2>
                        <p className='text-xl text-slate-300'>
                            As melhores soluções farmacêuticas, entregues com agilidade e a modernidade que você procura.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4 w-full">
                            <button className='rounded-full border-mydrugs-neon border-2 py-3 px-10 text-mydrugs-neon hover:bg-mydrugs-neon hover:text-white transition-all duration-300 font-bold uppercase tracking-widest shadow-lg shadow-mydrugs-neon/20'>
                                Ver Categorias
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12 md:mt-0">
                        <img 
                            src={imageMyDrugs} 
                            alt="Imagem Home MyDrugs" 
                            className='w-full max-w-md rounded-3xl shadow-2xl animate-float' 
                        />
                    </div>
                </div>
            </div>

            <div className="bg-mydrugs-gray py-16 px-8">
                <div className="container mx-auto">
                    <h2 className="text-center text-4xl font-bold text-white mb-12 uppercase tracking-tighter">
                        Nossas <span className="text-mydrugs-neon">Categorias</span>
                    </h2>

                    <div className="flex justify-center">
                        <ListaCategorias />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;