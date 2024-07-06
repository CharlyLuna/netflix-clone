import { useNavigate } from 'react-router-dom'
import { AngleLeftIcon } from '../components/icons/AngleLeftIcon'

export const Player = () => {
  const navigate = useNavigate()

  return (
    <div className=''>
      <div className='w-screen h-screen'>
        <button
          className='absolute p-8 z-10 text-[3rem]'
          onClick={() => navigate(-1)}
        >
          <AngleLeftIcon />
        </button>
        <video className='h-full w-full object-cover' src='/video-intro.mp4' autoPlay loop controls />
      </div>
    </div>
  )
}
