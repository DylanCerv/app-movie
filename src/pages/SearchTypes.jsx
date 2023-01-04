import React from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { getDataInfinity } from "../utils/api";
import Card from "../Components/Individuals/card/card";
import { identifyPage } from "../utils/help";

export default function SearchTypes() {
  let dataOBJ;

  const { pathname } = useLocation();

  const nextPage = (lastPage)=>{
    if (lastPage.page === lastPage.total_pages) return false;
    return lastPage.page + 1;
  }

  const datosTraer = identifyPage(pathname);

  const {
     data,
     error,
     status,
     isLoading,
     hasNextPage,
     fetchNextPage 
  } = useInfiniteQuery(
    ["dataContent"],
    ({ pageParam = 1 }) => getDataInfinity("discover", datosTraer, pageParam),
    {getNextPageParam: (lastPage)=>nextPage(lastPage)}
  );
  
  dataOBJ = data ? data.pages.reduce((prevMovies, page) => prevMovies.concat(page.results),[]): [];

  return (
    <>
      {dataOBJ !== [undefined] && (
        <InfiniteScroll
          dataLength={dataOBJ.length}
          hasMore={hasNextPage}
          next={()=>fetchNextPage()}
          loader={"..."}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {dataOBJ !== [undefined] &&
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
      )}
    </>
  );
}
