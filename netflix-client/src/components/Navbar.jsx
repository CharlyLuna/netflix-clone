import { Link, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'
import smallLogo from '../assets/logo-small.png'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Search } from './Search'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' }
  ]

  useEffect(() => {
    const handleScroll = (e) => {
      const window = e.currentTarget
      if (window.scrollY === 0) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <nav className={`flex fixed top-0 h-24 w-screen justify-between
      z-10 px-6 lg:px-16 items-center transition ease-in-out duration-300
      ${isScrolled ? 'bg-black/95' : ''}`}
      >
        {/* LEFT SIDE OF NAVBAR */}
        <div className='flex items-center gap-2 md:gap-8'>
          <div className='flex items-center justify-center'>
            <picture onClick={() => navigate('/')}>
              <source media='(max-width: 767px)' srcSet={smallLogo} />
              <source media='(min-width: 768px)' srcSet={logo} />
              <img className='h-16' src={logo} alt='Netflix logo' />
            </picture>
          </div>
          <ul className='flex list-none gap-4 sm:gap-8'>
            {
              links.map(({ name, link }) => (
                <Link className='text-xs sm:text-base lg:text-xl first:max-md:hidden' key={name} to={link}>{name}</Link>
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
