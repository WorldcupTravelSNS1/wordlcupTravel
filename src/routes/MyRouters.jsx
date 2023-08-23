

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Worldcup from "../pages/worldcup/Worldcup";
import { world } from "../data/world";
import Component from "../components/Component";
import Board from "../pages/board/Board";
import { eastAsia } from "../data/eastAsia";

const MyRouters = () => {
    const [conry] = useState(world)
    const regions = ['eastAsia', 'southEastAsia', 'europe', 'ncsAmerica'];

    const [country, setCountry] = useState({});
    regions.forEach(region => {
        const [state, setState] = useState({});
        setCountry(prevCountry => ({
            ...prevCountry,
            [region]: state
        }));
    });
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Component />} />
                <Route path="/worldcup" element={<Worldcup contry={contry} />} />
                <Route path="/eastasia" element={<Worldcup country={country} />} />
                <Route path="/southeastaisa" element={<Worldcup country={country} />} />
                <Route path="/europe" element={<Worldcup contry={country} />} />
                <Route path="/ncsAmerica" element={<Worldcup contry={country} />} />

                <Route path="/board" element={<Board />} />
            </Routes>

        </BrowserRouter>
    );
};
export default MyRouters;
