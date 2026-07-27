import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieList from './pages/MovieList'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/discover' element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
