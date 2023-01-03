import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Person from "./pages/Person";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Layout className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
