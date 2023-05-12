import {
  configureStore,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: []
}

const BASE_URL = import.meta.env.VITE_TMDB_URL
const KEY = import.meta.env.VITE_API_KEY

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  const { data: { genres } } = await axios(`${BASE_URL}/genre/movie/list?api_key=${KEY}`)
  return genres
})

const getRawData = async (api, genres, paging) => {
  const moviesArray = []
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const { data: { results } } = await axios(
      `${api}${paging ? `&page=${i}` : ''}`
    )
    createArrayFromRawData(results, moviesArray, genres)
  }
  return moviesArray
}

const createArrayFromRawData = (results, moviesArray, genres) => {
  results.forEach(movie => {
    const movieGenres = []
    movie.genre_ids.forEach(genre => {
      const name = genres.find(({ id }) => id === genre)
      if (name) movieGenres.push(name.name)
    })
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
        overview: movie.overview
      })
    }
  })
}

export const fetchMovies = createAsyncThunk(
  'netflix/trending',
  async ({ type }, thunkApi) => {
    const { netflix: { genres } } = thunkApi.getState()
    const data = await getRawData(
      `${BASE_URL}/trending/${type}/week?api_key=${KEY}`,
      genres,
      true
    )
    return data
  })

export const fetchDataByGenre = createAsyncThunk(
  'netflix/moviesByGenre',
  async ({ genre, type }, thunkApi) => {
    const { netflix: { genres } } = thunkApi.getState()
    const data = await getRawData(
      `${BASE_URL}/discover/${type}?api_key=${KEY}&with_genres=${genre}`,
      genres,
      true
    )
    return data
  })

const NetflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload
      state.genresLoaded = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  }
})

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer
  }
})
