import React from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { getDataInfinity } from "../utils/api";
import Card from "../Components/Individuals/card/card";
import { identifyPage } from "../utils/help";
import { useEffect } from "react";
import Loader from "../Components/Individuals/Loader/Loader";
import { genresTV, genresMovies } from "../utils/generos";
import { searchGenere } from "../utils/help";

export default function SearchTypes() {
  let dataOBJ;
  let idGenero;
  const { pathname } = useLocation();
  const query = pathname.substring(1).split("/");
  let ruta = pathname;
  const indexLast = query.length - 1;
  if (query.length > 2) {
    ruta = query[0];
  } else {
    ruta = query[indexLast];
  }

  const datosTraer = identifyPage(ruta);
  const verifySearch = datosTraer ? "discover" : "search";
  const verifySearchData = datosTraer ? datosTraer : "multi";
  const verifySendGET = datosTraer ? "" : "&query=" + query[1];

  /**
   * Identifica el tipo de dato que se debe de buscar en la API
   * @param {String} verifySearchData En que pagina se encuentra, si es para tv, movie o genero
   * @param {Array} queryRoute Partes de la url, ejemplo: ['genero', 'popular, 'tv]
   * @param {Integer} indexLast Numero total de elementos que existe en queryRoute
   * @returns El tipo de busqueda que se va a realizar en la API
   */
  const TypeSearchFunction = (verifySearchData, queryRoute, indexLast) => {
    if (verifySearchData == "gener") {
      return queryRoute[indexLast];
    } else {
      return verifySearchData;
    }
  };

  /**
   * Indica las varaibles que finalmente se vana usar en la API
   * @param {String} verifySendGET Variables GET que van en la API
   * @param {Array} queryRoute Partes de la url, ejemplo: ['genero', 'popular, 'tv]
   * @param {String o Integer} idGenero El id del genero que se va a buscar
   * @returns Varaibles GET que se van a usar finalmente en la API
   */
  const VariablesGET = (
    verifySendGET,
    genresTV,
    genresMovies,
    query,
    indexLastQuery,
    searchGenere
  ) => {
    if (!verifySendGET) {
      if (datosTraer == "gener") {
        // console.log(query[1] ,query[indexLastQuery]);
        const idGenero = searchGenere(query[1], query[indexLastQuery]);
        return `&with_genres=${idGenero}`;
      } else {
        return verifySendGET;
      }
    } else {
      return verifySendGET;
    }
  };

  const nextPage = (lastPage) => {
    if (lastPage.page === lastPage.total_pages) return false;
    return lastPage.page + 1;
  };

  const VarsGET = VariablesGET(
    verifySendGET,
    genresTV,
    genresMovies,
    query,
    indexLast,
    searchGenere
  );
  const TypeSearch = TypeSearchFunction(verifySearchData, query, indexLast);
  const {
    data,
    error,
    status,
    isLoading,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["dataContent"],
    ({ pageParam = 1 }) =>
      getDataInfinity(verifySearch, TypeSearch, pageParam, VarsGET),
    { getNextPageParam: (lastPage) => nextPage(lastPage) }
  );

  dataOBJ = data
    ? data.pages.reduce(
        (prevMovies, page) => prevMovies.concat(page.results),
        []
      )
    : [];

  useEffect(() => {
    refetch();
  }, [pathname]);

  return (
    <>
      {dataOBJ ? (
        <InfiniteScroll
          dataLength={dataOBJ.length}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader={"..."}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {dataOBJ &&
              dataOBJ.map((data, index) => (
                <div className="w-[8rem] lg:w-[10rem]" key={index}>
                  <Card
                    title={data.title ? data.title : data.name}
                    stars={data.vote_average}
                    imgCover={data.poster_path}
                    date={data.release_date}
                    type="tv"
                    id={data.id}
                    key={index}
                  />
                </div>
              ))}
          </div>
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </>
  );
}
