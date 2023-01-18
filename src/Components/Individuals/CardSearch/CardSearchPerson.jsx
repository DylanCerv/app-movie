import React from 'react'
import "./CardSearchPerson.css";
import { Link } from 'react-router-dom';

export default function CardSearchPerson({name, popularity, imgPerfil, department, id }) {
  return (
    <Link className='itemSearch flex flex-row items-center gap-5 py-3' to={`/person/${id}`}>
        <img className='h-[8rem] rounded-full' src={`https://image.tmdb.org/t/p/w200${imgPerfil}`} alt="" />
        <div className='text-base'>
            <h4>{name}</h4>
            <p>{department}</p>
            <p className='flex flex-row gap-2 text-base'>
                <img className='w-3' src="/src/assets/svg/star.svg" alt="" />
                <span>{popularity}</span>
            </p>
        </div>
    </Link>
  )
}
