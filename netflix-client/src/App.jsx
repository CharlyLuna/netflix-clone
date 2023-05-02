import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Netflix, Signup } from './pages/'
import { Player } from './pages/Player'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/player' element={<Player />} />
        <Route path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
