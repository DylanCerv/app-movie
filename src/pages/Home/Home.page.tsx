import { lazy, useEffect, useState } from "react"
import HomeHeader from "@/components/home/HomeHeader"
import Publicity from "@/components/home/Publicity"
import EspaciadoLayout from "@/components/layout/EspaciadoLayout"
import NavSearch from "@/components/search/NavSearch"
import Footer from "@/components/shared/footer/Footer"
import FormSearch from "@/components/shared/header/FormSearch"
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api"
import { GenreTv, MoviesAndSeries } from "@/types/types"
import { useSearchParams } from "react-router-dom"


// Cargar dinámicamente los componentes
const DynamicSliderContainer = lazy(
  // @ts-ignore
  () => import('@/components/home/SliderContainer')
);
const DynamicColeccionContainer = lazy(
  // @ts-ignore
  () => import('@/components/home/ColeccionContainer')
);


export default function Home () {

    const [searchParams] = useSearchParams();
    const [moviesTrends, setMoviesTrends] = useState<MoviesAndSeries[]>([]);
    const [genres, setGenres] = useState<GenreTv>();
  
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetching trending movies
            const { results: trendingResults } = await trendingMoviesWeekly();
            setMoviesTrends(trendingResults);
            // console.log(trendingResults);
    
            // Fetching genres
            const genresResults = await movieGenresList();
            setGenres(genresResults);
            // console.log(genresResults);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
    }, []);

  return (
      <main className='scrollMove'>
          {/* NAVBAR */}
          <NavSearch type='' duration={100}>
                <FormSearch
                  defaultValue={searchParams.get('q') || ''}
                  type={'movie'}
                />
          </NavSearch>

          {/* HOME HEADER  */}
          {moviesTrends && genres &&
            <HomeHeader moviesTrends={moviesTrends} genresMovies={genres} />
          }

          {/* COLECCION */}
          <DynamicColeccionContainer
              id='131296'
              textColor='#12c8ff'
              subTitle='Rivalidades y Redenciones'
          />

          {/* SLIDER MOVIE 1 */}
          <EspaciadoLayout
              component='section'
              className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
          >
              <DynamicSliderContainer
                  path='/trending/tv/week'
                  title='SERIES POPULARES'
              />
              <DynamicSliderContainer
                  path='/movie/popular'
                  title='OBRAS MAESTRAS MODERNAS'
              />
              <DynamicSliderContainer
                  path='/trending/tv/week'
                  page='2'
                  title='SERIES DESTACADAS'
              />
              <DynamicSliderContainer
                  path='/movie/top_rated'
                  title='DESTACADOS DE FLIX'
              />
          </EspaciadoLayout>
          {/* ANUNCIO */}
          {/* <Publicity /> */}

          {/* COLECCION 2 */}
          <DynamicColeccionContainer
              id='228446'
              textColor='#de4444'
              subTitle='Terror en cinta de video'
          />

          {/* SLIDER MOVIE AND SERIE 2 */}
          <EspaciadoLayout
              component='section'
              className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
          >
              <DynamicSliderContainer
                  path='/movie/now_playing'
                  title='SERIES POPULARES'
              />
              <DynamicSliderContainer
                  path='/trending/movie/week'
                  page='2'
                  title='PELÍCULAS EN TENDENCIA'
              />
              <DynamicSliderContainer
                  path='/movie/upcoming'
                  page='2'
                  title='PRÓXIMOS ESTRENOS DE PELÍCULAS'
              />
              <DynamicSliderContainer
                  path='/trending/tv/week'
                  page='3'
                  title='SERIES EN TENDENCIA'
              />
          </EspaciadoLayout>
          <Footer />
      </main>
  )
}
