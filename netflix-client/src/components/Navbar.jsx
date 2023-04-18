import { Link, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'
import smallLogo from '../assets/logo-small.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Search } from './Search'

export const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate()

  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' }
  ]

  onAuthStateChanged(auth, currentUser => {
    if (!currentUser) navigate('/login')
  })

  return (
    <div>
      <nav className={`flex sticky top-0 h-24 w-screen justify-between
      z-10 px-6 lg:px-16 items-center transition ease-in-out duration-300
      ${isScrolled ? 'bg-black' : ''}`}
      >
        {/* LEFT SIDE OF NAVBAR */}
        <div className='flex items-center gap-2 md:gap-8'>
          <div className='flex items-center justify-center'>
            <picture>
              <source media='(max-width: 767px)' srcSet={smallLogo} />
              <source media='(min-width: 768px)' srcSet={logo} />
              <img className='h-16' src={logo} alt='Chris standing up holding his daughter Elva' />
            </picture>
          </div>
          <ul className='flex list-none gap-4 md:gap-8'>
            {
              links.map(({ name, link }) => (
                <Link className='text-xs md:text-base lg:text-xl' key={name} to={link}>{name}</Link>
              ))
            }
          </ul>
        </div>
        {/* RIGHT SIDE OF NAVBAR */}
        <div className='flex items-center gap-4 justify-end md:w-[28%] lg:w-auto'>
          {/* Search */}
          <Search />
          {/* Log out button */}
          <button
            className='md:text-lg'
            onClick={() => signOut(auth)}
          >
            <FaSignOutAlt />
          </button>
        </div>
      </nav>
    </div>
  )
}
