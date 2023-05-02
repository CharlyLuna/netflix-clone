import { BsArrowLeft } from 'react-icons/bs'
import defaultVideo from '../assets/netflix-intro.mp4'
import { useNavigate } from 'react-router-dom'

export const Player = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='w-screen h-screen'>
        <button
          className='absolute p-8 z-10 text-[3rem]'
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft />
        </button>
        <video className='h-full w-full object-cover' src={defaultVideo} autoPlay loop controls muted />
      </div>
    </div>
  )
}
