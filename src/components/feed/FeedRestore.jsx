import { useRecoilState, useRecoilValue } from "recoil"
import { feedGetState } from "../../atoms/BoardAtom"
import { Link } from "react-router-dom"
import './Feed.css'; // Feed 컴포넌트에 대한 스타일을 담은 CSS 파일을 불러옵니다.
import { me } from "../../atoms/MeAtom";
import { GetBlockedFeedData } from "../../reactqueries/BoardQueryRestore";

const BlockedFeed = () => {
    const [feedGet, SetFeedGet] = useRecoilState(feedGetState)


    const onChangeHandler = (e) => {
        const { name, value } = e.target
        SetFeedGet((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="feed-container">
            <div className="feed-search">
                <input name="title" value={feedGet.title || ""} onChange={onChangeHandler} placeholder="제목" />
                <input name="content" value={feedGet.content || ""} onChange={onChangeHandler} placeholder="내용" />
            </div>
            <div className="feed-pagination">
                <input name="pageNumber" value={feedGet.pageNumber} onChange={onChangeHandler} placeholder="페이지 번호" />
                <input name="pageSize" value={feedGet.pageSize} onChange={onChangeHandler} placeholder="페이지 사이즈" />
            </div>
            <Link to="/feed" className="feed-post-link">Go To Feed</Link>
            <GetBlockedFeedData />


        </div>
    );
}

export default BlockedFeed;