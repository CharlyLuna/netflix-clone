import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Netflix, Signup } from './pages/'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
