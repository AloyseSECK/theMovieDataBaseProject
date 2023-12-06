import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviePage} from "../pages/MoviePage";



export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/theMovieDataBaseProject/" element={<Home />} />
            <Route path="/theMovieDataBaseProject/Home" element={<Home />} />
            <Route path="/theMovieDataBaseProject/movie/:movieId" element={<MoviePage />} />
        </Routes>
    );
};
