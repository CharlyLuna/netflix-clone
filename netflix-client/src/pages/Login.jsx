import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundImage } from '../components/BackgroundImage'
import { FormField } from '../components/FormField'
import { Header } from '../components/Header'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleFormChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleLogIn = async (e) => {
    e.preventDefault()
    try {
      const { email, password } = form
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <div className='relative'>
      <BackgroundImage />
      <div className='absolute top-0 left-0 h-screen w-screen
        bg-[rgba(0,0,0,0.5)] grid grid-rows-[15vh_85vh]'
      >
        <Header login={false} />
        {/* FORM */}
        <div className='flex flex-col place-self-center items-center justify-center
        h-[60%] lg:h-[70%] max-h-[500px]'
        >

          <form
            className={`flex flex-col items-center justify-center ${error ? 'gap-4' : 'gap-8'} bg-[#000000b0]
            px-6 py-2 w-[70vw] md:w-[40vw] h-full max-w-md `}
            onSubmit={handleLogIn}
          >
            <div className='font-bold text-xl md:text-2xl'>
              <h1>Login</h1>
            </div>
            {error && (
              <p className='text-red-500 text-center'>
                Data is incorrect.
              </p>
            )}
            {/* FORM INPUTS */}
            <FormField
              type='email'
              placeholder='Email Address'
              name='email'
              labelName='Email'
              value={form.email}
              handleChange={handleFormChange}
            />
            <FormField
              type='password'
              placeholder='Password'
              name='password'
              labelName='Password'
              value={form.password}
              handleChange={handleFormChange}
            />
            {/* LOGIN BUTTON */}
            <button
              className='form-button w-full'
              type='submit'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
