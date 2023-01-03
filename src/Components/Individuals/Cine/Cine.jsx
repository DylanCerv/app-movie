import React from 'react'
import "./Cine.css"
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

export default function Cine({imgCover, imgPortada, title, id}) {

  return (
    <Link to={`/movie/${id}`}>
        <div className='relative pb-5'>
            <LazyLoad className='bg-portada pb-2'>
                <img className='h-auto w-full relative -z-10' src={`https://image.tmdb.org/t/p/w500${imgPortada}`} alt="" />
            </LazyLoad>
            <LazyLoad className='absolute bottom-0 h-auto w-full flex flex-row justify-between text-end'>
                <img className='w-[20%] h-auto' src={`https://image.tmdb.org/t/p/w500${imgCover}`} alt="" />
                <div className='mt-auto'>
                    <h2>{title}</h2>
                    <p></p>
                </div>
            </LazyLoad>
        </div>
    </Link>
  )
}
