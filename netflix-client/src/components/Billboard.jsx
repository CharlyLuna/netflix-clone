import { useNavigate } from 'react-router-dom'
import { MoreInfoIcon } from './icons/MoreInfoIcon'
import { VideoPlayIcon } from './icons/VideoPlayIcon'

export const Billboard = ({ movie }) => {
  const navigate = useNavigate()
  const { name, image, overview } = movie

  return (
    <div className='relative'>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={`${name} poster`}
        className='brightness-75 w-full h-[90vh] min-h-[600px] lg:min-h-[700px] object-cover'
      />
      {/* Serie info container */}
      <div className='md:m-auto w-full absolute bottom-20'>
        {/* Serie name */}
        <div className='text-5xl lg:text-6xl font-extrabold
          m-4 md:ms-20 text-center md:text-start'
        >
          <h1 className='md:w-[65%]'>{name}</h1>
          <p className='text-sm xl:text-base font-normal w-[65%] xl:w-[50%] py-4 max-md:hidden'>
            {overview}
          </p>
        </div>
        {/* Buttons */}
        <div className='flex justify-center md:justify-start my-20 md:mx-20 md:my-10 gap-8'>
          <button
            className='billboard-buttons'
            onClick={() => navigate('/player')}
          >
            <VideoPlayIcon /> Play
          </button>
          <button
            className='billboard-buttons'
            onClick={() => navigate('/details')}
          >
            <MoreInfoIcon /> More info
          </button>
        </div>
      </div>
    </div>
  )
}
