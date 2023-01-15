import React from 'react'
import "./Cine.css"
import { Link } from 'react-router-dom'

export default function Cine({imgCover, imgPortada, title, id}) {

  return (
    <Link to={`/movie/${id}`}>
        <div className='relative pb-5'>
            <div className='bg-portada pb-2'>
                <img className='h-auto w-full relative -z-10' src={`https://image.tmdb.org/t/p/w500${imgPortada}`} alt="" />
            </div>
            <div className='absolute bottom-0 h-auto w-full flex flex-row justify-between text-end sm:px-5'>
                <img className='w-[20%] h-auto' src={`https://image.tmdb.org/t/p/w500${imgCover}`} alt="" />
                <div className='mt-auto'>
                    <h2 className='pb-2  md:pb-5 md:text-4xl'>{title}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}
