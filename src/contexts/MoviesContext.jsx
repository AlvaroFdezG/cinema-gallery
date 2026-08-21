import React, { createContext, useState } from 'react'

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {

    const [movies, setMovies] = useState();
    const [showModal, setShowModal] = useState(false);

    const data = { movies, setMovies, showModal, setShowModal }

    return (
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}

export { MoviesContext }
export default MoviesProvider