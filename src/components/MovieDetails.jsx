import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../contexts/MoviesContext';

const MovieDetails = () => {
    const { movieId } = useParams();

    const { movies, setMovies } = useContext(MoviesContext);
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = () => {
            const movie = movies.find(mov => mov.id == movieId);
            setMovie(movie);
        }
        getMovie();
    }, [movieId])

    if (!movie) {
        return (
            <p>Loading movie</p>
        )
    }
    return (
        <div className='w-7/12 sticky top-0 left-0 h-screen pt-24 pb-8'>
            <section className='rounded-lg p-6 bg-[#313a46] border-2 border-[#4e5d709f] flex items-start justify-between gap-5 text-white h-full'>
                <img className='w-80' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                <section className='w-full flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>{movie.title}</h2>
                    <p className='text-sm'>{movie.overview}</p>
                    <p><i class="fa-solid fa-star"></i> {movie.vote_average.toFixed(1)}/10</p>
                </section>
            </section>
        </div>

    )
}

export default MovieDetails