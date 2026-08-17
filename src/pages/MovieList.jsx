import React, { useContext, useEffect, useState } from 'react'
import { discoverMovies } from "./../services/movieService"
import { Link, Outlet, useOutlet } from 'react-router-dom';
import { MoviesContext } from '../contexts/MoviesContext';

const MovieList = () => {

    const { movies, setMovies } = useContext(MoviesContext);

    const hasOutlet = useOutlet();

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
        <div className='flex items-start justify-between w-full'>
            <Outlet />
            <section className={`grid ${hasOutlet ? "w-5/12 grid-cols-3" : "w-full grid-cols-5"} gap-5 p-10 pt-24`}>
                {movies.map(movie => (
                    <Link key={movie.id} to={"/movies/" + movie.id}>
                        <article className='rounded-lg overflow-hidden hover:border-2 border-[#4e5d709f] transition-all duration-75'>
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