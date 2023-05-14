import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTVDataByGenre, getTVGenres } from '../store'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { NotAvailable } from '../components/NotAvailable'
import { TVPAGE_TITLES } from '../utils/constants'
import { SelectTVGenres } from '../components/SelectTVGenres'

export const TVShows = () => {
  const genresLoaded = useSelector(state => state.netflix.tvGenresLoaded)
  const tvShows = useSelector(state => state.netflix.tvShows)
  const genres = useSelector(state => state.netflix.tvGenres)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!genresLoaded) dispatch(getTVGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchTVDataByGenre({ genre: genres[0].name, type: 'tv' }))
  }, [genresLoaded])

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <div className='mt-28'>
        <SelectTVGenres genres={genres} type='tv' />
        {
          tvShows.length > 0
            ? <Slider movies={tvShows} titles={TVPAGE_TITLES} />
            : <NotAvailable />
        }
      </div>
    </div>
  )
}
