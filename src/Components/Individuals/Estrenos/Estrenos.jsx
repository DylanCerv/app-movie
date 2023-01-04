import React from "react";
import { Link } from "react-router-dom";

export default function Estrenos({ imgCover, id, title }) {
  return (
    <div className="flex flex-row gap-3 mx-2 w-auto">
      <Link className="lg:flex flex-row gap-3" to={`/movie/${id}`}>
        <img
          className="imgCover lg:w-[40%]"
          src={`https://image.tmdb.org/t/p/w500${imgCover}`}
          alt=""
        />
        <h1 className="hidden lg:block lg:w-[60%]">{title}</h1>
      </Link>
    </div>
  );
}
