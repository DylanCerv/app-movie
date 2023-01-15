import React from 'react'
import { Link } from 'react-router-dom'

export default function PerfilPerson({name, img, id}) {
  return (
    <Link className='flex flex-col gap-2 ' to={`/person/${id}`}>
        <img className='object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w200${img}`} alt="" />
        <p className='text-center font-semibold'>{name}</p>
    </Link>
  )
}
