import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import { Slider } from '../components/Slider'
import { Billboard } from '../components/Billboard'
import { getRandomMovie } from '../utils/functions'
import { DEFAULT_MOVIE, HOMEPAGE_TITLES } from '../utils/constants'

export const Netflix = () => {
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const movies = useSelector(state => state.netflix.movies)
  const randomMovie = movies ? getRandomMovie(movies) : null

  const dispatch = useDispatch()

  useEffect(() => {
    if (!genresLoaded) dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: 'all' }))
  }, [genresLoaded])

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      {randomMovie
        ? (
          <Billboard movie={randomMovie} />
          )
        : (
          <Billboard movie={DEFAULT_MOVIE} />
          )}
      <Slider movies={movies ?? []} titles={HOMEPAGE_TITLES} />
    </div>
  )
}
