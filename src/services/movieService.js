const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'aplication/json',
        Authorization: 'Bearer ' + API_KEY
    }
};


const discoverMovies = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie', options);
        const resJson = await res.json();
        
        return resJson.results;
    } catch (err) {
        console.log(err);
    }
}

export { discoverMovies }