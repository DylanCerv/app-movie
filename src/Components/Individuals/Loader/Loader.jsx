import React from 'react'
import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className='absolute z-[100] top-[50%] left-[50%]'>
        <HashLoader color="#f5c518" />
    </div>
  )
}
