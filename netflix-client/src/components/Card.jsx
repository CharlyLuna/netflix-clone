// import { useNavigate } from 'react-router-dom'
// import defaultVideo from '../assets/netflix-intro.mp4'

// import { useDispatch } from 'react-redux'
import { HoveredCard } from './HoveredCard'

export const Card = ({ movie, isLiked = false }) => {
  const { id, type, image, name, genres } = movie

  return (
    <div className='group/card bg-zinc-900 relative max-w-[44%] flex-[0_0_44%] md:max-w-[25%] md:flex-[0_0_25%] xl:max-w-[18%] xl:flex-[0_0_18%] 2xl:max-w-[17%] 2xl:flex-[0_0_17%] aspect-[16/9] p-1'>
      <img
        data-testid='img-card'
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${name} poster`}
        className='cursor-pointer object-cover transition duration delay-300
        shadow-xl rounded group-hover/card:opacity-90 md:group-hover/card:opacity-0
        w-full h-full'
      />
      {/* <p className='text-xs md:hidden w-[35vw] truncate mt-1'>{name}</p> */}
      {/* Hovered card */}
      {/* <HoveredCard image={image} genres={genres} name={name} /> */}
    </div>
  )
}
