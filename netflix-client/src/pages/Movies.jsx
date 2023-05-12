import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataByGenre, getGenres } from '../store'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { NotAvailable } from '../components/NotAvailable'
import { SelectGenres } from '../components/SelectGenres'
import { MOVIEPAGE_TITLES } from '../utils/constants'

export const Movies = () => {
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const movies = useSelector(state => state.netflix.movies)
  const genres = useSelector(state => state.netflix.genres)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!genresLoaded) dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchDataByGenre({ genre: genres[0].name, type: 'movie' }))
  }, [genresLoaded])

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <div className='mt-28'>
        <SelectGenres genres={genres} type='movie' />
        {
          movies.length > 0
            ? <Slider movies={movies} titles={MOVIEPAGE_TITLES} />
            : <NotAvailable />
        }
      </div>
    </div>
  )
}
