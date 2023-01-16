import React from 'react'

export default function GridNoIMG({children}) {
  return (
    <div className='flex flex-wrap justify-center gap-3 items-start'>
        {children}
    </div>
  )
}
