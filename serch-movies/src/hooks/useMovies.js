import {useState, useRef, useMemo,useCallback} from 'react'   
import {searchMovies} from '../service/movies.js'
export function useMovies ({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useCallback(async ({search}) => {
        if (search === prevSearch.current) return

        try {
          setLoading(true)
          setError(null)
          prevSearch.current = search
          const newMovies = await searchMovies({search})
          setMovies(newMovies)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }   
      }
  ,[])
  // use Memo ⬇️
  /*
    En tiene la cuestion de que todo se renderiza otra ves cuando algo caqmbia en el input del search movies dado que es un  input controlado por react, ergo hay que evitar que siertas cosas se vuelvan a renderisar para evitar problemas de rendimiento y otros

    Por eso llegó el useMemo, impide el renderizado de un codigo hasta que cambien siertas dependencias 👌

    Similar a un useEffect pero para cosas opuestas
  */
  const sortMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])
  return {movies: sortMovies, getMovies, loading, error}
  }