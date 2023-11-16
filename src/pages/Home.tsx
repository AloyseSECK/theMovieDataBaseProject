import { HomeDesign } from "../design/HomeDesign";
import { NavBar } from "../design/NavBar";
import { SearchBar } from "../design/SearchBar";
import { FilmGrid } from "../components/FilmGrid";
import { FilmCard } from "../components/FilmCard";
import { Link } from "react-router-dom";
import { getNowPlayingMovies } from "../services/query";
import {
    useQuery,
  } from '@tanstack/react-query'

const base_url_image = "https://image.tmdb.org/t/p/"

export const Home = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: getNowPlayingMovies,
    });

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <HomeDesign>
            <NavBar>
                <p style={{ marginLeft: "2rem" }}> 🎬🍿 Movie Library </p>
                <SearchBar type="text" placeholder="🔎 Search for movie" />
            </NavBar>
            <FilmGrid>
                {
                    data.results.map((results: any, index: any) => (
                        <Link to={"Movie/" + results.id.toString()} key={index}> 
                            <FilmCard src={base_url_image + "original" + results.poster_path} alt="image" />
                        </Link>)
                    )
                }
            </FilmGrid>
        </HomeDesign>

    );
};
