import React, { useEffect, useState } from 'react';
import { getQuery_GETVariable } from '../utils/help';
import { useNavigate } from 'react-router-dom';
import "./Search.css";
import CardSearchMovie from '../Components/Individuals/CardSearch/CardSearchMovie';
import CardSearchPerson from '../Components/Individuals/CardSearch/CardSearchPerson';
import LinkSeeMore from '../Components/Individuals/LinkSeeMore/LinkSeeMore';
import ResultSearchLayout from '../Components/Layout/ResultSearchLayout';

import QMoviesJSON from "./../utils/dataTest/Q.json";
import QPersonsJSON from "./../utils/dataTest/Person.json";
import { useLocation } from "react-router-dom";
import { useQuery } from 'react-query';
import { convert_In_Array_To_API } from '../utils/help';
import { getData } from '../utils/api';
import Loader from '../Components/Individuals/Loader/Loader';

export default function Search() {
  const navigate = useNavigate();
  const [dataGET, setDataGET] = useState(undefined);
  // const { search } = useLocation();
  const { q } = getQuery_GETVariable(['q']);

  const dataSearch = convert_In_Array_To_API("dataSearch", "search", "multi", 1, `&query=${q}`);

  const {
    data,
    error,
    isLoading,
    status,
  } = useQuery(dataSearch, getData);


  useEffect(()=>{
      const { q } = getQuery_GETVariable(['q']);
      q ? setDataGET(q) : setDataGET(false);
  },[])

  useEffect(()=>{
    if (dataGET === false && dataGET !== undefined) {
      navigate('/');
    }
  },[dataGET])
  useEffect(()=>{
    if (dataGET === false && dataGET !== undefined) {
      navigate('/');
    }
  },[dataGET])


  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(data)

  return (
    <>
      {
      dataGET &&
        <div className='flex flex-col gap-2'>
          <div className='bg-section p-5'>
            <h1 className='text-3xl'>Buscar «{q}» </h1>
          </div>
          <ResultSearchLayout title={`Titulos`}>
            {
              data.results.map((data, index)=>(
                  <CardSearchMovie 
                    title={data.title ? data.title : data.name}
                    date={data.release_date}
                    vote_average={data.vote_average}
                    imgCover={data.poster_path}
                    type = {data.media_type}
                    id={data.id}
                    key={index}
                  />
              ))
            }
            { data.total_pages > 1 && <LinkSeeMore q={q} />}
          </ResultSearchLayout>
          <ResultSearchLayout title={`Personas`}>
            {
              QPersonsJSON.results.map((data, index)=>(
                <CardSearchPerson 
                  name={data.name}
                  department={data.known_for_department}
                  popularity={data.popularity}
                  imgPerfil={data.profile_path}
                  id={data.id}
                  key={index}
                />
              ))
            }
            { QPersonsJSON.total_pages > 1 && <LinkSeeMore />}
          </ResultSearchLayout>
        </div>
      }
    </>
  )
}
