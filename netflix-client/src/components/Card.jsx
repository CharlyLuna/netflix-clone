import { useNavigate } from 'react-router-dom'
import { RiThumbDownFill, RiThumbUpFill } from 'react-icons/ri'
import { BsCheck, BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import defaultVideo from '../assets/netflix-intro.mp4'

export const Card = ({ movie, isLiked = false }) => {
  const { id, image, name, genres } = movie
  const navigate = useNavigate()

  return (
    <div className='group bg-zinc-900 col-span relative inline-block pr-4'>
      <img
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
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          onClick={() => navigate('/player')}
          className='absolute cursor-pointer w-full transition duration object-cover
            shadow-xl rounded-t h-[12vw]'
        />
        <video
          src={defaultVideo}
          autoPlay
          muted
          loop
          onClick={() => navigate('/player')}
          className='relative cursor-pointer w-full transition duration object-cover
          shadow-xl rounded-t h-[12vw]'
        />
        {/* Info of movie */}
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full
        transition shadow rounded-b'
        >
          {/* Buttons */}
          <div className='flex flex-row items-center gap-3'>
            <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white
            rounded-full flex justify-center items-center transition
            hover:bg-neutral-300'
            >
              <BsFillPlayFill className='card-buttons text-black' title='Play' onClick={() => navigate('/player')} />
            </div>
            <div className='flex gap-4 text-white'>
              <RiThumbUpFill className='card-buttons' title='Like' />
              <RiThumbDownFill className='card-buttons' title='Dislike' />
              {
                  isLiked
                    ? (
                      <BsCheck className='card-buttons' title='Remove from list' />
                      )
                    : (
                      <AiOutlinePlus className='card-buttons' title='Add to my list' />
                      )
                }
              <BiChevronDown className='card-buttons' title='More info' />
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
