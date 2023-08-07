import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTVDataByGenre, getTVGenres } from '../store'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { NotAvailable } from '../components/NotAvailable'
import { TVPAGE_TITLES } from '../utils/constants'
import { SelectGenres } from '../components/SelectGenres'

export const TVShows = () => {
  const genresLoaded = useSelector(state => state.netflix.tvGenresLoaded)
  const tvShows = useSelector(state => state.netflix.tvShows)
  const genres = useSelector(state => state.netflix.tvGenres)
  const dispatch = useDispatch()

  // Scroll to top of the page when component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (!genresLoaded) {
      dispatch(getTVGenres())
    } else {
      if (tvShows.length === 0) dispatch(fetchTVDataByGenre({ genre: genres[0].name, type: 'tv' }))
    }
  }, [genresLoaded])

  const handleGenreChange = (genre) => {
    dispatch(fetchTVDataByGenre({ genre, type: 'tv' }))
  }

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <div className='mt-28'>
        <SelectGenres genres={genres} onGenreChange={handleGenreChange} />
        {
          tvShows.length > 0
            ? <Slider movies={tvShows} titles={TVPAGE_TITLES} />
            : <NotAvailable />
        }
      </div>
    </div>
  )
}
