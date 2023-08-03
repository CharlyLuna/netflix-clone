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
      <div className='mx-6 md:mx-14 text-md mt-4 md:mt-14 md:text-xl lg:text-2xl font-semibold mb-4 -z-50'>
        <h1>{title}</h1>
      </div>
      <div
        className='flex justify-center group/slider-container'
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <button
        //   className={`slider-action bg-black/40 -left-14 ${!showControls ? 'hidden' : ''}
        // flex justify-center items-center max-md:hidden cursor-pointer`}
          className='invisible bg-black/40 focus:bg-black/60 hover:bg-black/60 transition-colors ease-in-out flex-grow-0 z-10 rounded-e-xl group px-1 group-hover/slider-container:visible'
          // onClick={() => handleDirection('left')}
        >
          <AngleLeftIcon />
        </button>
        <div
          className='flex flex-grow translate-x-[-0%]'
          ref={listRef}
        >
          {
          data.map((movie, index) => (
            <Card key={`${movie}_${index}`} movie={movie} />
          ))
        }
        </div>
        <button
        //   className={`slider-action bg-black/40 right-0 ${!showControls ? 'hidden' : ''}
        // flex justify-center items-center max-md:hidden cursor-pointer`}
          className='invisible bg-black/40 focus:bg-black/60 hover:bg-black/60 transition-colors ease-in-out flex-grow-0 z-10 rounded-s-xl group px-2 group-hover/slider-container:visible'
          // onClick={() => handleDirection('right')}
        >
          <AngleRightIcon />
        </button>
      </div>
    </>
  )
}
