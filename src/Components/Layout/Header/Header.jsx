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
    <header className='header flex flex-row justify-between gap-10 lg:justify-center lg:px-[20rem]'>
        <div className='flex items-center gap-2 lg:gap-5'>
          <a hidden className='hamburger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--menu ipc-responsive-button__icon" id="iconContext-menu" viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
            </svg>
          </a>
          <Link to={`/`} id='logo'>
              <img src="/src/assets/svg/logo.svg" alt="" />
          </Link>
          <ul className='flex gap-2 lg:flex-row lg:gap-10 font-semibold links ' id='options'>
            <li><Link to={`search/popular`}>Popular</Link></li>
            <li><Link to={`search/tv`}>TV</Link></li>
            <li><Link to={`search/movies`}>Peliculas</Link></li>
            <li><Link to={`search/popular`}>Genero</Link></li>
          </ul>
        </div>
        <form className='w-[50%]' onSubmit={handleSubmit}>
          <div className='w-full'>
          <input className='search relative pl-20 w-full' type="text" name="search" id="search" placeholder='Enter your key words...' />
          <img className='absolute top-[1.7rem] pl-[.5rem]' src="/src/assets/svg/search.svg" alt="" />

          </div>
        </form>
    </header>
  )
}
