import { Link, useLocation, useParams } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Media } from '@/types/types'
import MovieCard from '@/components/UI/card/MovieCard'
import { fetchDataNoStore } from '@/utils/fetchDataNoStore'

const DEFAULT_PAGE = 2
const DEFAULT_FILTER = 'trending'

export default function ScrollInfinity({ totalPages }: { totalPages: number }) {
    const [mediaMovieorSeries, setMediaMovieorSeries] = useState<Media[]>([]) // estado para guardar la data
    const [page, setPage] = useState(DEFAULT_PAGE) // numbero de paginas

    // esto verifica si el usuario llego al final y hace una nueva peticion para scroll infinity
    const loadingRef = useRef<HTMLDivElement>(null)

    const { searchType }: any = useParams() // type => movie or tv

    // input del usuario
    const location  = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const search:any = searchParams.get('q') // q => query
    const filter = searchParams.get('filter') || DEFAULT_FILTER
    const genre = searchParams.get('genre')


    const fetchApiData = useCallback(
        async (url: string) => {
          try {
            const response = await fetchDataNoStore(url);
            const results = response.results || [];

            const filterData = results.filter(
              (result: Media) =>
                  result.poster_path !== null &&
                  result.backdrop_path !== null &&
                  result.popularity > 10.0
            );
            setMediaMovieorSeries((prevData) => [...prevData, ...filterData]);
            setPage((prevPage) => prevPage + 1);
          } catch (error) {
            console.error('Error en la petición:', error);
          }
        },
        [setMediaMovieorSeries, setPage]
    );

    const fetchDataPage = useCallback(async () => {
        if (page > totalPages) return;
    
        let url = '';
        if (search) {
          url = `/search/${searchType}?query=${encodeURIComponent(
            search
          )}&page=${page}&include_adult=false&language=es-MX&api_key=YOUR_API_KEY`;
        } else if (genre) {
          url = `/discover/${searchType}?with_genres=${genre}&page=${page}&language=es-MX&api_key=YOUR_API_KEY`;
        } else {
          url = `/discover/${searchType}?sort_by=${filter}&page=${page}&language=es-MX&api_key=YOUR_API_KEY`;
        }
    
        try {
          await fetchApiData(url);
        } catch (error) {
          console.error('Error en fetchDataPage:', error);
        }
      }, [page, search, searchType, genre, filter, totalPages, fetchApiData]);
      
    useEffect(() => {
        const currentRef = loadingRef.current
        if (!currentRef) return

        const loadingObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    return fetchDataPage()
                }
            },
            { rootMargin: '100px' }
        )

        loadingObserver.observe(currentRef)

        // Almacena la referencia actual en una variable local
        return () => {
            if (currentRef) {
                loadingObserver.unobserve(currentRef)
            }
        }
    }, [mediaMovieorSeries, fetchDataPage])

    // Si la query o busqueda de usuario cambia vaciamos los estados
    useEffect(() => {
        setMediaMovieorSeries([])
        setPage(2)
    }, [search, filter, genre])

    const uniqueIds = new Set()
    // Filtrar datos por id único
    const dataNoRepeat = mediaMovieorSeries.filter((media) => {
        if (!uniqueIds.has(media.id)) {
            uniqueIds.add(media.id)
            return true
        }
        return false
    })

    return (
        <>
            {mediaMovieorSeries.length > 0 &&
                dataNoRepeat.map(({ id, ...media }) => (
                    <Link to={`/media/${id}-${searchType}`} key={id}>
                        <MovieCard animate={true} result={media} />
                    </Link>
                ))}
            {page <= totalPages && (
                <div ref={loadingRef}>
                    {page >= totalPages ? '' : 'Loading...'}
                </div>
            )}
        </>
    )
}
