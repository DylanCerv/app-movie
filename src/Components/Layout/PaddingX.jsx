import React from 'react'

export default function PaddingX({children}) {
  return (
    <div className='p-2 md:px-10 lg:px-20 py-12'>{children}</div>
  )
}
