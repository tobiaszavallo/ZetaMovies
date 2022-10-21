
const API_KEY = '509e055372f3ecb88e479dfc7d79c3ed';

export const fetchMovieData = async ( id, setMovieData, setLoading) => {
    setLoading(true)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json()
    setMovieData(data)
    setLoading(false)
    return;
}

export const fetchMovieCredits = async ( id, setMovieCredits, setDirectors ) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    const data = await res.json()
    setMovieCredits(data)
    setDirectors(data.crew.filter(member => member.job === "Director"))
    return;
}


export const fetchActors = async ( id, setActor ) => {
    const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    setActor(data);
    return;
}
