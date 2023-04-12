import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Header = ({ login }) => {
  const navigate = useNavigate()
  const handleLoginSignin = () => {
    if (login) {
      navigate('/login')
    } else {
      navigate('/signup')
    }
  }

  return (
    <div className='flex items-center justify-between px-8'>
      <div>
        <img className='h-20' src={logo} alt='Netflix logo' />
      </div>
      <button
        className='py-2 px-4 bg-[#e50914] border-none cursor-pointer rounded-md
        font-bold text-xs md:text-sm'
        onClick={handleLoginSignin}
      >
        {login ? 'Log in' : 'Sign In'}
      </button>
    </div>
  )
}
