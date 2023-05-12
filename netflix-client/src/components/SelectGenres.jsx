import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../store'

export const SelectGenres = ({ genres, type }) => {
  const dispatch = useDispatch()

  const handleGenreSelection = (e) => {
    dispatch(fetchDataByGenre({ genre: e.target.value, type }))
  }

  return (
    <select
      className='flex text-black'
      onChange={handleGenreSelection}
    >
      {
        genres.map(genre => (
          <option
            value={genre.id}
            key={genre.id}
          >
            {genre.name}
          </option>
        ))
      }
    </select>
  )
}
