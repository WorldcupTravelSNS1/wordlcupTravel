

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Worldcup from "../pages/worldcup/Worldcup";
import { world } from "../data/world"
import Component from "../components/Component";
import Board from "../pages/Board/Board";
import { eastAsia } from "../data/eastAsia";
import { southEastAsia } from "../data/southEastAsia"
import { europe } from "../data/europe"
import { ncsAmerica } from "../data/ncsAmerica"
import Europe from "../pages/worldcup/Europe";
import EastAsia from "../pages/worldcup/EastAsia";
import SouthEastAsia from "../pages/worldcup/SouthEastAsia";
import NcsAmerica from "../pages/worldcup/NcsAmerica";

const MyRouters = () => {
    const data = {
        world,
        eastAsia,
        southEastAsia,
        europe,
        ncsAmerica
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Component />} />
                <Route path="/board" element={<Board />} />
                <Route path="/worldcup" element={<Worldcup country={world} />} />
                <Route path="/worldcup/europe" element={<Europe country={data.europe} />} />
                <Route path="/worldcup/eastasia" element={<EastAsia country={data.eastAsia} />} />
                <Route path="/worldcup/seasia" element={<SouthEastAsia country={data.southEastAsia} />} />
                <Route path="/worldcup/ncsamerica" element={<NcsAmerica country={data.ncsAmerica} />} />
            </Routes>

        </BrowserRouter>
    );
};
export default MyRouters;
