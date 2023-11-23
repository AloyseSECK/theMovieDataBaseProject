import { apiUrl } from '../services/baseUrls';


const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM';

export const getNowPlayingMovies = async () => {
    const response = await fetch(apiUrl + "movie/now_playing", {
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
    const response = await fetch(apiUrl + "movie/" + movieId, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      })
    const data = await response.json()
    return data;
}

export const getMovieCredits = async (movieId : string) => {
  const response = await fetch(apiUrl + "movie/" + movieId + "/credits", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    })
  const data = await response.json()
  return data;
}

export const getMovieImages = async (movieId : string) => {
  const response = await fetch(apiUrl + "movie/" + movieId + "/images", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    })
  const data = await response.json()
  return data;
}
