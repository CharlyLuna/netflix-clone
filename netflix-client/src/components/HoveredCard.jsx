import { useNavigate } from 'react-router-dom'
import { VideoPlayIcon } from './icons/VideoPlayIcon'
import { LikeIcon } from './icons/LikeIcon'
import { DownIcon } from './icons/DownIcon'
import { PlusIcon } from './icons/PlusIcon'
import { useState } from 'react'

export const HoveredCard = ({ name, genres, image }) => {
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='invisible absolute top-0 z-10 max-md:hidden
    zoomIn md:w-[27vw] xl:w-[18vw] h-full max-w-[320px] translate-y-1/2'
    >
      <video
        src='/netflix-intro.mp4'
        poster={`https://image.tmdb.org/t/p/w500${image}`}
        autoPlay
        muted
        loop
        onClick={() => {
          navigate('/player')
        }}
        className='cursor-pointer  transition duration object-cover
          shadow-xl rounded-t w-full h-[12vw] xl:h-[8vw]'
      />
      {/* <img
          src={`https://image.tmdb.org/t/p/w500${image}`} className='relative cursor-pointer w-full transition duration object-cover
          shadow-xl rounded-t h-[12vw]' alt=''
        /> */}
      {/* Info of movie */}
      <div className='z-10 bg-zinc-800 p-3 lg:p-4 absolute w-full h-fit
        transition shadow rounded-b '
      >
        {/* Buttons */}
        <div className='flex flex-row items-center justify-between'>
          <div className='flex gap-2'>
            <a
              className='cursor-pointer w-7 h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 bg-white
            rounded-full flex justify-center items-center transition
            hover:bg-neutral-300 text-black'
              href='/player'
            >
              <VideoPlayIcon height={5} width={5} />
            </a>
            <div className='card-buttons'>
              <LikeIcon />
            </div>
            {
              isLiked
                ? (
                  <div className='card-buttons'>
                    <LikeIcon />
                  </div>
                  )
                : (
                  <div className='card-buttons'>
                    <PlusIcon />
                  </div>
                  )
              }
          </div>
          <div className='card-buttons'>
            <DownIcon />
          </div>
        </div>
        {/* Movie title */}
        <h1 className='w-full text-sm lg:text-base truncate pr-4 mt-4'>{name}</h1>
        {/* Genres */}
        <ul className='flex flex-wrap gap-2 mt-2 mb-2'>
          {
                genres.map(genre => (
                  <li className='text-xs 2xl:text-sm' key={genre}>{genre}</li>
                ))
              }
        </ul>
      </div>
    </div>
  )
}
