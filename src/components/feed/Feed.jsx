import { useRecoilState, useRecoilValue } from "recoil"
import { feedGetState } from "../../atoms/BoardAtom"
import { GetFeedData } from "../../reactqueries/BoardQuery"
import { Link } from "react-router-dom"
import './Feed.css'; // Feed 컴포넌트에 대한 스타일을 담은 CSS 파일을 불러옵니다.
import { me } from "../../atoms/MeAtom";
import { useQuery } from "react-query";

const Feed = () => {
    const [feedGet, SetFeedGet] = useRecoilState(feedGetState)


    const onChangeHandler = (e) => {
        const { name, value } = e.target
        SetFeedGet((prev) => ({ ...prev, [name]: value }))
    }

    const { refetch } = useQuery('todos')
    const onClickHandler = () => {
        refetch()
    }
    return (<>
        <div className="feed-container">
            <button className="button-main">여행지검색</button>
            <div className="feed-search">

                <input name="title"
                    value={feedGet.title || ""}
                    onChange={onChangeHandler}
                    placeholder="제목" />
                <input name="content"
                    value={feedGet.content || ""}
                    onChange={onChangeHandler}
                    placeholder="내용" />
                <input name="tema" value={feedGet.tema || ""} onChange={onChangeHandler} placeholder="테마" />
                <button className="button-main" onClick={onClickHandler}>Refetch</button>

            </div>
            <div className="feed-pagination">
                <input name="pageNumber" value={feedGet.pageNumber} onChange={onChangeHandler} placeholder="페이지 번호" />
                <input name="pageSize" value={feedGet.pageSize} onChange={onChangeHandler} placeholder="페이지 사이즈" />
            </div>


            <Link to="/feedpost" className="button-main">Go to Feed Post</Link>
            <Link to="/feedrestore" className="button-main">Go to Restore Feed</Link>
        </div>
        <GetFeedData />
    </>
    );
}

export default Feed;
