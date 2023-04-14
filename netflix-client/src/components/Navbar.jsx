import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

export const Navbar = ({ isScrolled }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)
  const navigate = useNavigate()

  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' }
  ]

  const handleSearchUnFocus = () => {
    if (!inputHover) setShowSearch(false)
  }

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
            <img className='h-16' src={logo} alt='Netflix logo' />
          </div>
          <ul className='flex list-none gap-8'>
            {
              links.map(({ name, link }) => (
                <Link className='lg:text-xl' key={name} to={link}>{name}</Link>
              ))
            }
          </ul>
        </div>
        {/* RIGHT SIDE OF NAVBAR */}
        <div className='flex items-center gap-4 justify-end md:w-[28%] lg:w-auto'>
          {/* Search */}
          <div className={`gap-2 p-1 hidden md:inline-flex
          ${showSearch ? 'show-search' : ''}`}
          >
            <button
              className='text-lg'
              onFocus={() => setShowSearch(true)}
              onBlur={handleSearchUnFocus}
            >
              <FaSearch />
            </button>
            <input
              type='text'
              placeholder='Search'
              className={`search-bar ${showSearch ? 'show-search-bar' : ''}`}
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false)
                setInputHover(false)
              }}
            />
          </div>
          {/* Log out button */}
          <button
            className='text-lg'
            onClick={() => signOut(auth)}
          >
            <FaSignOutAlt />
          </button>
        </div>
      </nav>
    </div>
  )
}
