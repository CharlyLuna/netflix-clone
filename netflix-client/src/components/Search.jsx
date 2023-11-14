import { useState } from 'react'
import { SearchIcon } from './icons/SearchIcon'

export const Search = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)

  return (
    <div className={`gap-2 p-1 hidden md:inline-flex
          ${showSearch ? 'show-search' : ''}`}
    >
      <button
        type='button'
        aria-label='Search'
        className='text-lg'
        onFocus={() => setShowSearch(true)}
        onBlur={() => {
          if (!inputHover) setShowSearch(false)
        }}
      >
        <SearchIcon />
      </button>
      <input
        type='text'
        placeholder='Search'
        className={`search-bar ${showSearch ? 'show-search-bar' : ''}`}
        onMouseEnter={() => setInputHover(true)}
        onFocus={() => setShowSearch(true)}
        onMouseLeave={() => setInputHover(false)}
        onBlur={() => {
          setShowSearch(false)
          setInputHover(false)
        }}
      />
    </div>
  )
}
