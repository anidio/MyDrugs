function Home() {
    return (
        <>
            <div className="bg-mydrugs-dark flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-8">
                        <h2 className='text-5xl font-bold'>
                            Bem vindo ao MyDrugs 💊
                        </h2>
                        <p className='text-xl'>
                            As melhores soluções farmacêuticas, entregues com agilidade.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded border-white border-solid border-2 py-2 px-4 text-white hover:bg-white hover:text-mydrugs-dark cursor-pointer transition-all'>
                                Ver Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img 
                            src="../src/assets/mydrugs.png" 
                            alt="Imagem Home" 
                            className='w-2/3' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home