import { useNavigate } from 'react-router-dom'
// import defaultVideo from '../assets/netflix-intro.mp4'
// import { useDispatch } from 'react-redux'

import { VideoPlayIcon } from './icons/VideoPlayIcon'
import { LikeIcon } from './icons/LikeIcon'
import { DownIcon } from './icons/DownIcon'
import { PlusIcon } from './icons/PlusIcon'
// import { currentPlaying } from '../store'
import { useState } from 'react'
// const dispatch = useDispatch()

export const HoveredCard = ({ name, genres, image }) => {
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='opacity-0 absolute top-0 transition-all duration-200
      z-10 max-md:hidden delay-300 w-full scale-0 group-hover:scale-110
      group-hover:-translate-y-[6vw] group-hover:-translate-x-[-1vw]
      group-hover:opacity-100'
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
        className='relative cursor-pointer w-full transition duration object-cover
          shadow-xl rounded-t h-[12vw]'
      />
      {/* <img
          src={`https://image.tmdb.org/t/p/w500${image}`} className='relative cursor-pointer w-full transition duration object-cover
          shadow-xl rounded-t h-[12vw]' alt=''
        /> */}
      {/* Info of movie */}
      <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full
        transition shadow rounded-b'
      >

        {/* Buttons */}
        <div className='flex flex-row items-center justify-between'>
          <div className='flex gap-3'>
            <a
              className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-white
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
        <h1 className='w-full truncate pr-4 mt-4'>{name}</h1>
        {/* Genres */}
        <div className='flex flex-row mt-4 items-center'>
          <ul className='flex gap-2'>
            {
                genres.map(genre => (
                  <li className='text-xs lg:text-sm' key={genre}>{genre}</li>
                ))
              }
          </ul>
        </div>
      </div>
    </div>
  )
}
