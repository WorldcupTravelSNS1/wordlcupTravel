

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Worldcup from "../pages/Worldcup";
import { world } from "../data/world";
import Component from "../components/Component";
// import Board from "../pages/Board"

const MyRouters = () => {
    const [contry] = useState(world);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Component />} />
                <Route path="/worldcup" element={<Worldcup contry={contry} />} />
                {/* <Route path="/board" element={<Board />} /> */}
            </Routes>

        </BrowserRouter>
    );
};
export default MyRouters;
