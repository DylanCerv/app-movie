import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?q=${e.target.search.value}`);
    e.target.search.value = "";
  }

  return (
    <header className='header flex flex-row justify-between gap-5 px-10'>
        <div className='flex items-center gap-2 md:gap-10 md:pl-10 lg:gap-5'>
          <div className='hamburger cursor-pointer md:hidden'>
            <svg className='w-20' xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="ipc-icon ipc-icon--menu ipc-responsive-button__icon" id="iconContext-menu" viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
            </svg>
          </div>
          <Link to={`/`} id='logo'>
              <img className='w-20' src="/src/assets/svg/logo.svg" alt="" />
          </Link>
          <ul className='hidden md:flex gap-2 lg:flex-row md:gap-10  font-semibold links ' id='options'>
            <li><Link to={`/movie/popular`}>Popular</Link></li>
            <li><Link to={`search/tv`}>TV</Link></li>
            <li><Link to={`search/movies`}>Peliculas</Link></li>
            <li><div>Genero</div></li>
          </ul>
        </div>
        <form className='w-auto md:pr-10 md:w-[50%]' onSubmit={handleSubmit}>
            <input className='search relative pl-[7rem !important] w-full' type="text" name="search" id="search" placeholder='Enter your key words...' />
            <img className='absolute top-[1.7rem] pl-[.5rem]' src="/src/assets/svg/search.svg" alt="" />
        </form>
    </header>
  )
}
