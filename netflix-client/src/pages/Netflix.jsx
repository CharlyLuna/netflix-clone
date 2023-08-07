import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrending, getGenres } from '../store'
import { Slider } from '../components/Slider'
import { Billboard } from '../components/Billboard'
// import { getRandomMovie } from '../utils/functions'
import { DEFAULT_MOVIE, HOMEPAGE_TITLES } from '../utils/constants'

export const Netflix = () => {
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const trendingMedia = useSelector(state => state.netflix.trending)
  // const randomMovie = trendingMedia ? getRandomMovie(trendingMedia) : null

  const dispatch = useDispatch()

  // Scroll to top of the page when component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

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
      <Billboard movie={DEFAULT_MOVIE} />
      <Slider movies={trendingMedia ?? []} titles={HOMEPAGE_TITLES} />
    </div>
  )
}
