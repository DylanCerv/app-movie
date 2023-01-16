import React from 'react'
import { Link } from 'react-router-dom'

export default function PerfilPerson({name, img, id}) {
  return (
    <Link className='flex flex-col gap-2 justify-center items-center w-20 overflow-hidden' to={`/person/${id}`}>
      {img &&
        <img className='object-cover rounded-lg' src={img && `https://image.tmdb.org/t/p/w200${img}`} alt="" />
      }
        <p className='text-center font-semibold text-sm'>{name}</p>
    </Link>
  )
}
