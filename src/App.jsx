import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Person from "./pages/Person";
import Search from "./pages/Search";
import SearchTypes from "./pages/SearchTypes";

function App() {
  return (
    <>
      <Layout className="">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rutas del carrusel */}
          <Route path="/movie/popular" element={<SearchTypes />} />
          <Route path="/movie/top_rated" element={<SearchTypes />} />
          <Route path="/tv/popular" element={<SearchTypes />} />
          <Route path="/tv/top_rated" element={<SearchTypes />} />
          
          {/* Rutas de peliculas y serie individual */}
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<Movie />} />

          {/* Rutas de creditos */}
          <Route path="/creditos/:id/movie" element={<Credits />} />
          <Route path="/creditos/:id/tv" element={<Credits />} />

          {/* Rutas del perfil de la persona */}
          <Route path="/person/:id" element={<Person />} />
          
          {/* Rutas del buscador */}
          <Route path="/search" element={<Search />} />
          
          {/* Rutas para buscar por tipo */}
          <Route path="/search/tv" element={<SearchTypes />} />
          <Route path="/search/movies" element={<SearchTypes />} />
          
          {/* Rutas de busqueda por genero */}
          <Route path="/genero/:genre/tv" element={<SearchTypes />} />
          <Route path="/genero/:genre/movie" element={<SearchTypes />} />
          <Route path="/search/:search" element={<SearchTypes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
