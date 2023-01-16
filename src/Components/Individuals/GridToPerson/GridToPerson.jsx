import React from 'react'

export default function GridToPerson({children}) {
  return (
    <div className='flex flex-wrap justify-center gap-8 items-start'>
        {children}
    </div>
  )
}
