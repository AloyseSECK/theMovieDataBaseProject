import { HomeDesign } from "../design/HomeDesign";
import { NavBar } from "../design/NavBar";
import { SearchBar } from "../design/SearchBar";
import { FilmGrid } from "../components/FilmGrid";
import { FilmCard } from "../components/FilmCard";

export const Home = () => {
    return (
        <HomeDesign>
            <NavBar>
                <p> 🎬🍿 Movie Library </p>
                <SearchBar type="text" placeholder="🔎 Search for movie" />
            </NavBar>
            
            <FilmGrid>  
                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>
                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>                <FilmCard> 
                    <img style={{width: "450px", height: "auto", borderRadius: "1em"}} src="./images/expendables.jpg" alt="" />
                </FilmCard>               
            </FilmGrid> 
        </HomeDesign>

    );
};

