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

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  const baseUrl = import.meta.env.VITE_TMDB_URL
  const key = import.meta.env.VITE_API_KEY
  const { data } = await axios(`${baseUrl}/genre/movie/list?api_key=${key}`)
  console.log(data)
  // return data
})

const NetflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload
      state.genresLoaded = true
    })
  }
})

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer
  }
})
