import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviePage} from "../pages/MoviePage";
import { Test } from "../pages/TestPage";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
    );
};
