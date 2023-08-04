import { useEffect, useRef } from 'react'

export const useSlider = () => {
  useEffect(() => {
    window.addEventListener('resize', handleSlide)
    return () => window.removeEventListener('resize', handleSlide)
  }, [])
  const sliderRef = useRef()

  const handleSlide = (direction) => {
    const itemsCount = sliderRef.current.children.length
    const itemsOnScreen = parseInt(window.getComputedStyle(sliderRef.current).getPropertyValue('--items'))
    const sliderPages = Math.ceil(itemsCount / itemsOnScreen)
    let sliderIndex = parseInt(window.getComputedStyle(sliderRef.current).getPropertyValue('--slider-index'))

    if (sliderIndex >= sliderPages) {
      sliderRef.current.style.setProperty('--slider-index', sliderPages - 1)
      sliderIndex = sliderPages - 1
    }

    if (direction === 'left') {
      if (sliderIndex + 1 === 1) {
        sliderRef.current.style.setProperty('--slider-index', sliderPages - 1)
      } else {
        sliderRef.current.style.setProperty('--slider-index', sliderIndex - 1)
      }
    }
    if (direction === 'right') {
      if (sliderIndex + 1 >= sliderPages) {
        sliderRef.current.style.setProperty('--slider-index', 0)
      } else {
        sliderRef.current.style.setProperty('--slider-index', sliderIndex + 1)
      }
    }
  }

  return {
    handleSlide,
    sliderRef
  }
}
