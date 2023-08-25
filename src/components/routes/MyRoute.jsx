import { Route, Routes } from "react-router"
import Feed from "../feed/Feed"
import FeedPost from "../feed/FeddPost"
import BlockedFeed from "../feed/FeedRestore"
import UpdateFeed from "../feed/FeedUpdate"
import GetComment from "../feedcomment/GetComment"
import { eastAsia } from "/wordcuptravel/wordlcupTravel/src/data/eastAsia.js"
import { southEastAsia } from "/wordcuptravel/wordlcupTravel/src/data/southEastAsia.js"
import { europe } from "/wordcuptravel/wordlcupTravel/src/data/europe.js"
import { ncsAmerica } from "/wordcuptravel/wordlcupTravel/src/data/ncsAmerica.js"
import Component from "../Component"
import EastAsia from "../../pages/worldcup/EastAsia"
import Europe from "../../pages/worldcup/Europe"
import SouthEastAsia from "../../pages/worldcup/SouthEastAsia"
import NcsAmerica from "../../pages/worldcup/NcsAmerica"


const MyRoute = () => {
    const data = {
        eastAsia,
        southEastAsia,
        europe,
        ncsAmerica
    };
    return <>
        <Routes>
            <Route path="/" element={<Component />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="feedPost" element={<FeedPost />} />
            <Route path="/feedrestore" element={<BlockedFeed />} />
            <Route path="/feedupdate" element={<UpdateFeed />} />
            <Route path="/comment" element={<GetComment />} />

            <Route path="/worldcup/europe" element={<Europe country={data.europe} />} />
            <Route path="/worldcup/eastasia" element={<EastAsia country={data.eastAsia} />} />
            <Route path="/worldcup/seasia" element={<SouthEastAsia country={data.southEastAsia} />} />
            <Route path="/worldcup/ncsamerica" element={<NcsAmerica country={data.ncsAmerica} />} />
        </Routes>
    </>
}

export default MyRoute