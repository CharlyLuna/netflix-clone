import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import { Slider } from '../components/Slider'

export const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const genresLoaded = useSelector(state => state.netflix.genresLoaded)
  const movies = useSelector(state => state.netflix.movies)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: 'all' }))
  }, [genresLoaded])

  window.onscroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
    return () => (window.onscroll = null)
  }

  return (
    <div className='bg-zinc-900'>
      <Navbar isScrolled={isScrolled} />
      {/* TODO: Change the hardcoded image to one bring from API */}
      {/* Image of popular serie */}
      <div className='relative'>
        <img
          src='https://www.denofgeek.com/wp-content/uploads/2022/05/stranger-things-season-4-poster.jpeg'
          alt='background'
          className='brightness-75 w-screen h-[90vh] object-cover'
        />
        {/* Serie info container */}
        <div className='md:m-auto w-screen absolute bottom-20'>
          {/* Serie name */}
          <div className='text-5xl lg:text-6xl font-extrabold
          m-4 md:ms-20 text-center md:text-start'
          >
            <h1>Stranger Things 4</h1>
            {/* TODO: Change lorem for serie desc from API */}
            <p className='text-base font-light w-3/5 xl:w-5/12 py-4 max-md:hidden'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id doloribus sequi, quae consectetur autem temporibus ex et numquam, officiis saepe qui harum sunt beatae
            </p>
          </div>
          {/* Buttons */}
          <div className='flex justify-center md:justify-start my-20 md:mx-20 md:my-10 gap-8'>
            <button
              className='teaser-buttons'
              onClick={() => navigate('/player')}
            >
              <FaPlay /> Play
            </button>
            <button
              className='teaser-buttons'
            >
              <AiOutlineInfoCircle /> More info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </div>
  )
}
