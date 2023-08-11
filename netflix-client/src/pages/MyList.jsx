import { useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/Card'

export const MyList = () => {
  const myList = useSelector(state => state.netflix.myList)
  console.log(myList)
  return (
    <>
      <Navbar />
      <section className='relative mt-40 mx-14 pb-28'>
        {
      myList.length > 0
        ? (
          <>
            <h1 className='text-3xl mb-6'>My list</h1>
            <div className='flex justify-center'>
              <div className='grid gap-y-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                {
                  myList.map((movie, index) => (
                    <Card key={index} movie={movie} withOffset={false} />
                  ))
                }
              </div>
            </div>
          </>
          )
        : (
          <div className='flex items-center justify-center h-full'>
            <h1 className='text-3xl text-white'>You haven't added anything to your list yet</h1>
          </div>
          )
    }
      </section>
    </>
  )
}
