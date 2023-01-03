import React from "react";
import { Link } from "react-router-dom";

export default function Estrenos({ imgCover, id }) {
  return (
    <div className="flex flex-row gap-3 mx-2 lg:m-2 w-auto">
      <Link to={`/movie/${id}`}>
        <img
          className="imgCover"
          src={`https://image.tmdb.org/t/p/w500${imgCover}`}
          alt=""
        />
      </Link>
    </div>
  );
}
