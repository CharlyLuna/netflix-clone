import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import smallLogo from '../assets/logo-small.webp'
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
      <nav aria-label='navbar' className='flex items-center gap-2 md:gap-8'>
        <a href='#' onClick={() => navigate('/')}>
          <picture>
            <source media='(max-width: 767px)' srcSet={smallLogo} />
            <source media='(min-width: 768px)' srcSet={logo} />
            <img className='h-14 aspect-[1/1] md:aspect-[2.38/1]' src={logo} alt='Netflix logo' />
          </picture>
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
        <button
          aria-label='Open account menu'
          className='flex items-center gap-2'
          onMouseEnter={() => setDropDownIsHovered(true)}
          onClick={() => setDropDownIsHovered(true)}
          onMouseLeave={() => setDropDownIsHovered(false)}
          onBlur={() => setDropDownIsHovered(false)}
        >
          <img className='h-7 w-7 rounded-md' src='/default-profile-pic.webp' alt='profile picture' />
          <div className='arrow-down' />
        </button>
      </nav>
      {
        debouncedHoverValue && <DropDownMenu isVisible={debouncedHoverValue} setVisibility={setDropDownIsHovered} />
      }
    </header>
  )
}
