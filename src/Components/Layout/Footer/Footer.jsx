import React from 'react'

export default function Footer() {
  return (
    <footer className='bottom-0 py-5 md:px-40 w-full flex flex-col justify-center items-center gap-5 md:flex-row  md:gap-10 bg-black md:justify-between'>
      <img className='w-[10rem]' src="https://res.cloudinary.com/dnnjctymr/image/upload/v1674088162/projects/data-Fmovies/svg/logo_e1vqga.svg" alt="" />
      <div className='flex flex-row md:flex-col gap-5'>
        <a href="https://www.linkedin.com/in/dylan-espana/" target={'_blank'}>Linkedin</a>
        <a href="https://github.com/DylanCerv" target={'_blank'}>Github</a>
        <a href="https://dylan-cerv.web.app/" target={'_blank'}>Portafolio</a>
      </div>
    </footer>
  )
}
