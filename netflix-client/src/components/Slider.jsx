import { CardSlider } from './CardSlider'
import { NotAvailable } from './NotAvailable'

export const Slider = ({ movies, titles }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to)
  }

  return (
    <>
      {
        movies.length > 0
          ? (
            <div className='bg-zinc-900 pb-12 md:pb-28'>
              <CardSlider title={titles[0]} data={getMoviesFromRange(0, 12)} />
              <CardSlider title={titles[1]} data={getMoviesFromRange(12, 24)} />
              <CardSlider title={titles[2]} data={getMoviesFromRange(24, 36)} />
            </div>
            )
          : <NotAvailable />
      }
    </>
  )
}
