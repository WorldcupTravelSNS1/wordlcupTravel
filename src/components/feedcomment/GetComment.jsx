import { Link } from "react-router-dom"
import { GetCommentQuery } from "../../reactqueries/CommentQuery"
import { BoardQueryById } from "../../reactqueries/BoardQueryById"
import PostComment from "./PostComment"



const GetComment = () => {


    return <>
        <div>
            <BoardQueryById />
            <Link to="/feed" className="feed-post-link">Go to Feed</Link>
        </div>
        <div>
            <PostComment></PostComment>
        </div>
        <GetCommentQuery />
    </>
}

export default GetComment