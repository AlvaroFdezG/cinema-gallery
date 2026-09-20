import React, { act, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MoviesContext } from '../contexts/MoviesContext';
import { getMovieCredits, getMovieDetails } from '../services/movieService';
import Modal from './Modal';
import Seats from './Seats';
import { genreColors } from '../assets/utils';
import userDefault from "../assets/userDefault.jpg";
import DaysSessions from './DaysSessions';

const MovieDetails = () => {
    const { movieId } = useParams();

    const { showModal, setShowModal } = useContext(MoviesContext);
    const [movie, setMovie] = useState();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const movieDetails = await getMovieDetails(movieId);
            const movieCast = await getMovieCredits(movieId);
            console.log(movieCast);
            setCast(movieCast);
            setMovie(movieDetails);

            console.log(movieCast);

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
            <section className='rounded-lg p-6 bg-[#313a46] border-2 border-[#4e5d709f] flex flex-col gap-5 text-white h-full overflow-scroll'>
                <div className='flex items-start justify-between gap-5'>
                    <img className='w-4/12' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                    <section className='w-8/12 flex flex-col gap-4 relative'>
                        <h2 className='text-3xl font-semibold'>{movie.title}</h2>
                        <p className='text-sm text-justify'>{movie.overview}</p>
                        <ul className='flex items-start justify-start gap-2'>
                            {movie.genres.map(genre => (
                                <li style={{ borderColor: genreColors[genre.id], color: genreColors[genre.id] }}
                                    className={`border rounded-md text-sm p-1`} key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                        <section className='flex justify-between items-center'>
                            <div>
                                <p><i class="fa-solid fa-star"></i> {movie.vote_average.toFixed(1)}/10</p>
                                <span className='text-gray-400'>{movie.vote_count} votos</span>
                            </div>

                            <div>
                                <h4 className='text-gray-400'>DURACIÓN</h4>
                                <p>{movie.runtime}m</p>
                            </div>
                            <div>
                                <h4 className='text-gray-400'>FECHA DE ESTRENO</h4>
                                <p>{movie.release_date}</p>
                            </div>
                        </section>

                        <Link className='absolute top-0 right-0 text-[#89bcff]' to={"/movies"}><i className="fa-solid fa-angles-left"></i></Link>
                        <section>
                            <h4 className='text-gray-400'>Director</h4>
                            <p className='text-sm'>{cast.crew[0].name}</p>
                            <h4 className='text-gray-400'>Reparto</h4>
                            {
                                cast.cast.slice(0, 10).map(actor => (
                                    <span className='text-center text-sm' key={actor.cast_id}>
                                        {actor.name}{actor.order < 9 ? ", " : "."}
                                    </span>
                                ))}

                            {/* {cast.map(actor => (
                            <li key={actor.cast_id}>
                                <img className='rounded-xl' src={actor.profile_path ? "https://image.tmdb.org/t/p/original" + actor.profile_path : userDefault} alt={actor.name} />
                                <p className='text-center text-sm'>{actor.name}</p>
                            </li>
                        ))} */}
                        </section>
                    </section>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <Link className='text-center w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>Mas detalles</Link>
                </div>
                <DaysSessions />
            </section>
        </div>

    )
}

export default MovieDetails