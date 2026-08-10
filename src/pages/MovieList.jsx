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
            <section className='grid grid-cols-5 gap-5 p-10'>
                {discMovies.map(movie => (
                    <article key={movie.id} className='hover:border-2 border-[#4e5d709f] transition-all duration-75'>
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                        <p className='text-center text-white'>{movie.title}</p>
                    </article>
                ))}
            </section>
        </>
    )
}

export default MovieList