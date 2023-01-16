import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { voteAverageFilm } from "../../../utils/help";

export default function Card({ title, imgCover, stars, date, type, id }) {
  return (
    <div className="bg-section box-shadow-card w-auto mx-2 flex flex-col justify-center items-center gap-1 mb-5">
      <Link to={`/${type}/${id}`}>
        <img
          className=""
          src={imgCover && `https://image.tmdb.org/t/p/w200${imgCover}`}
          alt=""
        />
      </Link>
      <div className="flex flex-col p-2 gap-2 w-full">
        <div className="flex flex-row gap-2">
          <img
            className="porcent20 estrella"
            src="/src/assets/svg/star.svg"
            alt=""
          />{" "}
          <span>{voteAverageFilm(stars)}</span>
        </div>
        <Link to={`/${type}/${id}`}>
          <h3 className="text-base tituloCard hover:text-[var(--yellow)]">{title}</h3>
        </Link>
        <div className="w-full px-[10%]">
          <span className="text-sm flex flex-row gap-2 justify-center ">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
