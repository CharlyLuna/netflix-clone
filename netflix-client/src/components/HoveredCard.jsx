import { useNavigate } from 'react-router-dom'
import { LikeIconSolid, LikeIconOutline, DownIcon, PlusIcon, VideoPlayIcon, CheckIcon } from './icons/'

export const HoveredCard = ({ name, genres, image, isLiked, changeLike, isOnFavorites, changeListStatus }) => {
  const navigate = useNavigate()

  return (
    <div className='invisible absolute top-0 z-10 max-md:hidden
    zoomIn h-full hovered-card'
    >
      <video
        src='/video-intro.mp4'
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
            {
              isLiked
                ? (
                  <button className='card-buttons' onClick={() => changeLike(false)}>
                    <LikeIconSolid />
                  </button>
                  )
                : (
                  <button className='card-buttons' onClick={() => changeLike(true)}>
                    <LikeIconOutline />
                  </button>
                  )
            }

            {
              isOnFavorites
                ? (
                  <button className='card-buttons' onClick={() => changeListStatus()}>
                    <CheckIcon />
                  </button>
                  )
                : (
                  <button className='card-buttons' onClick={() => changeListStatus()}>
                    <PlusIcon />
                  </button>
                  )
              }
          </div>
          <div className='card-buttons'>
            <DownIcon />
          </div>
        </div>
        {/* Movie title */}
        <h1 className='w-full text-sm lg:text-base truncate pr-4 mt-3'>{name}</h1>
        {/* Genres */}
        <ul className='flex flex-wrap mt-2 gap-1'>
          {
            genres.map(genre => (
              <li className='text-xs 2xl:text-sm pr-1' key={genre}>{genre}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
