import React from "react";
/** Components **/
import Card from "../Components/Individuals/card/card";
import Carrusel from "../Components/Complejos/Carrusel/Carrusel";
import Cine from "../Components/Individuals/Cine/Cine";
import Estrenos from "../Components/Individuals/Estrenos/Estrenos";
import HomeCarruselLayout from "../Components/Layout/HomeCarruselLayout";
import Loader from "../Components/Individuals/Loader/Loader";
import CardSearchMore from "../Components/Individuals/card/CardSearchMore";
/** Slider **/
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { settingsCine, settingsCarrunselVertical } from "../utils/sliderSettings";
/** API **/
import { useQuery } from "react-query";
import { convert_In_Array_To_API } from "../utils/help";
import { getData, getDataTrending } from "../utils/api";

export default function Home() {
  const NowPlayingMovies = convert_In_Array_To_API("nowPlayingMovies", "movie", "now_playing");
  const UpComingMovies = convert_In_Array_To_API("upComingMovies", "movie", "upcoming");
  const PopularMovies = convert_In_Array_To_API("popularMovies", "movie", "popular");
  const TopRatedMovies = convert_In_Array_To_API("topRatedMovies", "movie", "top_rated");
  const PopularTV = convert_In_Array_To_API("popularMovies", "tv", "popular");
  const TopRatedTV = convert_In_Array_To_API("topRatedMovies", "tv", "top_rated");
  const Trending = ["trending", "es-MX", 3, "&sort_by=popularity.desc"];

  /**
   * Use query para las peliculas
   */
  const {
    data: data_NowPlayingMovies,
    error: error_NowPlayingMovies,
    status: status_NowPlayingMovies,
    isLoading: isLoading_NowPlayingMovies,
  } = useQuery(NowPlayingMovies, getData);

  const {
    data: data_UpComingMovies,
    error: error_UpComingMovies,
    status: status_UpComingMovies,
    isLoading: isLoading_UpComingMovies,
  } = useQuery(UpComingMovies, getData);

  const {
    data: data_PopularMovies,
    error: error_PopularMovies,
    status: status_PopularMovies,
    isLoading: isLoading_PopularMovies,
  } = useQuery(PopularMovies, getData);

  const {
    data: data_TopRatedMovies,
    error: error_TopRatedMovies,
    status: status_TopRatedMovies,
    isLoading: isLoading_TopRatedMovies,
  } = useQuery(TopRatedMovies, getData);

  /**
   * Use query para las Series de TV
   */
  const {
    data: data_PopularTV,
    error: error_PopularTV,
    status: status_PopularTV,
    isLoading: isLoading_PopularTV,
  } = useQuery(PopularTV, getData);

  const {
    data: data_Trending,
    error: error_Trending,
    status: status_Trending,
    isLoading: isLoading_Trending,
  } = useQuery(Trending, getDataTrending);

  const {
    data: data_TopRatedTV,
    error: error_TopRatedTV,
    status: status_TopRatedTV,
    isLoading: isLoading_TopRatedTV,
  } = useQuery(TopRatedTV, getData);

  if (
    isLoading_NowPlayingMovies &&
    isLoading_UpComingMovies &&
    isLoading_PopularMovies &&
    isLoading_TopRatedMovies &&
    isLoading_PopularTV &&
    isLoading_TopRatedTV &&
    isLoading_Trending
  ) {
    return <Loader></Loader>;
  }

  return (
    <div className="p-2 md:px-10 lg:px-20">
      <section
        className="max-w-[1200px] xl:w-screen h-full mx-auto flex flex-col justify-center gap-1 border-transparent m-0 pt-1 lg:flex-row"
      >
        <div className="lg:w-[65%] mb-5">
          <h1 className="text-[var(--yellow)] uppercase text-center text-lg mb-2 md:text-2xl">EN CINE</h1>
          <Slider {...settingsCine}>
            {status_NowPlayingMovies === "success" &&
              data_NowPlayingMovies.results.map((dataMovie, index) => (
                <Cine
                  imgCover={dataMovie.poster_path}
                  imgPortada={dataMovie.backdrop_path}
                  title={dataMovie.title}
                  id={dataMovie.id}
                  key={index}
                />
              ))}
          </Slider>
        </div>
        <div className="flex flex-col gap-1 h-full  min-[600px]:pl-10 lg:w-[35%] ">
          <h2 className="text-[var(--yellow)] uppercase text-center text-lg mb-2 md:text-1xl lg:mt-5 lg:mb-8">Proximamente</h2>
          {status_UpComingMovies === "success" && (
            <Slider
              className="verticalSlider p-2 lg:rounded-lg lg:py-5 lg:flex lg:flex-col lg:bg-section lg:m-2 lg:bg-[var(--color-bg-header)]"
              {...settingsCarrunselVertical}
            >
              {status_UpComingMovies === "success" &&
                data_UpComingMovies.results.map((data, index) => (
                  <Estrenos
                    imgCover={data.poster_path}
                    title={data.title}
                    voteStar={data.vote_average}
                    id={data.id}
                    key={index}
                  />
                ))}
            </Slider>
          )}
        </div>
      </section>
      <HomeCarruselLayout title={`Peliculas`}>
        <Carrusel
          title={`Popular`}
          status={status_PopularMovies}
        >
          {status_PopularMovies === "success" &&
            data_PopularMovies.results.map((data, index) => (
              <Card
                title={data.title}
                stars={data.vote_average}
                imgCover={data.poster_path}
                date={data.release_date}
                type="movie"
                id={data.id}
                key={index}
              />
            ))}
            <CardSearchMore
              url="/movie/popular"
            />
        </Carrusel>
        <Carrusel
          title={`Mejor Valoradas por los Usuarios`}
          status={status_TopRatedMovies}
        >
          {status_TopRatedMovies === "success" &&
            data_TopRatedMovies.results.map((data, index) => (
              <Card
                title={data.title}
                stars={data.vote_average}
                imgCover={data.poster_path}
                date={data.release_date}
                type="movie"
                id={data.id}
                key={index}
              />
            ))}
            <CardSearchMore
              url="/movie/top_rated"
            />
        </Carrusel>
      </HomeCarruselLayout>
      <HomeCarruselLayout title={`Series (TV)`}>
        <Carrusel
          title={`Popular`}
          status={status_PopularTV}
        >
          {status_PopularTV === "success" &&
            data_PopularTV.results.map((data, index) => (
              <Card
                title={data.name}
                stars={data.vote_average}
                imgCover={data.poster_path}
                date={data.release_date}
                type="tv"
                id={data.id}
                key={index}
              />
            ))}
            <CardSearchMore
              url="/tv/popular"
            />
        </Carrusel>
        <Carrusel
          title={`Mejor Valoradas por los Usuarios`}
          status={status_TopRatedTV}
        >
          {status_TopRatedTV === "success" &&
            data_TopRatedTV.results.map((data, index) => (
              <Card
                title={data.name}
                stars={data.vote_average}
                imgCover={data.poster_path}
                date={data.release_date}
                type="tv"
                id={data.id}
                key={index}
              />
            ))}
            <CardSearchMore
              url="/tv/top_rated"
            />
        </Carrusel>
      </HomeCarruselLayout>
    </div>
  );
}
