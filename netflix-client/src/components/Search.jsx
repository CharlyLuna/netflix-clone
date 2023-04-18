import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [inputHover, setInputHover] = useState(false)

  return (
    <div className={`gap-2 p-1 hidden md:inline-flex
          ${showSearch ? 'show-search' : ''}`}
    >
      <button
        className='text-lg'
        onFocus={() => setShowSearch(true)}
        onBlur={() => {
          if (!inputHover) setShowSearch(false)
        }}
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
  )
}
