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

export default function Search() {
  const navigte = useNavigate();
  const [dataGET, setDataGET] = useState(undefined);

  useEffect(()=>{
      const variables = getQuery_GETVariable(['q']);
      variables ? setDataGET(variables) : setDataGET(false);
  },[])

  useEffect(()=>{
    if (dataGET === false && dataGET !== undefined) {
      navigte('/');
    }
  },[dataGET])

  return (
    <>
      {
      dataGET &&
        <div className='flex flex-col gap-2'>
          <div className='bg-section p-5'>
            <h1 className='text-3xl'>Buscar «terror» </h1>
          </div>
          <ResultSearchLayout title={`Titulos`}>
            {
              QMoviesJSON.results.map((data, index)=>(
                  <CardSearchMovie 
                    title={data.original_title}
                    date={data.release_date}
                    vote_average={data.vote_average}
                    imgCover={data.poster_path}
                    id={data.id}
                    key={index}
                  />
              ))
            }
            { QMoviesJSON.total_pages > 1 && <LinkSeeMore />}
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
