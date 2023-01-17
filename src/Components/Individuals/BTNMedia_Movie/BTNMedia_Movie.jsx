import React from 'react'
import { Link } from 'react-router-dom'

export default function BTNMedia_Movie({media, id, type, name, imgIcon}) {
  return (
    <Link to={`/${media}/${id}/${type}`} className="w-full text-sm py-3 px-5 bg-slate-600 flex flex-row gap-2 items-center justify-center">
        <img className="h-5" src={imgIcon} alt="" />
        <div>{name}</div>
    </Link>
  )
}
