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
            <div className='bg-zinc-900 pb-16'>
              <CardSlider title={titles[0]} data={getMoviesFromRange(0, 10)} />
              <CardSlider title={titles[1]} data={getMoviesFromRange(10, 20)} />
              <CardSlider title={titles[2]} data={getMoviesFromRange(20, 30)} />
              <CardSlider title={titles[3]} data={getMoviesFromRange(30, 40)} />
              <CardSlider title={titles[4]} data={getMoviesFromRange(40, 50)} />
              <CardSlider title={titles[5]} data={getMoviesFromRange(50, 60)} />
            </div>
            )
          : <NotAvailable />
      }
    </>
  )
}
