
export const SelectGenres = ({ genres, onGenreChange }) => {
  return (
    <select
      className='flex text-white ml-6 md:ml-14 cursor-pointer
      bg-zinc-800 rounded px-2 py-1'
      onChange={(e) => onGenreChange(e.target.value)}
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
