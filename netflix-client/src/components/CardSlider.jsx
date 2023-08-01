import { useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import { AngleLeftIcon } from './icons/AngleLeftIcon'
import { AngleRightIcon } from './icons/AngleRightIcon'

export const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const listRef = useRef()

  // Todo: Change this useEffect, need a better way to reset the values on a resize of screen
  useEffect(() => {
    function handleResize () {
      listRef.current.style.transform = 'translateX(0px)'
      setSlideNumber(0)
      console.log('translated items')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDirection = (direction) => {
    const itemWidth = window.innerWidth * 25 / 100
    const distance = listRef.current.getBoundingClientRect().x - 56

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${itemWidth + distance}px)`
    } else if (direction === 'right' && slideNumber < 7) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-(itemWidth) + distance}px)`
    }
  }

  return (
    <>
      <div className=' mx-6 md:mx-14 text-md mt-4 md:mt-14 md:text-xl lg:text-2xl font-semibold mb-4'>
        <h1>{title}</h1>
      </div>
      <div
        className='relative flex items-center ml-6 md:ml-14'
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <button
          className={`slider-action bg-black/40 -left-14 ${!showControls ? 'hidden' : ''}
        flex justify-center items-center max-md:hidden cursor-pointer`}
          onClick={() => handleDirection('left')}
        >
          <AngleLeftIcon />
        </button>
        <div
          className='max-md:overflow-x-scroll scroll whitespace-nowrap scrollbar-hide translate-x-0'
          ref={listRef}
        >
          {
          data.map((movie, index) => (
            <Card key={`${movie}_${index}`} movie={movie} />
          ))
        }
        </div>
        <button
          className={`slider-action bg-black/40 right-0 ${!showControls ? 'hidden' : ''}
        flex justify-center items-center max-md:hidden cursor-pointer`}
          onClick={() => handleDirection('right')}
        >
          <AngleRightIcon />
        </button>
      </div>
    </>
  )
}
