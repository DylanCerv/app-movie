import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkSeeMore({q}) {
  return (
    <div className='text-center pt-5 font-bold text-yellow-400'>
        <Link to={`/search/${q}`}>Ver Mas</Link>
    </div>
  )
}
