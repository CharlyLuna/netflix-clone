import { useState } from 'react'
import { Navbar } from '../components/Navbar'

export const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
    return () => (window.onscroll = null)
  }

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  )
}
