import { useParams } from "react-router-dom";
import { Presentation, ActorsList, ImagesList } from "../design/MoviePageDesign";
import { getMovieDetails } from "../services/query";
import {
    useQuery,
  } from '@tanstack/react-query'
import styled from "@emotion/styled";


const base_url_image = "https://image.tmdb.org/t/p/"

export const MoviePage = () => {
    const { movieId } = useParams();

    if (!movieId) {
        return <span>Invalid movie ID</span>;
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMovieDetails(movieId),
    });

    if (isPending) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }   

    return (
        //return button logic
        <>
            <div>Back</div>
            <Presentation>
                <img src= {base_url_image + "original" + data.poster_path} alt = "img"/>
                <div>
                    <p>Title</p>
                    <p>
                        Some random description : afbuhfeza zebfhaj bfezhjkfbzaebfeezhjkbfzkhbfzkjbfzkafbzkhaebfhzkabfhzkbfkjzafb
                        ezhjbfhjzbkjabeazbfh
                    </p>
                    <p>Movie category</p>
                    <p>Movie release date</p>
                </div>
            </Presentation>
            <div>
                <p>Credit</p>
                <ActorsList>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>John Cat</p>
                        <p>Cat-cher</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Sabrine Cat</p>
                        <p>Cat-woman</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Fabrice Cat</p>
                        <p>Cat-astrophe</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Roy Cat</p>
                        <p>Cat-ddie</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Sylvain Cat</p>
                        <p>Cat-apulte</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>James Cat</p>
                        <p>Agent Cat</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Chris Cat</p>
                        <p>Cat-nine</p>
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" />
                        <p>Marie Cat</p>
                        <p>Cat-pla</p>
                    </div>
                </ActorsList>
            </div>
            <div>
                <p>Images</p>
                <ImagesList>
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                    <img src="https://placekitten.com/200/300" />
                </ImagesList>
            </div>
        </>
    );
};

