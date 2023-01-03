import React from 'react'
import { Link } from 'react-router-dom'

export default function BTNCategory({category, id}) {
  return (
    <Link
        className='border py-1 px-3 rounded-full text-sm'
        to={``}
    >{category}</Link>
  )
}
