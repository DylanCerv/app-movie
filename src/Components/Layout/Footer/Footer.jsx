import React from 'react'

export default function Footer() {
  return (
    <footer className='bottom-0 py-5 px-40 w-full flex flex-row justify-center gap-10 bg-black md:justify-between'>
      <img className='w-20' src="/src/assets/svg/logo.svg" alt="" />
      <div className='flex flex-col gap-2'>
        <a href="https://www.linkedin.com/in/dylan-espana/" target={'_blank'}>Linkedin</a>
        <a href="https://github.com/DylanCerv" target={'_blank'}>Github</a>
        <a href="https://dylan-cerv.web.app/" target={'_blank'}>Portafolio</a>
      </div>
    </footer>
  )
}
