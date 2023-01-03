import React from 'react'
import "./CardSearchMovie.css";
import { Link } from 'react-router-dom';

export default function CardSearchMovie({title, date, vote_average, imgCover, id }) {
  return (
    <Link className='itemSearch flex flex-row items-center gap-5 py-3' to={`/movie/${id}`}>
        <img className='h-[8rem]' src={`https://image.tmdb.org/t/p/w200${imgCover}`} alt="" />
        <div className='text-base'>
            <h4>{title}</h4>
            <p className='text-base'>{date}</p>
            <p className='flex flex-row gap-2 text-base'>
                <img className='w-3' src="/src/assets/svg/star.svg" alt="" />
                <span>{vote_average}</span>
            </p>
        </div>
    </Link>
  )
}
