const API_KEY = import.meta.env.VITE_API_KEY;
import { sessionsTest } from "./../assets/utils.js";

const options = {
    method: 'GET',
    headers: {
        accept: 'aplication/json',
        Authorization: 'Bearer ' + API_KEY
    }
};


const discoverMovies = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES', options);
        const resJson = await res.json();
        // console.log(resJson.results);
        return resJson.results;
    } catch (err) {
        console.log(err);
    }
}

const getMovieCredits = async (id) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-ES`, options);
        const resJson = await res.json();
        // console.log(resJson);
        return resJson;
    } catch (err) {
        console.log(err);
    }
}

const getMovieDetails = async (id) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options);
        const resJson = await res.json();
        // console.log(resJson);
        return resJson;
    } catch (err) {
        console.log(err);
    }
}

const getSessionsByDay = () => {
    console.log(sessionsTest);
    const sessions = sessionsTest;
    return sessions;
}

export {
    discoverMovies,
    getMovieCredits,
    getMovieDetails,
    getSessionsByDay
}