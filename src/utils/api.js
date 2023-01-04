import axios from "axios";

const URL_api = import.meta.env.VITE_API_URL;
const key_api = import.meta.env.VITE_API_KEY;


/**
 * Obtiene la data de la API con ayuda de Axios, esta data es enviada a react-query para ser trabajada y almacenada en cache
 * @param {Objeto} info Es el objeto que se envia al usar react-query, aqui es donde estan los parametros en un array
 * @returns Data de la Api
 */
export const getData = async(info)=>{
    try {
        // console.log(info)
        const queryKey = info.queryKey

        const typeSearch = queryKey[1]
        const datosTraer = queryKey[2]
        const n_page = queryKey[3]
        const language = queryKey[4]
        const otherGETs = queryKey[5]
        const response = await axios.get(`${URL_api}/${typeSearch}/${datosTraer}?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error };
    }
}


export const getDataTrending = async(info)=>{
    try {
        // console.log(info)
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


export const getDataInfinity = async(typeSearch, datosTraer, n_page, otherGETs='', language='es-ES')=>{
    try {
        const response = await axios.get(`${URL_api}/${typeSearch}/${datosTraer}?api_key=${key_api}&language=${language}&page=${n_page}${otherGETs}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return { error };
    }
}