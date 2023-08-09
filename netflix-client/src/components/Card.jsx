import { useRef, useState } from 'react'
import { HoveredCard } from './HoveredCard'
import { useMyFavoritesList } from '../hooks/useMyFavoritesList'

export const Card = ({ movie }) => {
  const { image, name, genres } = movie
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { isOnFavorites, changeListStatus } = useMyFavoritesList({ movie })
  const cardRef = useRef()

  const handleHover = () => {
    // Change animation of card when is near to the end of the screen
    const offset = cardRef.current.getBoundingClientRect().right - window.innerWidth
    if (cardRef.current.getBoundingClientRect().right > window.innerWidth - 100) {
      cardRef.current.style.setProperty('--offset', offset + 'px')
    } else {
      cardRef.current.style.setProperty('--offset', '0%')
    }
    setIsHovered(true)
  }

  return (
    <div
      className='card group bg-zinc-900 relative aspect-[16/9] p-1'
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
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
        isHovered && (
          <HoveredCard
            image={image}
            genres={genres}
            name={name}
            isLiked={isLiked}
            changeLike={setIsLiked}
            isOnFavorites={isOnFavorites}
            changeListStatus={changeListStatus}
          />
        )
      }

    </div>
  )
}
