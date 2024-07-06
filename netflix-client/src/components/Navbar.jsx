import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search } from './Search'
import { NAVBAR_LINKS } from '../utils/constants'
import { DropDownMenu } from './DropDownMenu'
import { useDebounce } from '../hooks/useDebounce'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropDownIsHovered, setDropDownIsHovered] = useState(false)
  const debouncedHoverValue = useDebounce(dropDownIsHovered, 300)
  const navigate = useNavigate()

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
    <header className={`flex fixed top-0 h-[70px] w-screen justify-between
      z-10 px-6 lg:px-16 items-center transition ease-in-out duration-300
      ${isScrolled ? 'bg-zinc-900' : ''}`}
    >
      {/* LEFT SIDE OF NAVBAR */}
      <nav className='flex items-center gap-2 md:gap-8'>
        <a className='text-xl text-[#e50914] font-bold px-2' href='#' onClick={() => navigate('/')}>
          <p className='hidden md:block'>Moonflix</p>
          <p className='block md:hidden'>MF</p>
        </a>
        <ul className='flex list-none gap-4 sm:gap-8'>
          {
            NAVBAR_LINKS.map(({ name, link }) => (
              <li className='text-xs sm:text-base lg:text-xl first:max-md:hidden hover:text-gray-300 transition-colors duration-300' key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {/* RIGHT SIDE OF NAVBAR */}
      <nav className='flex items-center gap-4 justify-end md:w-[28%] lg:w-auto'>
        {/* Search */}
        <Search />
        {/* Log out button */}
        <a
          href='#account'
          className='flex items-center gap-2'
          onMouseEnter={() => setDropDownIsHovered(true)}
          onClick={() => setDropDownIsHovered(true)}
          onMouseLeave={() => setDropDownIsHovered(false)}
          onBlur={() => setDropDownIsHovered(false)}
        >
          <img className='h-7 w-7 rounded-md' src='/default-profile-pic.webp' alt='profile picture' />
          <div className='arrow-down' />
        </a>
      </nav>
      {
        debouncedHoverValue && <DropDownMenu isVisible={debouncedHoverValue} setVisibility={setDropDownIsHovered} />
      }
    </header>
  )
}
