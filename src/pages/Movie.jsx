import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import BTNCategory from "../Components/Individuals/BTNCategory/BTNCategory";
import PeliculaJSON from "./../utils/dataTest/pelicula.json";
import { voteAverageFilm, durationFilm, voteCountFilm } from "../utils/help";
import { getData } from "../utils/api";
import { convert_In_Array_To_API, convert_Url_To_Array } from "../utils/help";
import { useQuery } from "react-query";
import PerfilPerson from "../Components/Individuals/PerfilPerson/PerfilPerson";
import BTNMedia_Movie from "../Components/Individuals/BTNMedia_Movie/BTNMedia_Movie";
import PaddingX from "../Components/Layout/PaddingX";

export default function Movie() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const arrayURL = convert_Url_To_Array(pathname);
  let movie = convert_In_Array_To_API("movie", arrayURL[0], `${id}`);
  let movie_Credits = convert_In_Array_To_API("credits", arrayURL[0], `${id}/credits`);
  let movie_Videos = convert_In_Array_To_API("videos", arrayURL[0], `${id}/videos`);

  if (arrayURL[0] == 'tv') {
    movie_Videos[4] = 'en-US';
  }

  const {
    data: data_Credits,
    error: error_Credits,
    isLoading: isLoading_Credits,
    status: status_Credits,
  } = useQuery(movie_Credits, getData);

  const {
    data: data_Movie,
    error: error_Movie,
    isLoading: isLoading_Movie,
    status: status_Movie,
  } = useQuery(movie, getData);

  const {
    data: data_Videos,
    error: error_Videos,
    isLoading: isLoading_Videos,
    status: status_Videos,
  } = useQuery(movie_Videos, getData);

  if (isLoading_Movie && isLoading_Credits && isLoading_Videos) {
    return <p>loading...</p>;
  }

  const principals = data_Credits && data_Credits.cast.slice(0, 10);
  // console.log(data_Credits.cast.length);
  // console.log(principals.length);
  // console.log('credits', data_Credits);
  // console.log('movie', data_Movie);
  // console.log('video', data_Videos);


  return (
    <>
      {
        !isLoading_Credits && !isLoading_Movie && 
          <div className="bg-fondo">
            <div className="py-10 px-5 -my-2">
              <PaddingX>
                <h1 className="text-3xl font-semibold">{data_Movie.title}</h1>
                <div className="flex flex-col">
                  <div className="relative z-[1] w-full">
                    <div className="">
                      <div className="bg-black">
                        <a href={data_Movie.homepage} target="_blank">
                          <img
                            className="m-auto my-4"
                            src={`https://image.tmdb.org/t/p/w200${data_Movie.poster_path}`}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-lg font-bold flex flex-row gap-2 justify-center">
                          <div className="flex flex-row">
                            <img className="w-4" src="/src/assets/svg/star.svg" alt="" />
                            <div className="flex flex-row">
                              {voteAverageFilm(data_Movie.vote_average)}{" "}
                              <div className="opacity-[60%]">/10</div>
                            </div>
                          </div>
                          <p>&#12539;</p>
                          <div>{voteCountFilm(data_Movie.vote_count)}</div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <p className="text-sm font-semibold">Lanzamiento:</p>
                          <p className="font-normal text-sm">{data_Movie.release_date}</p>
                        </div>
                        <div className="flex flex-row gap-2">
                          <p className="text-sm font-semibold">Duracion:</p>
                          <p className="font-normal text-sm">{durationFilm(data_Movie.runtime)}</p>
                        </div>
                        <div className="flex flex-row gap-2">
                          <p className="text-sm font-semibold">Titulo Original:</p>
                          <p className="font-normal text-sm">
                            {data_Movie.original_title}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1>Generos:</h1>
                          <div className="text-center flex flex-wrap justify-center items-center gap-2">
                            {data_Movie.genres.map((data, index) => (
                              <BTNCategory
                                category={data.name}
                                id={data.id}
                                key={index}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                      <div className="uppercase font-bold  flex flex-row text-center gap-1">
                        <BTNMedia_Movie
                          media={`videos`}
                          id={id}
                          type={arrayURL[0]}
                          name={'Vídeos'}
                          imgIcon={`/src/assets/svg/iconVideo.svg`}
                        />
                        <BTNMedia_Movie
                          media={`imagenes`}
                          id={id}
                          type={arrayURL[0]}
                          name={'Imagenes'}
                          imgIcon={`/src/assets/svg/iconImg.svg`}
                        />
                      </div>
                      <h1 className="text-2xl uppercase">Sipnosis</h1>
                      <p>{data_Movie.overview}</p>
                    </div>
                    {data_Videos && data_Videos.results[0] ?
                      <>
                        <h1 className="text-2xl uppercase">Video Principal</h1>
                        <ReactPlayer
                          className="flex justify-center"
                          url={`https://www.youtube.com/watch?v=${data_Videos.results[0].key}`}
                          playing={true}
                          controls={false}
                          width={"auto"}
                        />
                      </>
                    : ""
                    }
                  </div>
                </div>
              </PaddingX>     
            </div>
            <div className="bg-white px-10 py-10 text-black-text flex flex-col gap-5">
              <PaddingX>
                <h1 className="text-black text-3xl uppercase">Creditos</h1>
                <div className="flex flex-wrap justify-between items-start gap-10 mb-10">
                  {
                    principals.map((data, index)=>(
                      <PerfilPerson
                        name={data.name}
                        img={data.profile_path}
                        id={data.credit_id}
                        key={index}
                      />
                    ))
                  }
                </div>
                <div className="text-center">
                  <Link
                    to={`/creditos/${id}/${arrayURL[0]}`}
                    className="mx-5 my-2 border-4 rounded-md hover:border-yellow-text px-5 py-1 font-bold"
                  >
                      Ver Mas
                  </Link>
                </div>
              </PaddingX>
            </div>
          </div>
      }
    </>
  );
}
