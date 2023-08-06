import { useState } from 'react'
import { HoveredCard } from './HoveredCard'

export const Card = ({ movie, isLiked = false }) => {
  const { image, name, genres } = movie
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='card group bg-zinc-900 relative aspect-[16/9] p-1'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        data-testid='img-card'
        src={`https://image.tmdb.org/t/p/w300${image}`}
        alt={`${name} poster`}
        className='cursor-pointer object-cover transition duration-500
        shadow-xl rounded group-hover:opacity-90 md:group-hover:opacity-0
        w-full h-full'
      />

      {
        isHovered && <HoveredCard image={image} genres={genres} name={name} />
      }

    </div>
  )
}
