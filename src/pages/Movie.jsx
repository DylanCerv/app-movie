import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import BTNCategory from '../Components/Individuals/BTNCategory/BTNCategory'
import PeliculaJSON from "./../utils/dataTest/pelicula.json"
import { voteAverageFilm, durationFilm, voteCountFilm } from '../utils/help'

export default function Movie() {
  const { id } = useParams()

  const {
    homepage,
    backdrop_path,
    poster_path,
    release_date,
    runtime,
    overview,
    vote_average,
    vote_count
  } = PeliculaJSON;

  
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-semibold'>{PeliculaJSON.title}</h1>
        <div>
          <p className='text-sm'>Titulo Original: {PeliculaJSON.original_title}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='relative'>
          <a href={homepage} target="_blank">
              <div className='relative pb-5'>
                  <LazyLoad className='bg-portada pb-2'>
                      <img className='h-full relative -z-10' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
                  </LazyLoad>
                  <LazyLoad className='absolute bottom-0 h-[7rem] w-full flex flex-row justify-between text-end'>
                        <img className='' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                        <div className='flex flex-row gap-2 items-center mt-auto'>
                          <p className='text-sm'>{release_date}</p>
                          <p>&#12539;</p>
                          <p className='text-sm'>{durationFilm(runtime)}</p>
                        </div>
                  </LazyLoad>
              </div>
          </a>
          <div className='flex flex-col gap-4 mt-5'>
            <div className='uppercase font-bold  flex flex-row text-center gap-1'>
              <Link className='w-full text-sm py-3 px-5 bg-slate-600 flex flex-row gap-2 items-center justify-center'>
                <img className='h-5' src="/src/assets/svg/iconVideo.svg" alt="" />
                <div>Vídeos</div>
              </Link>
              <Link className='w-full text-sm py-3 px-5 bg-slate-600 flex flex-row gap-2 items-center justify-center'>
                <img className='h-5' src="/src/assets/svg/iconImg.svg" alt="" />
                <div>Imagenes</div>
              </Link>
            </div>
            <div className='text-center flex flex-wrap justify-center items-center gap-2'>
              {
                PeliculaJSON.genres.map((data, index)=>(
                  <BTNCategory
                    category={data.name}
                    id={data.id}
                    key={index}
                  />
                ))
              }
            </div>
            <p>{overview}</p>
            
            <div className='text-lg font-bold flex flex-row gap-2 justify-center'>
              <div className='flex flex-row'>
                <img className='w-4' src="/src/assets/svg/star.svg" alt="" />
                <div className='flex flex-row'>{voteAverageFilm(vote_average)} <div className='opacity-[60%]'>/10</div></div>
              </div>
              <p>&#12539;</p>
              <div>{voteCountFilm(vote_count)}</div>
            </div>
            </div>
          <LazyLoad>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=o5F8MOz_IDw`}
              playing={true}
              controls={false}
            />
          </LazyLoad>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  )
}
