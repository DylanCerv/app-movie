import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/utils/fetchData";
// import dataDetails from "@/dataTest/personDetails.data.json"
import EspaciadoLayout from "../layout/EspaciadoLayout";

interface TopLevelDetailsProps {
  id: string;
}

export default function TopLevelDetails({ id }: TopLevelDetailsProps) {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showFullText, setShowFullText] = useState(false);
  const [fullTextHeight, setFullTextHeight] = useState(0);
  const fullTextRef = useRef<any>(null);
  const toggleText = () => setShowFullText(!showFullText);

  useEffect(() => {
    if (fullTextRef.current) {
      setFullTextHeight(fullTextRef.current?.scrollHeight);
    }
  }, [data?.biography]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const query = "language=es-ES&append_to_response=videos";
        const result = await fetchData(`/person/${id}`, query);
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
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No se encontraron datos</div>;
  }


  return (
    <EspaciadoLayout className="mt-5 space-y-4 md:mt-20">
      <div className="flex items-start space-x-4">
        <img
          src={`https://image.tmdb.org/t/p/w780${data.profile_path}`}
          className="w-24 rounded-md sm:w-32 md:w-60"
        />

        <div className="text-sm space-y-2 sm:text-base sm:space-y-3 md:space-y-4 font-light">
          <p>
            <span className="font-medium">Nombre: </span>
            {data.name}
          </p>
          <p>
            <span className="font-medium">Conocido por: </span>
            {data.known_for_department}
          </p>
          <p>
            <span className="font-medium">Sexo: </span>
            {data.gender == 1
              ? "Femenino"
              : data.gender == 2
              ? "Masculino"
              : data.gender == 3
              ? "No Binario"
              : "Sin especificar"}
          </p>
          <p>
            <span className="font-medium">Fecha de nacimiento: </span>
            {data.birthday}
          </p>
          <p>
            <span className="font-medium">Lugar de nacimiento: </span>
            {data.place_of_birth}
          </p>
          {data.deathday && (
            <p>
              <span className="font-medium">Fecha de fallecimiento: </span>
              {data.deathday}
            </p>
          )}
          <div>
            <p className="hidden md:block font-medium mb-2">
              También conocido como:{" "}
            </p>
            <div className="hidden md:flex flex-wrap gap-x-10 gap-y-3">
              {data.also_known_as.map((name: string, index: any) => (
                <span key={`${index}-${name}`} className="">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>

        {/* Contenedor de texto con animación */}
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            showFullText ? "max-h-[9999px]" : "max-h-20"
          }`}
          style={{ maxHeight: showFullText ? `${fullTextHeight}px` : "80px" }}
        >
          <p ref={fullTextRef} className="text-gray-300 text-sm sm:text-base">
            {data.biography}
          </p>
        </div>

        {/* Botón para alternar la vista */}
        {data.biography && data.biography.length >= fullTextHeight && (
          <button
            onClick={toggleText}
            className="text-sm mt-2 text-blue-400 hover:underline focus:outline-none"
          >
            {showFullText ? "Mostrar menos" : "Mostrar más"}
          </button>
        )}
      </div>
    </EspaciadoLayout>
  );
}
