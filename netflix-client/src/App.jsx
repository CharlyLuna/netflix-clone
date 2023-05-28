import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Login, Netflix, Signup, Player, Movies, TVShows, MyList
} from './pages/'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/player' element={<Player />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<TVShows />} />
          <Route path='/mylist' element={<MyList />} />
          <Route path='/' element={<Netflix />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
