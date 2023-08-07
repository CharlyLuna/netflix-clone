import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrending, getGenres } from '../store'
import { Slider } from '../components/Slider'
import { Billboard } from '../components/Billboard'
import { getRandomMovie } from '../utils/functions'
import { HOMEPAGE_TITLES } from '../utils/constants'

export const Netflix = () => {
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const trendingMedia = useSelector(state => state.netflix.trending)
  const randomMovie = trendingMedia ? getRandomMovie(trendingMedia) : null

  const dispatch = useDispatch()

  useEffect(() => {
    if (!genresLoaded) {
      dispatch(getGenres())
    } else {
      if (trendingMedia.length === 0) dispatch(fetchTrending({ type: 'all' }))
    }
  }, [genresLoaded])

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      {randomMovie
        ? (
          <Billboard movie={randomMovie} />
          )
        : (
          <div className='w-full h-[90vh] min-h-[600px] lg:min-h-[700px]' />
          )}
      <Slider movies={trendingMedia ?? []} titles={HOMEPAGE_TITLES} />
    </div>
  )
}
