import { fetchRepartoMovie } from '@/lib/api'
import { Reparto as RepartoType  } from '@/types/types'
import { obtenerActoresConImagenes } from '@/utils/obtenerActoresConImagenes'
import CarruselReparto from '../UI/slider/CarruselReparto'
import { useEffect, useState } from 'react'

export default function Reparto({
    id,
    type,
}: {
    id: string
    type: string
}) {
    // const start: Reparto = await fetchRepartoMovie(type, id)
    // const director =
    //     start.crew.find(
    //         (miembro) =>
    //             miembro.job === 'Director' ||
    //             miembro.job === 'Series Director' ||
    //             miembro.job === 'Executive Producer'
    //     ) ?? start.crew[0]

    // const actoresConImagenes = obtenerActoresConImagenes(start)

    // // En el caso no haya actores no retornara nada
    // if (start.cast.length === 0) return

    const [reparto, setReparto] = useState<RepartoType | null>(null);
    const [director, setDirector] = useState<any>(null); // Consider using a more specific type
    const [actoresConImagenes, setActoresConImagenes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReparto = async () => {
            try {
                const data = await fetchRepartoMovie(type, id);
                setReparto(data);

                const director = data.crew.find(
                    (miembro: any) =>
                        miembro.job === 'Director' ||
                        miembro.job === 'Series Director' ||
                        miembro.job === 'Executive Producer'
                ) ?? data.crew[0];

                setDirector(director);
                setActoresConImagenes(obtenerActoresConImagenes(data));
            } catch (err) {
                setError('Error al cargar el reparto');
            } finally {
                setLoading(false);
            }
        };

        fetchReparto();
    }, [id, type]);

    if (loading) {
        return <div>Cargando reparto...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!reparto || reparto.cast.length === 0) {
        return <div>No se encontraron actores principales.</div>;
    }

    return (
        <section className='px-5 md:px-8 lg:px-12 lg:py-12 lg:bg-[#050505]'>
            <div className='md:px-8 lg:px-12 2xl:px-16 max-w-[1570px]  relative mx-auto pt-16 md:pt-24'>
                <h2 className='letterScroll font-medium text-2xl md:text-4xl text-txtGray2'>
                    Actores principales
                </h2>
            </div>
            <div className='px-12 md:px-16 lg:px-20 2xl:px-0 letterScroll2 relative mx-auto pt-16 md:pt-20 max-w-[1200px] opacity-90'>
                <span className='lg:text-4xl font-semibold text-txtGray1 text-3xl'>
                    {director?.known_for_department}
                </span>
                <br />
                <h3 className='lg:text-6xl font-semibold mt-3 text-3xl'>
                    {director?.name}
                </h3>
            </div>
            <div className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
                <CarruselReparto actores={actoresConImagenes} type={type} />
            </div>
        </section>
    )
}
