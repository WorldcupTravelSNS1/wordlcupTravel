import { Route, Routes } from "react-router"
import Feed from "../feed/Feed"
import FeedPost from "../feed/FeddPost"
import BlockedFeed from "../feed/FeedRestore"
import UpdateFeed from "../feed/FeedUpdate"


const MyRoute = () => {
    return <>
        <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="worldcup" />
            <Route path="/main" />
            <Route path="feedPost" element={<FeedPost />} />
            <Route path="/feedrestore" element={<BlockedFeed />} />
            <Route path="/feedupdate" element={<UpdateFeed />} />

        </Routes>
    </>
}

export default MyRoute