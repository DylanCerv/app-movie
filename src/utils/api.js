import axios from "axios";

const URL_api = import.meta.env.VITE_API_URL;
const key_api = import.meta.env.VITE_API_KEY;


/**
 * Obtiene la data de la API con ayuda de Axios, esta data es enviada a react-query para ser trabajada y almacenada en cache
 * @param {Objeto} info Es el objeto que se envia al usar react-query, aqui es donde estan los parametros en un array
 * @returns Los datos traido de la API
 */
export const getData = async(info)=>{
    try {
        const queryKey = info.queryKey
        
        const typeSearch = queryKey[1]
        const datosTraer = queryKey[2]
        const n_page = queryKey[3]
        const language = queryKey[4]
        const otherGETs = queryKey[5]
        // console.log(`${URL_api}/${typeSearch}/${datosTraer}?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`)
        // return
        const response = await axios.get(`${URL_api}/${typeSearch}/${datosTraer}?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error };
    }
}

/**
 * Obtiene los trending del dia
 * @param {Objeto} info Es el objeto que se envia al usar react-query, aqui es donde estan los parametros en un array
 * @returns Los datos traido de la API
 */
export const getDataTrending = async(info)=>{
    try {
        const queryKey = info.queryKey
        
        const language = queryKey[1]
        const n_page = queryKey[2]
        const otherGETs = queryKey[3]
        
        const response = await axios.get(`${URL_api}/trending/all/day?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error };
    }
}

/**
 * Llama los datos que son traidos en la API pero obtimizado para hacer scrill infinitocon useInfiteQuery
 * @param {String} typeSearch Tipo de busqueda que se va hacer en la API
 * @param {String} datosTraer Identifica que tipo de datos va a traer si son de TV, Movies, Generos, etc...
 * @param {Integer or String} n_page Es la variable que se usa para traer la pagina de la API
 * @param {String} otherGETs Son variables las varaibles GET opcionales que se usan para filtrar datos en la API
 * @param {String} language El idioma en que se va a traer la informacion de la API, ejemplo: es-ES, en-US, etc...
 * @returns Los datos que son traidos en la API
 */
export const getDataInfinity = async(typeSearch, datosTraer, n_page, otherGETs='', language='es-ES')=>{
    try {
        const response = await axios.get(`${URL_api}/${typeSearch}/${datosTraer}?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error };
    }
}