import EspaciadoLayout from '@/components/layout/EspaciadoLayout'
import BgImage from '@/components/media/BgImage'
import Recommendations from '@/components/media/Recommendations'
import DetallesProduccion from '@/components/media/DetallesProduccion'
import Galeria from '@/components/media/Galeria'
import Header from '@/components/media/Header'
import Reparto from '@/components/media/Reparto'
import NavSearch from '@/components/search/NavSearch'
import Footer from '@/components/shared/footer/Footer'
import FormSearch from '@/components/shared/header/FormSearch'
import { fetchData } from '@/utils/fetchData'
import { Suspense, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

// export async function generateMetadata({
//     params,
// }: {
//     params: { mediaInfo: string }
// }) {
//     const [id, type] = params.mediaInfo.split('-')
//     const data = await fetchData(`/${type}/${id}`)
//     const title = data.title ?? data.name

//     return {
//         title: title,
//         description: data.overview,
//         openGraph: {
//             images: [
//                 {
//                     url: `https://image.tmdb.org/t/p/w780${data.backdrop_path}`,
//                 },
//             ],
//         },
//     }
// }

export default function MediaPage() {
    
    const { mediaInfo } = useParams<{ mediaInfo: string | any }>();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                if (mediaInfo) {
                    const [id, type] = mediaInfo.split('-');
                    const query = 'language=es-ES&append_to_response=videos';
                    const result = await fetchData(`/${type}/${id}`, query);
                    setData(result);
                    // Actualiza los metadatos del documento
                    document.title = result.title ?? result.name;
                    document.querySelector('meta[name="description"]')?.setAttribute('content', result.overview);
                    // Maneja OpenGraph y otros metadatos como desees.
                }
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchDataAsync();
    }, [mediaInfo]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!data) {
        return <div>No se encontraron datos</div>;
    }

    const [id, type] = mediaInfo.split('-');

    return (
        <div>
            <header className='hidden md:block'>
                <NavSearch type={type}>
                    <FormSearch
                        defaultValue={searchParams.get('q') || ''}
                        type={type}
                    />
                </NavSearch>
            </header>
            <div className='scrollMove'>
                {/* FONDO */}
                <BgImage data={data} />

                {/* SECCION PRINCIPAL */}
                <main className='relative w-full carrusel pb-0 mt-[60vh] bg-gradiantTop backdrop-blur-3xl lg:backdrop-blur-none lg:bg-none lg:mt-0 lg:pt-[70vh] xl:pt-[65vh]'>
                    {/* INFO MOVIE */}
                    <EspaciadoLayout className='pt-8 2xl:pb-10'>
                        <Header data={data} type={type} />
                    </EspaciadoLayout>

                    {/* SECCION RECOMENDADOS */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <Recommendations type={type} id={id} />
                    </Suspense>
                    {/* SECCION ACTORES */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <Reparto type={type} id={id} />
                    </Suspense>

                    {/* INFORMACION DE LA PELICULA */}
                    <EspaciadoLayout className='bg-black text-[#666666] py-8 pt-8 lg:py-20'>
                        <DetallesProduccion data={data} />
                    </EspaciadoLayout>

                    {/* SECCION DE IMAGENES */}
                    {type === 'movie' && (
                        <section className='py-8 pt-8 lg:py-20 bg-black'>
                            <Galeria />
                        </section>
                    )}
                </main>
                <Footer />
            </div>
        </div>
    )
}
