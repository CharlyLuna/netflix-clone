import { useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'
import { CardSlider } from '../components/CardSlider'

export const MyList = () => {
  const myList = useSelector(state => state.netflix.myList)
  console.log(myList)
  return (
    <>
      <Navbar />
      <section className='relative mt-40'>
        <h1 className='text-4xl pl-12'>My list</h1>
        {
      myList.length > 0
        ? (
          <CardSlider
            data={myList}
          />
          )
        : (
          <div className='flex items-center justify-center h-full'>
            <h1 className='text-3xl text-white'>You don't have any movie in your list</h1>
          </div>
          )
    }
      </section>
    </>
  )
}
