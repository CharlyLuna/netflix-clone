
export const SelectGenres = ({ genres, onGenreChange, title = 'Titulo' }) => {
  return (
    <div className='flex ml-8 lg:ml-12 gap-4 items-center'>
      <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
      <select
        className='flex text-white cursor-pointer bg-zinc-800 rounded px-2 py-1'
        aria-label='Genres'
        onChange={(e) => onGenreChange(e.target.value)}
        defaultValue='Genres'
      >
        <option disabled>
          Genres
        </option>
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
    </div>
  )
}
