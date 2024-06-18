import MovieCard from "@/components/UI/card/MovieCard"
import EspaciadoLayout from "@/components/layout/EspaciadoLayout"
import ImagesGridLayout from "@/components/layout/ImagesGridLayout"
import NavSearch from "@/components/search/NavSearch"
import ScrollInfinity from "@/components/search/ScrollInfinity"
import FormSearch from "@/components/shared/header/FormSearch"
import { fetchSearch } from "@/lib/api"
import { Media, OrganizadoPorMovie, OrganizadoPorTv } from "@/types/types"
import { useEffect, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"

export default function SearchPage() {

    const { searchType } = useParams<{ searchType: string }>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesOrSeries, setMoviesOrSeries] = useState<{ results: Media[], total_pages: number }>({ results: [], total_pages: 1 });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const nameType = searchType === 'movie' ? 'Películas' : 'Series';
    const { results: resultadoDeBusqueda, total_pages: totalPages } = moviesOrSeries;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = searchParams.get('q') || '';
                const filter = searchParams.get('filter') as OrganizadoPorMovie | OrganizadoPorTv;
                const genre = searchParams.get('genre') || '';
                const results = await fetchSearch(searchType || 'movie', { q: query, filter, genre });
                setMoviesOrSeries(results);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [searchType, searchParams]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (error) {
        return <div>{error}</div>;
    }
    

    return (
        <div>
            <NavSearch type={searchType || 'movie'}>
                <FormSearch defaultValue={searchParams.get('q') || ''} type={searchType || 'movie'} />
            </NavSearch>
            <EspaciadoLayout
                component='header'
                className='text-center mb-10 mt-[60px] pt-8'
            >
                <h2 className='uppercase text-3xl font-semibold text-txtGray2'>
                    Explorar
                </h2>
                <p className='text-sm text-txtGray1'>
                    Explora genéros. O directores. O títulos multipremiados.
                    Encuentra películas que no sabías que estabas buscando.
                </p>
            </EspaciadoLayout>
            <EspaciadoLayout
                component='main'
                className='min-h-screen bg-[#0a0a0a] pb-20'
            >
                <header className='text-center py-10 text-txtGray1'>
                    <h3 className='uppercase text-lg'>
                        Todas las {nameType} disponibles actualmente en
                        aluraflix
                    </h3>
                </header>
                <ImagesGridLayout component='section'>
                    {resultadoDeBusqueda.map((result: Media) => (
                        <Link
                            to={`/media/${result.id}-${searchType}`}
                            key={result.id}
                        >
                            <MovieCard animate={true} result={result} />
                        </Link>
                    ))}
                    {totalPages >= 2 && (
                        <ScrollInfinity totalPages={totalPages} />
                    )}
                </ImagesGridLayout>
            </EspaciadoLayout>
        </div>
    )
}
