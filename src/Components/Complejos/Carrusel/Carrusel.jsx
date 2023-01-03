import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { settingsCarrunsel } from '../../../utils/sliderSettings';

export default function Carrusel({children, title, status}) {

  return (
    <div className='flex flex-col gap-1'>
        <h2 className='mb-3'>{title}</h2>
        {
          status === 'success' && 
          <Slider className='flex flex-row gap-3 w-full pb-5' {...settingsCarrunsel}>
            {children}
          </Slider>
        }
    </div>
    
  )
}
