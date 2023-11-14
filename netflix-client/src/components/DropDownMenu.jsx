import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

export const DropDownMenu = ({ isVisible, setVisibility }) => {
  return (
    <div
      className='fadeIn absolute right-6 lg:right-16 top-14 flex flex-col items-end pt-2'
      onMouseEnter={() => setVisibility(true)}
      onFocus={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onBlur={() => setVisibility(false)}
    >
      <div className='arrow-up mr-7' />
      <div className='flex flex-col items-center justify-center w-[200px] h-fit bg-black'>
        <ul className='py-2 text-gray-300 text-sm'>
          <li className='p-2'>
            <a className='hover:underline' href='#profiles'>Manage Profiles</a>
          </li>
          <li className='p-2'>
            <a className='hover:underline' href='#account'>Account</a>
          </li>
          <li className='p-2'>
            <a className='hover:underline' href='#help'>Help Center</a>
          </li>
        </ul>
        <div className='bg-zinc-600 h-[1px] w-full' />
        <a href='/login' className='p-2 hover:underline text-gray-300 text-sm' onClick={() => signOut(auth)}>Log out</a>
      </div>
    </div>
  )
}
