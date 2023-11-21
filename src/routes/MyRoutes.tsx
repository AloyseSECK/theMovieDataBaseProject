import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviePage} from "../pages/MoviePage";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
    );
};
