import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../store'

export const SelectGenres = ({ genres, type }) => {
  const dispatch = useDispatch()

  const handleGenreSelection = (e) => {
    dispatch(fetchDataByGenre({ genre: e.target.value, type }))
  }

  return (
    <select
      className='flex text-white ml-6 md:ml-14 cursor-pointer
      bg-zinc-800 rounded px-2 py-1'
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
