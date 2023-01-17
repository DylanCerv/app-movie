import React from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { getDataInfinity } from "../utils/api";
import Card from "../Components/Individuals/card/card";
import { identifyPage } from "../utils/help";
import { useEffect } from "react";
import Loader from "../Components/Individuals/Loader/Loader";
import {
  searchGenere,
  get_Index_Of_Last_Array_Element,
  convert_Url_To_Array,
} from "../utils/help";
import PaddingX from "../Components/Layout/PaddingX";

/**
 * Se utiliza en getNextPageParam de useInfiniteQuery() para traer la siguiente pagina de la API
 * @param {Integer} lastPage Numero de la pagina en la que esta en la llamada de los datos de la API
 * @returns El numero de la pagina que esta parada la API +1, para traer la pagina siguiente
 */
const nextPage = (lastPage) => {
  if (lastPage.page === lastPage.total_pages) return false;
  return lastPage.page + 1;
};

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
  datosTraer,
  query,
  indexLastQuery,
  searchGenere
) => {
  if (verifySendGET) {
    return verifySendGET;
  } else {
    if (datosTraer == "gener") {
      const idGenero = searchGenere(query[1], query[indexLastQuery]);
      return `&with_genres=${idGenero}`;
    } else {
      return verifySendGET;
    }
  }
};

export default function SearchTypes() {
  let dataOBJ;
  let ruta;
  let type;

  const { pathname } = useLocation();
  const query = convert_Url_To_Array(pathname);
  const indexLast = get_Index_Of_Last_Array_Element(query);

  /* Identifica si es la ruta para buscar generos */
  if (query.length > 2) {
    ruta = query[0];
  } else {
    ruta = pathname;
  }

  const datosTraer = identifyPage(ruta, query);
  let verifySearch = datosTraer ? "discover" : "search";
  const verifySearchData = datosTraer ? datosTraer : "multi";
  const verifySendGET = datosTraer ? "" : "&query=" + query[1];

  if (query[1] == "popular" || query[1] == "top_rated") {
    verifySearch = "";
  }

  const TypeSearch = TypeSearchFunction(verifySearchData, query, indexLast);
  const VarsGET = VariablesGET(
    verifySendGET,
    datosTraer,
    query,
    indexLast,
    searchGenere
  );

  const {
    data,
    isError,
    status,
    isLoading,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["dataContent"],
    ({ pageParam = 1 }) => getDataInfinity(verifySearch, TypeSearch, pageParam, VarsGET),
    { getNextPageParam: (lastPage) => nextPage(lastPage) }
  );

  dataOBJ = data ? 
                  data.pages.reduce((prevMovies, page) => prevMovies.concat(page.results),[])
                 :
                  [];

  useEffect(() => {
    refetch();
  }, [pathname]);

  console.log(dataOBJ);

  return (
    <>
      {dataOBJ ? (
        <PaddingX>
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
                      type={TypeSearch}
                      id={data.id}
                      key={index}
                    />
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        </PaddingX>
      ) : (
        <Loader />
      )}
    </>
  );
}
