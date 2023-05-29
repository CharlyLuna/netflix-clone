import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { currentPlaying } from '../store'

export const Billboard = ({ movie }) => {
  const navigate = useNavigate()
  const { id, name, image, overview, type } = movie
  const dispatch = useDispatch()

  return (
    <div className='relative'>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt='background'
        className='brightness-75 w-screen h-[90vh] object-cover'
      />
      {/* Serie info container */}
      <div className='md:m-auto w-screen absolute bottom-20'>
        {/* Serie name */}
        <div className='text-5xl lg:text-6xl font-extrabold
          m-4 md:ms-20 text-center md:text-start'
        >
          <h1>{name}</h1>
          {/* TODO: Change lorem for serie desc from API */}
          <p className='text-base font-light w-3/5 xl:w-5/12 py-4 max-md:hidden'>
            {overview}
          </p>
        </div>
        {/* Buttons */}
        <div className='flex justify-center md:justify-start my-20 md:mx-20 md:my-10 gap-8'>
          <button
            className='teaser-buttons'
            onClick={() => {
              navigate('/player')
              dispatch(currentPlaying({ type, id }))
            }}
          >
            <FaPlay /> Play
          </button>
          <button
            className='teaser-buttons'
            onClick={() => {
              navigate('/details')
            }}
          >
            <AiOutlineInfoCircle /> More info
          </button>
        </div>
      </div>
    </div>
  )
}
