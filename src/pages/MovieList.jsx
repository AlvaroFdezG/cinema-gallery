import React, { useContext, useEffect, useState } from 'react'
import { discoverMovies } from "./../services/movieService"
import { Link, Outlet } from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';

const MovieList = () => {

    const { movies, setMovies } = useContext(MoviesContext);

    const getDiscMovies = async () => {
        const movies = await discoverMovies();
        setMovies(movies);
    }

    useEffect(() => {
        getDiscMovies();
    }, [])

    if (!movies) {
        return (<p>Loading movies</p>);
    }

    return (
        <div className='flex gap-8 items-start justify-between'>
            <Outlet />
            <section className='grid grid-cols-5 gap-5 p-10'>
                {movies.map(movie => (
                    <Link to={"/movies/" + movie.id}>
                        <article key={movie.id} className='rounded-lg overflow-hidden hover:border-2 border-[#4e5d709f] transition-all duration-75'>
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                            <p className='text-center text-white'>{movie.title}</p>
                        </article>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default MovieList