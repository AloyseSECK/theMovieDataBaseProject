import { HomeDesign } from "../design/HomeDesign";
import { NavBar } from "../design/NavBar";
import { SearchBar } from "../design/SearchBar";
import { FilmGrid } from "../components/FilmGrid";
import { FilmCard } from "../components/FilmCard";
import movieData from "../assets/NowPlayingMovieData/NowPlayingMovie.json"

const base_url_image = "https://image.tmdb.org/t/p/"

export const Home = () => {
    return (
        <HomeDesign>
            <NavBar>
                <p> 🎬🍿 Movie Library </p>
                <SearchBar type="text" placeholder="🔎 Search for movie" />
            </NavBar>
            

            <FilmGrid>  
                {
                    
                    movieData.results.map((results,index) => 
                    <div key={index}>
                        <FilmCard 
                        src={base_url_image + "original" + results.poster_path} 
                        alt="Clickable Image"         
                        />
                    </div>
                    )  
                }
            </FilmGrid> 
        </HomeDesign>

    );
};
