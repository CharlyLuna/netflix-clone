import { BackgroundImage } from '../components/BackgroundImage'
import { FormField } from '../components/FormField'
import { Header } from '../components/Header'

export const Signup = () => {
  return (
    <div className='relative'>
      <BackgroundImage />
      <div className='absolute top-0 left-0 h-screen w-screen
        bg-[rgba(0,0,0,0.5)] grid grid-rows-[15vh_85vh]'
      >
        <Header login />
        <div className='flex flex-col items-center justify-center
        gap-4'
        >
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='font-extrabold text-2xl md:text-4xl px-8'>Unlimited movies, TV show and more</h1>
            <h4 className='text-lg md:text-2xl px-8'>Watch anywhere. Cancel anytime</h4>
            <h6 className='text-sm md:text-lg px-8'>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <FormField type='email' placeholder='Email Address' name='email' labelName='Email' />
          <FormField type='password' placeholder='Password' name='password' labelName='Password' />
          <button>Get Started</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  )
}
