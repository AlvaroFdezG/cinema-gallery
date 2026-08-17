import React, { act, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MoviesContext } from '../contexts/MoviesContext';
import { getMovieCredits } from '../services/movieService';

const MovieDetails = () => {
    const { movieId } = useParams();

    const { movies, setMovies } = useContext(MoviesContext);
    const [movie, setMovie] = useState();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const movie = movies.find(mov => mov.id == movieId);
            const movieCast = await getMovieCredits(movieId);
            console.log(movieCast.cast);
            setCast(movieCast.cast.slice(0, 10));
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
        <div className='sticky top-0 left-0 h-screen pt-24 pb-8 w-7/12'>
            <section className='rounded-lg p-6 bg-[#313a46] border-2 border-[#4e5d709f] flex flex-col gap-5 text-white h-full'>
                <div className='flex items-start justify-between gap-5'>
                    <img className='w-80' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                    <section className='w-full flex flex-col gap-4 relative'>
                        <h2 className='text-xl font-semibold'>{movie.title}</h2>
                        <p className='text-sm'>{movie.overview}</p>
                        <p><i class="fa-solid fa-star"></i> {movie.vote_average.toFixed(1)}/10</p>
                        <Link className='absolute top-0 right-0 text-[#89bcff]' to={"/movies"}><i class="fa-solid fa-angles-left"></i></Link>
                    </section>
                </div>

                <ul className='grid grid-cols-10 gap-4'>
                    {cast.map(actor => (
                        <li key={actor.cast_id}>
                            <img className='rounded-xl' src={"https://image.tmdb.org/t/p/w500" + actor.profile_path} alt={actor.name} />
                            <p className='text-center'>{actor.name}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    )
}

export default MovieDetails