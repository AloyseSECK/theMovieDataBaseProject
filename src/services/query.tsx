const apiUrl = 'https://api.themoviedb.org/3/movie/';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM';

export const getNowPlayingMovies = async () => {
    const response = await fetch(apiUrl + "now_playing", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      })
    const data = await response.json()
    return data;
}


export const getMovieDetails = async (movieId : string) => {
    const response = await fetch(apiUrl + movieId, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      })
    const data = await response.json()
    return data;
}

