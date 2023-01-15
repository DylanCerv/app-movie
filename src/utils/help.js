/**
 * **********************************************************
 * **********************************************************
 * 
 *         ************* VARIABLES ***************
 * 
 * **********************************************************
 * **********************************************************
 */






/**
 * **********************************************************
 * **********************************************************
 * 
 *         ************* FUNCIONES ***************
 * 
 * **********************************************************
 * **********************************************************
 */

/**
 * Identifica en que pagina se encuentra el usuario y devuelve un valor que se usa en la API para poder
 * llamar los datos necesarios
 * @param {String} pathname URL de la pagina en donde esta parado
 * @returns String - El nombre de la pagina para poder llamar los datos en la API
 */
export const identifyPage = (pathname) => {
    switch (pathname) {
      case "movies":
        return "movie";
        break;
      case "tv":
        return "tv";
        break;
    case "genero":
        return "gener";
        break;
      default:
        return false; // indica que debera buscar este valor tanto en las peliculas como en las series
        break;
    }
};

/**
 * Genera un array con los valores necesarios para hacer la llamada de a la API con ayuda de React Query
 * @param {String} nameReactQuery El nombre que se usa como identificador en React Query
 * @param {String} typeSearch Solo recibe 2 valores "movie" o "tv", ayuda a identificar en la API que debe de buscar (peliculas o series de tv)
 * @param {String} searchAPI Lo que quiere que se traiga de la aqui, ejemplo: 'popular', 'upcoming', etc...
 * @param {Integer} page El numero de pagina que se trae de la API, si no se declara si valor por defecto es 1 (opcional)
 * @param {String} otherVarsGETs Otras variables GET que se van a usar para hacer filstros en la API (opcional)
 * @param {String} language El idioma en que se van a traer los datos de la API, ejemplo: en-US, es-MX, es-ES, etc... (opcional)
 * @returns {Array} Este array se va a usar en el primer parametro de la funcion useQuery()
 */
export const convert_In_Array_To_API = (nameReactQuery, typeSearch, searchAPI, page=1, otherVarsGETs='&sort_by=popularity.desc', language='es-ES')=>{
    return [nameReactQuery, typeSearch, searchAPI, page, language, otherVarsGETs];
}

/**
 * Busca que exista las variables GET y las devuele en un objeto para procesarlas
 * @param {Array} variables Nombre de las variables GET a buscar
 * @returns Un objeto donde su clave es el nombre de las variables y su valor es su valor
 */
export const getQuery_GETVariable = (variables)=>{
   let values = {};
   let query = window.location.search.substring(1);
   let vars = query.split("&");
   
   for (let i=0; i < vars.length; i++) {
       let partes = vars[i].split("=");
       if(variables.includes(partes[0])) {
           values[partes[0]] = partes[1]; //Ingresa los datos en un objeto
       }
   }
   return Object.keys(values).length === 0 ? false : values;
}

/**
 * Redondea el un numero
 * @param {Integer} vote_average El valor del numeros de estrellas
 * @returns Integer - EL numero de estrellas
 */
export const voteAverageFilm = (vote_average)=>{return Math.round(vote_average * 10) / 10}

/**
 * Formatea tiempo de duracion de la pelicula en un formato facil de leer (1h 20min)
 * @param {Integer} runtime El tiempo de la duracion de la pelicula en minutos totales
 * @returns String - El tiempo de la dueracion de la pelicula
 */
export const durationFilm = (runtime)=>{
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
}

/**
 * Formatea el numero de votos a un valor mucho mas facil de leer
 * @param {Integer} voteCount El numero de votos totales
 * @returns String - El numero de votos pero formateado en "k", "M" o "B"
 */
export const voteCountFilm = (voteCount)=>{
    const seraMil = voteCount >= 1000 && voteCount < 1000000;
    const seraMillon = voteCount >= 1000000 && voteCount < 1000000000;
    const seraBillon = voteCount >= 1000000000;
  
    switch (true) {
        case (voteCount === 0):
            return "No hay votos";
        case seraMil:
            return (voteCount / 1000).toFixed(1) + "k";
            break;
        case seraMillon:
            return (voteCount / 1000000).toFixed(1) + "M";
            break;
        case seraBillon:
            return (voteCount / 1000000000).toFixed(1) + "B";
            break;
        default:
            return voteCount;
            break;
    }
}


export const searchGenere = (genere, type)=>{
    switch (type) {
        case "tv": 
                switch (genere) {
                    case "Action_Adventure":
                        return 10759;
                        break;
                    case "Animacion":
                        return 16;
                        break;
                    case "Comedia":
                        return 35;
                        break;
                    case "Crimen":
                        return 80;
                        break;
                    case "Documental":
                        return 99;
                        break;
                    case "Drama":
                        return 18;
                        break;
                    case "Familia":
                        return 10751;
                        break;
                    case "Infantil":
                        return 10762;
                        break;
                    case "Misterio":
                        return 9648;
                        break;
                    case "Noticias":
                        return 10763;
                        break;
                    case "Realidad":
                        return 10764;
                        break;
                    case "Ciencia_Ficcion_y_Fantasia":
                        return 10765;
                        break;
                    case "Telenovelas":
                        return 10766;
                        break;
                    case "Talk_Show":
                        return 10767;
                        break;
                    case "Guerra_y_Politica":
                        return 10768;
                        break;
                    case "Western":
                        return 37;
                        break;
                }
            break;
        case "movie":
                switch (genere) {
                    case "Accion":
                        return 28;
                    case "Aventura":
                        return 12;
                        break;
                    case "Animacion":
                        return 16;
                        break;
                    case "Comedia":
                        return 35;
                        break;
                    case "Crimen":
                        return 80;
                        break;
                    case "Documental":
                        return 99;
                        break;
                    case "Drama":
                        return 18;
                        break;
                    case "Familia":
                        return 10751;
                        break;
                    case "Fantasia":
                        return 14;
                        break;
                    case "Historia":
                        return 36;
                        break;
                    case "Terror":
                        return 27;
                        break;
                    case "Musical":
                        return 10402;
                        break;
                    case "Misterio":
                        return 9648;
                        break;
                    case "Romance":
                        return 10749;
                        break;
                    case "Ciencia_Ficcion":
                        return 878;
                        break;
                    
                    case "TV_movie":
                        return 10770;
                        break;
                    case "Suspenso":
                        return 53;
                        break;
                    case "Guerra":
                        return 10752;
                        break;
                    case "Western":
                        return 37;
                        break;
                }
            break;
    }
}