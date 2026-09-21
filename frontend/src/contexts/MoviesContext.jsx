import React, { createContext, useState } from 'react'

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {

    const [movie, setMovie] = useState();
    const [cast, setCast] = useState([]);

    const [movies, setMovies] = useState();
    const [showModal, setShowModal] = useState(false);

    const [daySelected, setDaySelected] = useState();
    const [showDays, setShowDays] = useState(false);

    const data = {
        movies,
        setMovies,
        showModal,
        setShowModal,
        showDays,
        setShowDays,
        daySelected,
        setDaySelected,
        movie,
        setMovie,
        cast,
        setCast
    }

    return (
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    )
}

export { MoviesContext }
export default MoviesProvider