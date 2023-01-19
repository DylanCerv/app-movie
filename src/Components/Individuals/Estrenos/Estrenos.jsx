import React from "react";
import { Link } from "react-router-dom";
import { voteAverageFilm } from "../../../utils/help";

export default function Estrenos({ imgCover, id, title, voteStar }) {
  return (
    <div className="flex flex-row gap-3 mx-2 w-auto">
      <Link className="lg:flex flex-row gap-3" to={`/movie/${id}`}>
        <img
          className="imgCover lg:w-[40%]"
          src={`https://image.tmdb.org/t/p/w500${imgCover}`}
          alt=""
        />
        <div className="hidden lg:flex flex-col justify-center gap-3">
          <h1 className="w-[60%]">{title}</h1>
          <div className="flex flex-row gap-2">
            <img
              className="w-4 estrella"
              src="https://res.cloudinary.com/dnnjctymr/image/upload/v1674087038/projects/data-Fmovies/svg/star_s22d15.svg"
              alt=""
            />{" "}
            <span>{voteAverageFilm(voteStar)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
