import Credits from "@/components/person/Credits";
import GaleriaPerson from "@/components/person/GaleriaPerson";
import TopLevelDetails from "@/components/person/TopLevelDetails";
import NavSearch from "@/components/search/NavSearch";
import Footer from "@/components/shared/footer/Footer";
import FormSearch from "@/components/shared/header/FormSearch";
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function PersonPage() {
  
  const { personId } = useParams<{ personId: string | any }>();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [id, type] = personId.split('-');


  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //       try {
  //           if (personId) {
  //             const [id, type] = personId.split('-');
  //             const query = 'language=es-ES&append_to_response=videos';
  //             const result = await fetchData(`/person/${id}`, query);
  //             setData(result);
  //             // Actualiza los metadatos del documento
  //             document.title = result.title ?? result.name;
  //             document.querySelector('meta[name="description"]')?.setAttribute('content', result.overview);
  //           }
  //       } catch (err) {
  //           setError('Error fetching data');
  //       } finally {
  //           setLoading(false);
  //       }
  //   };

  //   fetchDataAsync();
  // }, [personId]);

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!data) {
  //   return <div>No se encontraron datos</div>;
  // }


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

      <main>
        {/* Detalles Principales */}
        <TopLevelDetails id={id} />

        {/* Creditos   */}
        <Credits id={id} />

        {/* Galeria */}
        <GaleriaPerson id={id} />
      </main>

      <Footer />
    </div>
  )
}
