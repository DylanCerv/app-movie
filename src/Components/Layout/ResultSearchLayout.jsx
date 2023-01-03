import React from 'react'

export default function ResultSearchLayout({children, title}) {
  return (
    <div className='bg-section p-5'>
      <h1 className='text-2xl'>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}
