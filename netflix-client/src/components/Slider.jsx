import { CardSlider } from './CardSlider'

export const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to)
  }

  return (
    <div className='bg-zinc-900 pb-16'>
      <CardSlider title='Trending now' data={getMoviesFromRange(0, 10)} />
      <CardSlider title='New Releases' data={getMoviesFromRange(10, 20)} />
      <CardSlider title='Blockbuster Movies' data={getMoviesFromRange(20, 30)} />
      <CardSlider title='Popular On Netflix' data={getMoviesFromRange(30, 40)} />
      <CardSlider title='Action movies' data={getMoviesFromRange(40, 50)} />
      <CardSlider title='Epics' data={getMoviesFromRange(50, 60)} />
    </div>
  )
}
