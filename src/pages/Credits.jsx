import React from 'react'
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getData } from '../utils/api';
import { convert_In_Array_To_API, convert_Url_To_Array } from '../utils/help';
import Loader from '../Components/Individuals/Loader/Loader';
import SectionPersonCredits from '../Components/Individuals/SectionPersonCredits.jsx/SectionPersonCredits';
import PaddingX from '../Components/Layout/PaddingX';

  /**
   * Filtra los datos que hay en la API
   * @param {String} Status El estado de la consulta api, success, error, etc...
   * @param {Array} dataToFilter El array que contiene los datos que se van a filtrar
   * @param {Function} paramFilter Parametros que se deben de filtrar
   * @returns Los datos que coniciden con la funcion que tiene los parametros para filtrar
   */
  const filterData = (Status, dataToFilter, paramFilter)=>{
    if (Status =='success') {
      return dataToFilter.filter(paramFilter);
    } else {
      return "";
    }
  }

  /**
   * Funcion dinamica para cambiar la busqueda en diferentes departamentos
   * @param {String} name Nombre del departamento a fultrar
   * @returns Funcion que sera usada en filter() que verifica si existe el dato en el array
   */
  const knowDepartament = (name)=>{
    const paramFinter = data => data.known_for_department === name
    return paramFinter
  }

export default function Credits() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const arrayURL = convert_Url_To_Array(pathname);

  let credits = convert_In_Array_To_API("credits", arrayURL[2], `${id}/credits`);

  const {
    data: data_Credits,
    error: error_Credits,
    isLoading: isLoading_Credits,
    status: status_Credits,
  } = useQuery(credits, getData);

  if (isLoading_Credits) {
    return <Loader></Loader>
  }
  
  /****************************************
   *        Params for Filter Data
   ***************************************/
  const paramFilterIMG = (data) => data.profile_path !== null && data.profile_path !== undefined;
  const paramFilterWhitOutIMG = (data) => data.profile_path === null || data.profile_path === undefined;

  /****************************************
   *        CAST and CREW original
   ***************************************/
  const cast = status_Credits =='success' ? data_Credits.cast : [];
  const crew = status_Credits =='success' ?  data_Credits.crew : [];

  /****************************************
   *                CAST
   ***************************************/
  const cast_Production     = filterData(status_Credits, cast, knowDepartament("Production"));
  const cast_Crew           = filterData(status_Credits, cast, knowDepartament("Crew"));
  const cast_Acting         = filterData(status_Credits, cast, knowDepartament("Acting"));;
  const cast_Directing      = filterData(status_Credits, cast, knowDepartament("Directing"));
  const cast_Editing        = filterData(status_Credits, cast, knowDepartament("Editing"));
  const cast_Writing        = filterData(status_Credits, cast, knowDepartament("Writing"));
  // IMG
  const img_cast_Production     = filterData(status_Credits, cast_Production, paramFilterIMG);
  const img_cast_Crew           = filterData(status_Credits, cast_Crew, paramFilterIMG);
  const img_cast_Acting         = filterData(status_Credits, cast_Acting, paramFilterIMG);
  const img_cast_Directing      = filterData(status_Credits, cast_Directing, paramFilterIMG);
  const img_cast_Editing        = filterData(status_Credits, cast_Editing, paramFilterIMG);
  const img_cast_Writing        = filterData(status_Credits, cast_Writing, paramFilterIMG);
  //WHITOUT IMG
  const whitout_img_cast_Production     = filterData(status_Credits, cast_Production, paramFilterWhitOutIMG);
  const whitout_img_cast_Crew           = filterData(status_Credits, cast_Crew, paramFilterWhitOutIMG);
  const whitout_img_cast_Acting         = filterData(status_Credits, cast_Acting, paramFilterWhitOutIMG);
  const whitout_img_cast_Directing      = filterData(status_Credits, cast_Directing, paramFilterWhitOutIMG);
  const whitout_img_cast_Editing        = filterData(status_Credits, cast_Editing, paramFilterWhitOutIMG);
  const whitout_img_cast_Writing        = filterData(status_Credits, cast_Writing, paramFilterWhitOutIMG);

  
  /****************************************
   *                CREW
   ***************************************/
  const crew_Production     = filterData(status_Credits, crew, knowDepartament("Production"));
  const crew_Crew           = filterData(status_Credits, crew, knowDepartament("Crew"));
  const crew_Acting         = filterData(status_Credits, crew, knowDepartament("Acting"));
  const crew_Directing      = filterData(status_Credits, crew, knowDepartament("Directing"));
  const crew_Editing        = filterData(status_Credits, crew, knowDepartament("Editing"));
  const crew_Writing        = filterData(status_Credits, crew, knowDepartament("Writing"));
  const crew_EffectVisual   = filterData(status_Credits, crew, knowDepartament("Visual Effects"));
  const crew_Sound          = filterData(status_Credits, crew, knowDepartament("Sound"));
  const crew_Art            = filterData(status_Credits, crew, knowDepartament("Art"));
 // IMG
  const img_crew_Production     = filterData(status_Credits, crew_Production, paramFilterIMG);
  const img_crew_Crew           = filterData(status_Credits, crew_Crew, paramFilterIMG);
  const img_crew_Acting         = filterData(status_Credits, crew_Acting, paramFilterIMG);
  const img_crew_Directing      = filterData(status_Credits, crew_Directing, paramFilterIMG);
  const img_crew_Editing        = filterData(status_Credits, crew_Editing, paramFilterIMG);
  const img_crew_Writing        = filterData(status_Credits, crew_Writing, paramFilterIMG);
  const img_crew_EffectVisual   = filterData(status_Credits, crew_EffectVisual, paramFilterIMG);
  const img_crew_Sound          = filterData(status_Credits, crew_Sound, paramFilterIMG);
  const img_crew_Art            = filterData(status_Credits, crew_Art, paramFilterIMG);
  //WHITOUT IMG
  const whitout_img_crew_Production     = filterData(status_Credits, crew_Production, paramFilterWhitOutIMG);
  const whitout_img_crew_Crew           = filterData(status_Credits, crew_Crew, paramFilterWhitOutIMG);
  const whitout_img_crew_Acting         = filterData(status_Credits, crew_Acting, paramFilterWhitOutIMG);
  const whitout_img_crew_Directing      = filterData(status_Credits, crew_Directing, paramFilterWhitOutIMG);
  const whitout_img_crew_Editing        = filterData(status_Credits, crew_Editing, paramFilterWhitOutIMG);
  const whitout_img_crew_Writing        = filterData(status_Credits, crew_Writing, paramFilterWhitOutIMG);
  const whitout_img_crew_EffectVisual   = filterData(status_Credits, crew_EffectVisual, paramFilterWhitOutIMG);
  const whitout_img_crew_Sound          = filterData(status_Credits, crew_Sound, paramFilterWhitOutIMG);
  const whitout_img_crew_Art            = filterData(status_Credits, crew_Art, paramFilterWhitOutIMG);

  
  // console.log({cast})
  // console.log({cast_Production})
  // console.log({cast_Crew})
  // console.log({cast_Acting})
  // console.log({cast_Directing})
  // console.log({cast_Editing})
  // console.log({cast_Writing})

  // console.log({crew})
  // console.log({crew_Production})
  // console.log({crew_Crew})
  // console.log({img_crew_Acting})
  // console.log({crew_Directing})
  // console.log({crew_Editing})
  // console.log({crew_Writing})
  // console.log({crew_EffectVisual})
  // console.log({crew_Sound})
  // console.log({crew_Art})

  return (
    <>
      {status_Credits == "success" ?
        <div className='px-2 bg-white text-black font-bold text-3xl'>
          <PaddingX>
            <div className='flex flex-col gap-3 mb-16'>
              {cast &&
                <>
                  <h1 className='text-black text-center'>Cast</h1>
                  <>
                    {/**********************************************
                                        ACTORES 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'ACTORES'}
                      whitIMG={img_cast_Acting}
                      whitoutIMG={whitout_img_cast_Acting}
                    />
                    
                    {/**********************************************
                                        PRODUCCION 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'PRODUCCION'}
                      whitIMG={img_cast_Production}
                      whitoutIMG={whitout_img_cast_Production}
                    />
                    
                    {/**********************************************
                                        CREW 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'PRODUCCION'}
                      whitIMG={img_cast_Crew}
                      whitoutIMG={whitout_img_cast_Crew}
                    />
                    
                    {/**********************************************
                                        DIRECCION 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'PRODUCCION'}
                      whitIMG={img_cast_Directing}
                      whitoutIMG={whitout_img_cast_Directing}
                    />
                      
                    {/**********************************************
                                        EDICION 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'PRODUCCION'}
                      whitIMG={img_cast_Editing}
                      whitoutIMG={whitout_img_cast_Editing}
                    />
                    
                    {/**********************************************
                                        WRITTING 
                    **********************************************/}
                    <SectionPersonCredits
                      title={'PRODUCCION'}
                      whitIMG={img_cast_Writing}
                      whitoutIMG={whitout_img_cast_Writing}
                    />
                  </>
                </>
              }
            </div>
            <div className='flex flex-col gap-3 mb-16'>
              {crew &&
                  <>
                    <h1 className='text-black text-center'>Crew</h1>
                    <>
                      {/**********************************************
                                          PRODUCCION 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'PRODUCCION'}
                        whitIMG={img_crew_Production}
                        whitoutIMG={whitout_img_crew_Production}
                      />
                      
                      {/**********************************************
                                          ACTORES 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'ACTORES'}
                        whitIMG={img_crew_Acting}
                        whitoutIMG={whitout_img_crew_Acting}
                      />
                      
                      {/**********************************************
                                          DIRECCION 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'DIRECCION'}
                        whitIMG={img_crew_Directing}
                        whitoutIMG={whitout_img_crew_Directing}
                      />
                      
                      {/**********************************************
                                          EFFECTOS VISUAL 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'EFFECTOS VISUAL'}
                        whitIMG={img_crew_EffectVisual}
                        whitoutIMG={whitout_img_crew_EffectVisual}
                      />
                      
                      {/**********************************************
                                          SONIDO 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'SONIDO'}
                        whitIMG={img_crew_Sound}
                        whitoutIMG={whitout_img_crew_Sound}
                      />
                      
                      {/**********************************************
                                          ART 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'ART'}
                        whitIMG={img_crew_Art}
                        whitoutIMG={whitout_img_crew_Art}
                      />
                      
                      {/**********************************************
                                          CREW 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'CREW'}
                        whitIMG={img_crew_Crew}
                        whitoutIMG={whitout_img_crew_Crew}
                      />
                        
                      {/**********************************************
                                          EDICION 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'EDICION'}
                        whitIMG={img_crew_Editing}
                        whitoutIMG={whitout_img_crew_Editing}
                      />
                      
                      {/**********************************************
                                          WRITTING 
                      **********************************************/}
                      <SectionPersonCredits
                        title={'WRITTING'}
                        whitIMG={img_crew_Writing}
                        whitoutIMG={whitout_img_crew_Writing}
                      />
                    </>
                  </>
                }
            </div>
          </PaddingX>
        </div>
        : ""
      }
    </>
  )
}
