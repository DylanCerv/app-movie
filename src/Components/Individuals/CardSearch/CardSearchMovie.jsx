import React from 'react'
import "./CardSearchMovie.css";
import { Link } from 'react-router-dom';

export default function CardSearchMovie({title, date, vote_average, imgCover, type, id }) {
  return (
    <Link className='itemSearch flex flex-row items-center gap-5 py-3' to={`/movie/${id}`}>
        <img className='h-[8rem]' src={imgCover && `https://image.tmdb.org/t/p/w200${imgCover}`} alt="" />
        <div className='text-base'>
            <h4>{title}</h4>
            <p className='text-base'>{date}</p>
            <p className='flex flex-row gap-2 text-base'>
                <img className='w-3' src="https://res.cloudinary.com/dnnjctymr/image/upload/v1674087038/projects/data-Fmovies/svg/star_s22d15.svg" alt="" />
                <span>{vote_average}</span>
            </p>
            <p className='text-sm mt-2'>{type == 'tv' ? 'Serie TV' : 'Pelicula' }</p>
        </div>
    </Link>
  )
}
