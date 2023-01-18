import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkSeeMore({url}) {
  return (
    <div className='text-center pt-5 font-bold text-yellow-400'>
        <Link to={`${url}`}>Ver Mas</Link>
    </div>
  )
}
