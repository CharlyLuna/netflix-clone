import background from '../assets/login.jpg'

export const BackgroundImage = () => {
  return (
    <div className='h-screen w-screen'>
      <img className='h-screen w-screen object-cover' src={background} alt='background image of netflix' />
    </div>
  )
}
