import { fetchRecomendacionMovie } from '@/lib/api'
import { Media } from '@/types/types'
import '@/styles/scrollAnimate.css'
import MovieCard from '../UI/card/MovieCard'
import MoviePreview from './MoviePreview'

import EspaciadoLayout from '../layout/EspaciadoLayout'
import ImagesGridLayout from '../layout/ImagesGridLayout'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface RecommendationsProps {
    id: string;
    type: string;
}

export default function Recommendations({
    id,
    type,
}: RecommendationsProps) {
    // const recomendacion = await fetchRecomendacionMovie(type, id)

    // if (recomendacion.total_results === 0) return

    // const dataFilter = recomendacion.results.filter(
    //     (movie: Media) =>
    //         movie.poster_path !== null &&
    //         movie.backdrop_path !== null &&
    //         movie.popularity > 100.0
    // )

    const [recommendations, setRecommendations] = useState<Media[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
        try {
            const recomendacion = await fetchRecomendacionMovie(type, id);
            
            if (recomendacion.total_results > 0) {
            const filteredData = recomendacion.results.filter(
                (movie: Media) =>
                movie.poster_path !== null &&
                movie.backdrop_path !== null &&
                movie.popularity > 100.0
            );
            setRecommendations(filteredData);
            }
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        } finally {
            setIsLoading(false); // Actualiza el estado de carga una vez que los datos se hayan obtenido
        }
        };

        fetchRecommendations();
    }, [id, type]);

    // if (isLoading) {
    //     return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    // }

    if (recommendations.length === 0) {
        return null; // Retorna null si no hay recomendaciones
    }

    return (
        <EspaciadoLayout component='section' className='py-8 2xl:pb-20'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>
                Recomendaciones
            </h3>
            <ImagesGridLayout>
                {recommendations.map((result: Media, index: number) =>
                    index === 0 ? (
                        <Link
                            key={result.id}
                            to={`/media/${result.id}-${type}`}
                            className='md:col-span-2 xl:col-span-1'
                        >
                            <MoviePreview result={result} />
                        </Link>
                    ) : (
                        <Link
                            to={`/media/${result.id}-${type}`}
                            key={result.id}
                        >
                            <MovieCard animate={true} result={result} />
                        </Link>
                    )
                )}
            </ImagesGridLayout>
        </EspaciadoLayout>
    )
}
