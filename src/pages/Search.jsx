import React, { useEffect, useState } from 'react';
import { getQuery_GETVariable } from '../utils/help';
import { useNavigate } from 'react-router-dom';
import "./Search.css";
import CardSearchMovie from '../Components/Individuals/CardSearch/CardSearchMovie';
import CardSearchPerson from '../Components/Individuals/CardSearch/CardSearchPerson';
import LinkSeeMore from '../Components/Individuals/LinkSeeMore/LinkSeeMore';
import ResultSearchLayout from '../Components/Layout/ResultSearchLayout';

// import QMoviesJSON from "./../utils/dataTest/Q.json";
// import QPersonsJSON from "./../utils/dataTest/Person.json";
import { useLocation } from "react-router-dom";
import { useQuery } from 'react-query';
import { convert_In_Array_To_API } from '../utils/help';
import { getData } from '../utils/api';
import Loader from '../Components/Individuals/Loader/Loader';

import PaddingX from '../Components/Layout/PaddingX';

export default function Search() {
  const navigate = useNavigate();
  const [dataGET, setDataGET] = useState(undefined);

  
  const { q } = getQuery_GETVariable(['q']);
  const dataSearch = convert_In_Array_To_API("dataSearch", "search", "multi", 1, `&query=${q}`);
  const dataSearchPerson = convert_In_Array_To_API("dataSearchPerson", "search", "person", 1, `&query=${q}`);

  const {
    data: data_Data,
    error: error_Data,
    isLoading: isLoading_Data,
    status: status_Data,
  } = useQuery(dataSearch, getData);

  const {
    data: data_Person,
    error: error_Person,
    isLoading: isLoading_Person,
    status: status_Person,
  } = useQuery(dataSearchPerson, getData);

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


  if (isLoading_Data && isLoading_Person) {
    return <Loader></Loader>;
  }

  return (
    <PaddingX>
      {
      dataGET &&
        <div className='flex flex-col gap-2'>
          <div className='bg-section p-5'>
            <h1 className='text-3xl'>Buscar «{q}» </h1>
          </div>
          <ResultSearchLayout title={`Titulos`}>
            {data_Data &&
              data_Data.results.map((data, index)=>(
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
            { data_Data.total_pages > 1 && <LinkSeeMore url={`/search/`+q} />}
          </ResultSearchLayout>
          <ResultSearchLayout title={`Personas`}>
            {data_Person &&
              data_Person.results.map((data, index)=>(
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
            {data_Person &&
              data_Person.total_pages > 1 && <LinkSeeMore url={`/person/`+q} />
            }
          </ResultSearchLayout>
        </div>
      }
    </PaddingX>
  )
}
