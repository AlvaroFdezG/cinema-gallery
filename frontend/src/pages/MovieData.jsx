import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { MoviesContext } from "../contexts/MoviesContext";
import userDefault from "../assets/userDefault.jpg";
import { getMovieCredits, getMovieDetails } from "../services/movieService";

const MovieData = () => {
    const { movie, setMovie, cast, setCast } = useContext(MoviesContext);
    const { movieId } = useParams();

    const getMovie = async () => {
        const movieDetails = await getMovieDetails(movieId);
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast);
        setMovie(movieDetails);

        console.log(movieCast);
        console.log(movieDetails);
    }

    useEffect(() => {
        getMovie();

    }, []);

    if (!movie) {
        return (<p className="text-center text-white text-4xl mt-48">Película no encontrada</p>)
    }

    return (
        <>
            <div className="mt-20 text-white">
                <h2 className="text-4xl">{movie.title}</h2>
                <p>{movie.release_date.slice(0, movie.release_date.indexOf("-"))}</p>
                <p className="text-sm font-semibold max-w-[800px]">{movie.overview}</p>

                <section>
                    <h3 className="text-3xl">Elenco</h3>
                    <ul className="list-none flex justify-start flex-wrap gap-4 grid-cols-4">
                        {cast.cast.map(actor => (
                            <li className="w-24" key={actor.id}>
                                <Link to={"/actordetails/" + actor.id}>
                                    <img className='w-24 rounded-xl' src={actor.profile_path ? "https://image.tmdb.org/t/p/original" + actor.profile_path : userDefault} alt={actor.name} />
                                    <div>
                                        <p className='text-center font-semibold'>{actor.name}</p>
                                        <p className='text-center text-gray-400'>{actor.character}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default MovieData