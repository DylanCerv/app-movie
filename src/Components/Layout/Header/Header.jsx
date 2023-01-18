import React, { useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const [activeHamburger, setActiveHamburger] = useState(false);

  const handleClickHamburger = ()=>{
    setActiveHamburger(!activeHamburger)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?q=${e.target.search.value}`);
    e.target.search.value = "";
  }

  return (
    <header className='header h-[calc(5rem - .8rem)] flex flex-row justify-between gap-5 px-10'>
        <div className='flex items-center gap-2 md:gap-10 md:pl-10 lg:gap-5'>
          <div onClick={handleClickHamburger} className={`hamburger cursor-pointer flex justify-center items-center md:hidden `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className={`${activeHamburger && 'hidden'} ipc-icon ipc-icon--menu ipc-responsive-button__icon`} id="iconContext-menu" viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path fill="none" d="M0 0h24v24H0V0z">
              </path>
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={`${!activeHamburger && 'hidden'} bi bi-x-lg`} viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z">
              </path>
              <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z">
              </path>
            </svg>
          </div>
          <Link to={`/`} id='logo'>
              <img className='w-20' src="/src/assets/svg/logo.svg" alt="" />
          </Link>
          <ul className={`hidden ${activeHamburger && 'listHamburgerActive'}  md:flex gap-2 lg:flex-row md:gap-10 font-semibold links`} id='options'>
            <li><Link to={`/movie/popular`} className={`hover:text-yellow-text`}>Popular</Link></li>
            <li><Link to={`search/tv`} className={`hover:text-yellow-text`}>TV</Link></li>
            <li><Link to={`search/movies`} className={`hover:text-yellow-text`}>Peliculas</Link></li>
            <li className={`submenu`}>Generos
              <ul className='hidden absolute flex-row gap-5'>
                <li>Peliculas
                  <ul className='hidden absolute flex-col gap-5'>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/accion/movie`}>Accion</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/aventura/movie`}>Aventura</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/animacion/movie`}>Animacion</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/comedia/movie`}>Comedia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/crimen/movie`}>Crimen</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/documental/movie`}>Documental</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/drama/movie`}>Drama</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/familia/movie`}>Familia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/fantasia/movie`}>Fantasia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/historia/movie`}>Historia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/terror/movie`}>Terror</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/musical/movie`}>Musical</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/misterio/movie`}>Misterio</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/romance/movie`}>Romance</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/ciencia_ficcion/movie`}>Ciencia Ficcion</Link>
                     </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/tv_movie/movie`}>TV Movie</Link>
                     </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/suspenso/movie`}>Suspenso</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/guerra/movie`}>Guerra</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/western/movie`}>Western</Link>
                    </li>
                  </ul>
                </li>
                <li>Series (TV)
                  <ul className='hidden absolute flex-col gap-5'>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/accion_adventura/tv`}>Aventura y Accion</Link>
                     </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/animacion/tv`}>Animacion</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/comedia/tv`}>Comedia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/crimen/tv`}>Crimen</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/documental/tv`}>Documental</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/drama/tv`}>Drama</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/familia/tv`}>Familia</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/infantil/tv`}>Infantil</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/misterio/tv`}>Misterio</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/noticias/tv`}>Noticias</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/realidad/tv`}>Realidad</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/ciencia_ficcion_y_fantasia/tv`}>Ciencia Ficcion y Fantasia</Link>
                     </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/telenovelas/tv`}>Telenovelas</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/talk_show/tv`}>Talk Show</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/guerra_y_politica/tv`}>Guerra y Politica</Link>
                    </li>
                    <li className='hover:text-yellow-text'>
                      <Link to={`/genero/western/tv`}>Western</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form className='w-auto my-auto md:pr-10 md:w-[50%]' onSubmit={handleSubmit}>
            <input className='search relative pl-[7rem !important] w-full h-8' type="text" name="search" id="search" placeholder='Enter your key words...' />
            <img className='absolute top-[1.45rem] pl-[.6rem]' src="/src/assets/svg/search.svg" alt="" />
        </form>
    </header>
  )
}
