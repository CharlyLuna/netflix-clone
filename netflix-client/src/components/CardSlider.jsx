import { Card } from './Card'
import { AngleLeftIcon } from './icons/AngleLeftIcon'
import { AngleRightIcon } from './icons/AngleRightIcon'
import { useSlider } from '../hooks/useSlider'
import { useState } from 'react'

export const CardSlider = ({ data, title }) => {
  const { handleSlide, sliderRef } = useSlider()
  const [sliderIsActive, setSliderIsActive] = useState(false)

  return (
    <>
      <div className='px-9 lg:px-12 mt-6 md:mt-14 lg:text-xl font-semibold mb-2 '>
        <h1>{title}</h1>
      </div>
      <div
        className='flex justify-center group/slider-container'
      >
        <button
          className={`${sliderIsActive ? 'opacity-100' : 'opacity-0'} bg-black/40 focus:bg-black/60 hover:bg-black/60 transition-colors ease-in-out flex-grow-0 w-9 lg:w-12 shrink-0 z-10 rounded-e-xl group px-1 group-hover/slider-container:opacity-100 my-1`}
          onClick={() => handleSlide('left')}
          onFocus={() => setSliderIsActive(true)}
          onBlur={() => setSliderIsActive(false)}
        >
          <AngleLeftIcon />
        </button>
        <div
          className='slider'
          ref={sliderRef}
        >
          {
          data.map((movie, index) => (
            <Card key={`${movie}_${index}`} movie={movie} withOffset />
          ))
        }
        </div>
        <button
          className={`${sliderIsActive ? 'opacity-100' : 'opacity-0'} bg-black/40 focus:bg-black/60 hover:bg-black/60 transition-colors ease-in-out flex-grow-0 w-9 md:w-12 shrink-0 z-10 rounded-s-xl group px-2 group-hover/slider-container:opacity-100 my-1`}
          onClick={() => handleSlide('right')}
          onFocus={() => setSliderIsActive(true)}
          onBlur={() => setSliderIsActive(false)}
        >
          <AngleRightIcon />
        </button>
      </div>
    </>
  )
}
