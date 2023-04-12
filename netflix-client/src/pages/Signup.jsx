import { BackgroundImage } from '../components/BackgroundImage'
import { FormField } from '../components/FormField'
import { Header } from '../components/Header'

export const Signup = () => {
  return (
    <div className=''>
      <BackgroundImage />
      <div className='absolute top-0 left-0 h-screen w-screen
        grid grid-rows-5'
      >
        <Header />
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <h1>Unlimited movies, TV show and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
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
