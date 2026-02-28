import { Typewriter } from 'react-simple-typewriter';
import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";
import myDrugsLogo from '../../assets/mydrugs.png';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div className="bg-transparent flex justify-center pt-8 pb-4 md:pt-12 md:pb-8">
                <div className='container flex flex-col md:grid md:grid-cols-2 text-white items-center px-6 md:px-8 mx-auto gap-8 md:gap-12'>
                    
                    <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start justify-center text-center md:text-left order-2 md:order-1">
                        <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight min-h-[150px] md:min-h-[180px]'>
                            Bem vindos ao <br />
                            <span className="text-mydrugs-neon">
                                <Typewriter
                                    words={['MyDrugs', 'Laboratório', 'Submundo', 'Império']}
                                    loop={0} 
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={80}
                                    deleteSpeed={40}
                                    delaySpeed={2500}
                                />
                            </span> 💊
                        </h2>
                        <p className='text-lg md:text-2xl text-slate-300 max-w-md'>
                            As melhores soluções farmacêuticas, entregues com agilidade e a modernidade que você procura.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full">
                            <Link to='/categorias' className='rounded-full border-mydrugs-neon border-2 py-3 px-8 text-mydrugs-neon hover:bg-mydrugs-neon hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-lg shadow-mydrugs-neon/20 text-center'>
                                Ver Categorias
                            </Link>
                            
                            <Link to='/produtos' className='rounded-full bg-mydrugs-neon py-3 px-8 text-mydrugs-dark hover:bg-white transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-lg shadow-mydrugs-neon/30 text-center'>
                                Explorar Produtos
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center order-1 md:order-2 w-full overflow-hidden max-h-[450px] md:max-h-[550px]">
                        <img 
                            src={myDrugsLogo} 
                            alt="Imagem Home MyDrugs" 
                            className='w-full max-w-md rounded-3xl shadow-2xl animate-float' 

                        />
                    </div>
                </div>
            </div>
            
            <div className="bg-transparent py-8 md:py-12 px-4 md:px-8 -mt-4 md:-mt-2">
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-white -mb-2 md:mb-6 uppercase tracking-tighter">
                        Nossas <span className="text-mydrugs-neon">Categorias</span>
                    </h2>
                    
                    <div className="w-full flex justify-center">
                        <ListaCategorias />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;