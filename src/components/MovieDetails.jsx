import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../contexts/MoviesContext';

const MovieDetails = () => {
    const { movieId } = useParams();

    const { movies, setMovies } = useContext(MoviesContext);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = () => {
            const movie = movies.find(mov => mov.id == movieId);
            setMovie(movie);
        }
        getMovie();
    }, [movieId])

    return (
        <div className='bg-[#313a46] w-full p-6 rounded-lg'>
            <section>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                <h2 className='text-white'>{movie.title}</h2>
            </section>
        </div>
    )
}

export default MovieDetails