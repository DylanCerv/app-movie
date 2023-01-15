import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
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
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<Movie />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/popular" element={<SearchTypes />} />
          <Route path="/search/tv" element={<SearchTypes />} />
          <Route path="/search/movies" element={<SearchTypes />} />
          <Route path="/genero/:genre/tv" element={<SearchTypes />} />
          <Route path="/genero/:genre/movie" element={<SearchTypes />} />
          <Route path="/search/:search" element={<SearchTypes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
