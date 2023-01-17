import React from 'react'

export default function Footer() {
  return (
    <footer className='bottom-0 py-5 px-40 w-full flex flex-row justify-center gap-10 bg-black md:justify-between'>
      <img className='w-20' src="/src/assets/svg/logo.svg" alt="" />
      <div className='flex flex-col gap-2'>
        <a href="">Linkedin</a>
        <a href="">Github</a>
        <a href="">Portafolio</a>
      </div>
    </footer>
  )
}
