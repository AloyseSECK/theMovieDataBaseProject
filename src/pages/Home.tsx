import { HomeDesign } from "../design/HomeDesign";
import { NavBar } from "../design/NavBar";
import { SearchBarDiv } from "../design/SearchBarDesign";
import { FilmGrid } from "../components/FilmGrid";
import { FilmCard } from "../components/FilmCard";
import { Link } from "react-router-dom";
import { getNowPlayingMovies } from "../services/query";
import { base_url_image } from '../services/baseUrls';

import {
    useQuery,
} from '@tanstack/react-query'

import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

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
                <p style={{ marginLeft: "2rem", marginRight:"2em" }}> 🎬🍿 Movie Library </p>
                <SearchBarDiv>
                    <SearchBar setResults={setResults} />
                </SearchBarDiv>
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


