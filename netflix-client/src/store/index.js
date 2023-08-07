import {
  configureStore,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'
import { getRawData } from '../utils/functions'

const initialState = {
  trending: [],
  movies: [],
  tvShows: [],
  genresLoaded: false,
  genres: [],
  tvGenresLoaded: false,
  tvGenres: []
}

const BASE_URL = import.meta.env.VITE_TMDB_URL
const KEY = import.meta.env.VITE_API_KEY

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  const { data: { genres } } = await axios(`${BASE_URL}/genre/movie/list?api_key=${KEY}`)
  return genres
})

export const getTVGenres = createAsyncThunk('netflix/tv_genres', async () => {
  const { data: { genres } } = await axios(`${BASE_URL}/genre/tv/list?api_key=${KEY}`)
  return genres
})

export const fetchTrending = createAsyncThunk(
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

export const fetchTVDataByGenre = createAsyncThunk(
  'netflix/tvShowsByGenre',
  async ({ genre, type }, thunkApi) => {
    const { netflix: { tvGenres } } = thunkApi.getState()
    const data = await getRawData(
      `${BASE_URL}/discover/${type}?api_key=${KEY}&with_genres=${genre}&with_origin_country=US`,
      tvGenres,
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
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.trending = action.payload
    })
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload
    })
    builder.addCase(fetchTVDataByGenre.fulfilled, (state, action) => {
      state.tvShows = action.payload
    })
    builder.addCase(getTVGenres.fulfilled, (state, action) => {
      state.tvGenres = action.payload
      state.tvGenresLoaded = true
    })
  }
})

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer
  }
})
