import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbDownFill, RiThumbUpFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import defaultVideo from '../assets/netflix-intro.mp4'

export const Card = ({ movie, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { id, image, name, genres } = movie
  const navigate = useNavigate()

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className='max-w-[240px] w-60 h-full cursor-pointer relative'
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={`${name} poster`}
        className='rounded w-full h-full z-10'
      />
      {
        isHovered && (
          <div className='z-50 h-max w-80 absolute top-[-18vh] left-0 rounded
          shadow-md bg-[#181818] transition duration-300 ease-out'
          >
            <div className='relative h-36'>
              <img
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt={`${name} poster`}
                onClick={() => navigate('/player')}
                className='w-full h-36 object-cover rounded top-0 z-[4] absolute'
              />
              <video
                src={defaultVideo}
                autoPlay
                muted
                loop
                onClick={() => navigate('/player')}
                className='w-full h-36 object-cover rounded top-0 z-[5] absolute'
              />
            </div>
            <div className='info-container flex flex-col'>
              <h1 className='name'>{name}</h1>
            </div>
            <div className='icons flex justify-between'>
              <div className='controls flex'>
                <IoPlayCircleSharp title='Play' onClick={() => navigate('/player')} />
                <RiThumbUpFill title='Like' />
                <RiThumbDownFill title='Dislike' />
                {
                  isLiked
                    ? (
                      <BsCheck title='Remove from list' />
                      )
                    : (
                      <AiOutlinePlus title='Add to my list' />
                      )
                }
              </div>
              <div className='info'>
                <BiChevronDown title='More info' />
              </div>
            </div>
            <div className='genres flex'>
              <ul className='flex'>
                {
                  genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}
