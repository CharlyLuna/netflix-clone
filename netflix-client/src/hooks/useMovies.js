import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataByGenre, getGenres } from '../store'

export const useMovies = () => {
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const movies = useSelector(state => state.netflix.movies)
  const genres = useSelector(state => state.netflix.genres)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!genresLoaded) {
      dispatch(getGenres())
    } else {
      if (movies.length === 0) dispatch(fetchDataByGenre({ genre: genres[0].name, type: 'movie' }))
    }
  }, [genresLoaded])

  return {
    movies,
    genres
  }
}
