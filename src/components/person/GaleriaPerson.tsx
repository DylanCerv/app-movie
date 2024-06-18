import { useEffect, useState } from "react";
import EspaciadoLayout from "../layout/EspaciadoLayout";
// import dataImages from "@/dataTest/personImages.data.json"
import { GaleriaPerson as GaleryType } from '@/types/types';
import { fetchData } from "@/utils/fetchData";


interface GaleriaPersonProps {
    id: string;
}

export default function GaleriaPerson({id}: GaleriaPersonProps) {

    const [data, setData] = useState<GaleryType[] | any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
          try {
            const query = "language=es-ES&append_to_response=videos";
            const result = await fetchData(`/person/${id}/images`, query);
            setData(result);
            // Actualiza los metadatos del documento
            document.title = result.title ?? result.name;
            document
              .querySelector('meta[name="description"]')
              ?.setAttribute("content", result.overview);
          } catch (err) {
            setError("Error fetching data");
          } finally {
            setLoading(false);
          }
        };
    
        fetchDataAsync();
    }, []);

    if (loading) {
        return;
    }
    
    if (error) {
        return <div>{error}</div>;
    }


  return (
    <EspaciadoLayout
        component='section'
        className='my-8 flex flex-col gap-12 md:my-14 lg:gap-4 2xl:gap-8 text-txtGray2'
    >
        <h2 className='letterScroll font-medium text-2xl md:mb-6 md:text-4xl text-txtGray2'>
            Imágenes
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:justify-start">
            {data?.profiles.map((image: any)=>(
                <div
                    key={image.file_path}
                    className={`relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard`}
                >
                    <img
                        
                        src={`https://image.tmdb.org/t/p/w780${image.file_path}`}
                        alt={`Galeria de Imagen ${image.id}`}
                        className={`max-w-[30vw] self-center object-contain rounded sm:static sm:top-auto sm:max-w-[20vw] md:w-40`}
                        loading='lazy'
                    />
                </div>
            ))}
        </div>
    </EspaciadoLayout>
  )
}
