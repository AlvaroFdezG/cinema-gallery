import React, { useEffect, useState } from 'react'
import { discoverMovies } from "./../services/movieService"

const MovieList = () => {

    const [discMovies, setDiscMovies] = useState();

    const getDiscMovies = async () => {
        const movies = await discoverMovies();
        setDiscMovies(movies);
    }

    useEffect(() => {
        getDiscMovies();
    }, [])

    if (!discMovies) {
        return (<p>Loading movie list</p>);
    }

    return (
        <>
            {discMovies.map(movie => (
                <p key={movie.id}>{movie.original_title}</p>
            ))}
        </>
    )
}

export default MovieList