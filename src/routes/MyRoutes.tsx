import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Test } from "../pages/testpage";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
};
