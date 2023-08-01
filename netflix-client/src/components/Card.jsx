import { useNavigate } from 'react-router-dom'
// import defaultVideo from '../assets/netflix-intro.mp4'
import { currentPlaying } from '../store'
import { useDispatch } from 'react-redux'
import { VideoPlayIcon } from './icons/VideoPlayIcon'
import { LikeIcon } from './icons/LikeIcon'
import { DownIcon } from './icons/DownIcon'
import { PlusIcon } from './icons/PlusIcon'

export const Card = ({ movie, isLiked = false }) => {
  const { id, type, image, name, genres } = movie
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='group bg-zinc-900 col-span relative inline-block pr-4'>
      <img
        data-testid='img-card'
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`${name} poster`}
        className='cursor-pointer object-cover transition duration delay-300
        shadow-xl rounded group-hover:opacity-90 md:group-hover:opacity-0
        w-full h-[24vw] md:h-[14vw]'
      />
      <p className='text-xs md:hidden w-[35vw] truncate mt-1'>{name}</p>
      {/* Hovered card */}
      <div className='opacity-0 absolute top-0 transition duration-200
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
            dispatch(currentPlaying({ type, id }))
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
                onClick={() => {
                  navigate('/player')
                  dispatch(currentPlaying({ type, id }))
                }}
              >
                <VideoPlayIcon height={5} width={5} />
                {/* <BsFillPlayFill
                className='card-buttons text-black' title='Play' onClick={() => {
                  navigate('/player')
                  dispatch(currentPlaying({ type, id }))
                }}
              /> */}
              </a>
              <div className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 border-2 border-gray-400
            rounded-full flex justify-center items-center transition
            hover:border-white'
              >
                <LikeIcon />
              </div>
              {/* <RiThumbUpFill className='card-buttons' title='Like' /> */}
              {
                  isLiked
                    ? (
                      <div className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 border-2 border-gray-400
                    rounded-full flex justify-center items-center transition
                    hover:border-white'
                      >
                        <LikeIcon />
                      </div>
                      )
                    : (
                      <div className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 border-2 border-gray-400
            rounded-full flex justify-center items-center transition
            hover:border-white'
                      >
                        <PlusIcon />
                      </div>
                      )
                }
            </div>

            <div className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 border-2 border-gray-400
            rounded-full flex justify-center items-center transition
            hover:border-white'
            >
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
    </div>
  )
}
