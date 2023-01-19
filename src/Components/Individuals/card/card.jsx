import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { voteAverageFilm } from "../../../utils/help";
import { convert_Url_To_Array } from "../../../utils/help";

export default function Card({ title, imgCover, stars, date, type, id }) {

  const [url, setUrl] = useState(null);

  useEffect(()=>{
    const arrayURL = type.split('/')
    if (arrayURL[0] !== 'tv' &&
        arrayURL[0] !== 'movie') {
      arrayURL[0] = 'movie';
    }
    setUrl(`/${arrayURL[0]}/${id}`);
  })
  return (
    <div className="bg-section box-shadow-card w-auto mx-2 flex flex-col justify-center items-center gap-1 mb-5">
      <Link to={url && url}>
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
            src="https://res.cloudinary.com/dnnjctymr/image/upload/v1674087038/projects/data-Fmovies/svg/star_s22d15.svg"
            alt=""
          />{" "}
          <span>{voteAverageFilm(stars)}</span>
        </div>
        <Link to={url && url}>
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
