import axios from 'axios'

export const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length)
  const randomMovie = movies[randomIndex]
  return randomMovie
}

export const getRawData = async (api, genres, paging) => {
  const moviesArray = []
  for (let i = 1; moviesArray.length < 36 && i < 4; i++) {
    const { data: { results } } = await axios(`${api}${paging ? `&page=${i}` : ''}`)
    createArrayFromRawData(results, moviesArray, genres)
  }
  return moviesArray
}

const createArrayFromRawData = (results, moviesArray, genres) => {
  results.forEach((movie) => {
    const movieGenres = []
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre)
      if (name) movieGenres.push(name.name)
    })
    if (movie.backdrop_path) {
      moviesArray.push({
        name: movie?.original_name ?? movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
        overview: movie.overview
      })
    }
  })
}
