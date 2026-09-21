import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import MovieDetails from './components/MovieDetails'
import MoviesProvider from './contexts/MoviesContext'
import MovieData from './pages/MovieData'

function App() {


  return (
    <>
      <BrowserRouter>
        <MoviesProvider>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/movies' element={<MovieList />} >
                <Route path='/movies/:movieId' element={<MovieDetails />} />
              </Route>
              <Route path='/moviedata/:movieId' element={<MovieData />}/>
            </Route>
          </Routes>
        </MoviesProvider>
      </BrowserRouter>
    </>
  )
}

export default App
