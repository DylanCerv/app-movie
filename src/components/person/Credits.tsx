import { useEffect, useState } from "react";
import EspaciadoLayout from "../layout/EspaciadoLayout";
import SliderMediaCredits from "../UI/slider/SliderMediaCredits";
import { MoviesAndSeriesCredits } from '../../types/types';
import { fetchData } from "@/utils/fetchData";


interface CreditsProps {
    id: string;
}

export default function Credits({
    id,
}: CreditsProps) {

    const [data, setData] = useState<MoviesAndSeriesCredits | any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
          try {
            const query = "language=es-ES&append_to_response=videos";
            const result = await fetchData(`/person/${id}/combined_credits`, query);
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
            Filmografia
        </h2>
        {data && Object.keys(data).map((key:any) => (
            key != 'id' && 
                <section key={key}>
                    <header className='mb-2'>
                        <h3 className='font-medium text-sm text-txtGray1'>{key.toUpperCase()}</h3>
                    </header>
                    <SliderMediaCredits data={data[key]} />
                </section>
        ))}
    </EspaciadoLayout>
  )
}
