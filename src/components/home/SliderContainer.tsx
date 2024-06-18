import { fetchData } from '@/utils/fetchData';
import SliderMedia from '../UI/slider/SliderMedia'
import { useEffect, useState } from 'react';

interface SliderContainerProps {
    path: string;
    title: string;
    page?: string;
}

export default function SliderContainer({
    path,
    title,
    page,
}: SliderContainerProps) {
    // const type = path.includes('movie') ? 'movie' : 'tv'
    // const query = page ? `language=es-ES&page=${page}` : ''
    // const { results: data } = await fetchData(path, query)

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSliderData = async () => {
            try {
                // const type = path.includes('movie') ? 'movie' : 'tv';
                const query = page ? `language=es-ES&page=${page}` : '';
                const response = await fetchData(path, query);
                setData(response.results);
            } catch (err) {
                setError('Error fetching slider data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSliderData();
    }, [path, page]);

    if (loading) {
        return;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section>
            <header className='mb-2'>
                <h3 className='font-medium text-sm text-txtGray1'>{title}</h3>
            </header>
            {/* <SliderMedia data={data} type={type} /> */}
            <SliderMedia data={data} type={path.includes('movie') ? 'movie' : 'tv'} />
        </section>
    )
}
