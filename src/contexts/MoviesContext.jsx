import React, { createContext, useState } from 'react'

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {

    const [movies, setMovies] = useState();

    const data = { movies, setMovies }

    return (
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}

export { MoviesContext }
export default MoviesProvider