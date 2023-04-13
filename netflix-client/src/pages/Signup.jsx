import { useState } from 'react'
import { BackgroundImage } from '../components/BackgroundImage'
import { FormField } from '../components/FormField'
import { Header } from '../components/Header'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleFormChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleStartSignIn = () => {
    if (form.email) setShowPassword(true)
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const { email, password } = form
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

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
          {/* TEXT */}
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='font-extrabold text-4xl md:text-6xl px-12 lg:px-32'>Unlimited movies, TV show and more</h1>
            <h4 className='text-lg md:text-2xl px-8'>Watch anywhere. Cancel anytime</h4>
            <h6 className='text-sm md:text-lg px-8'>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          {/* FORM INPUTS */}
          <form onSubmit={handleSignIn} className={`grid w-4/5 lg:w-4/6 ${showPassword ? 'grid-cols-2' : 'grid-cols-[2fr_1fr]'}`}>
            <FormField
              type='email'
              placeholder='Email Address'
              name='email'
              labelName={showPassword ? 'Email' : ''}
              value={form.email}
              handleChange={handleFormChange}
            />
            {showPassword && (
              <FormField
                type='password'
                placeholder='Password'
                name='password'
                labelName='Password'
                value={form.password}
                handleChange={handleFormChange}
              />
            )}
            {!showPassword && (
              <button
                className='form-button'
                onClick={handleStartSignIn}
              >
                Get Started
              </button>
            )}
            {error && <p className='text-red-400 col-span-2'>{error}</p>}
            {/* SIGN UP BUTTON */}
            {
              showPassword && (
                <button
                  className='form-button mt-2 col-span-2'
                  type='submit'
                >
                  Sign Up
                </button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}
