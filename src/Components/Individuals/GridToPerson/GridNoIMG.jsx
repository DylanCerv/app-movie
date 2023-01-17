import React from 'react'

export default function GridNoIMG({children}) {
  return (
    <div className='flex flex-wrap justify-center gap-5 items-center'>
        {children}
    </div>
  )
}
