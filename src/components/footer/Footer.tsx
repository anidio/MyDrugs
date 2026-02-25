import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  
  let data = new Date().getFullYear()

  return (
    <>
        <div className="flex justify-center bg-mydrugs-dark text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>MyDrugs | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' className='hover:text-mydrugs-neon' />
              <InstagramLogo size={48} weight='bold' className='hover:text-mydrugs-neon' />
              <FacebookLogo size={48} weight='bold' className='hover:text-mydrugs-neon' />
              <GithubLogo size={48} weight='bold' className='hover:text-mydrugs-neon' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer