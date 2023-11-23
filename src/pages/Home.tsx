import { HomeDesign } from "../design/HomeDesign";
import { NavBar } from "../design/NavBar";
import { FilmGrid } from "../components/FilmGrid";
import { FilmCard } from "../components/FilmCard";
import { Link } from "react-router-dom";
import { getNowPlayingMovies } from "../services/query";

import {
    useQuery,
} from '@tanstack/react-query'

import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

const base_url_image = "https://image.tmdb.org/t/p/original"
export const loadingImage = "https://wallpaperaccess.com/full/1175484.jpg"
export const Home = () => {
    const [results, setResults] = useState([]);
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
                <div style = {{display: "table-column", paddingTop: "30px"}}>
                    <SearchBar setResults={setResults} />
                </div>
            </NavBar>
            <FilmGrid>
            {
                    (results && results.length > 0)? results.map((results: any, index: number) =>
                        (
                            <Link to={"Movie/" + results.id.toString()} key={index}>
                                <FilmCard src={
                                    results.poster_path 
                                    ? base_url_image + results.poster_path  
                                    : loadingImage 
                                }/>

                            </Link>
                        )
                    ):
                    data.results.map((results: any, index: number) => 
                        (
                        <Link to={"Movie/" + results.id.toString()} key={index}>
                            <FilmCard src={base_url_image + results.poster_path} alt="image" />
                        </Link>
                        )
                    )
                }
            </FilmGrid>
        </HomeDesign>

    );
};


