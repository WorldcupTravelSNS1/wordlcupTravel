import { useState } from "react";
import { apiNoToken, apiWithToken } from "../../network/api";
import './FeedPost.css';
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { me } from "../../atoms/MeAtom";


const FeedPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tema, setTema] = useState('');
    const [imageUrl, setImageUrl] = useState([]);
    const nav = useNavigate()
    const meData = useRecoilValue(me);
    if (!meData.isLogin) {
        nav("../feed")
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFeed = {
            memberId: meData.memberId,
            title,
            content,
            tema,
            imageUrl,
        };

        try {
            // 여기서 서버로 newFeed 데이터를 보내는 API 호출
            await apiWithToken('http://localhost:8080/api/v1/board', 'POST', newFeed, { "Authorization": meData.token });
            // 생성 완료 후 리다이렉트 
            nav("../feed")
        } catch (error) {
            // 에러 처리
            console.error('Error creating feed:', error);
        }
    };

    return (
        <div className="feed-post-container">
            <h2 className="feed-post-title">Create a New Feed</h2>
            <form className="feed-post-form" onSubmit={handleSubmit}>
                <div className="feed-post-input">
                    <label className="feed-post-label">Title:</label>
                    <input required type="text" className="feed-post-text-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="feed-post-input">
                    <label className="feed-post-label">Content:</label>
                    <textarea required className="feed-post-textarea" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="feed-post-input">
                    <label className="feed-post-label">Tema:</label>
                    <input required type="text" className="feed-post-text-input" value={tema} onChange={(e) => setTema(e.target.value)} />
                </div>
                <div className="feed-post-input">
                    <label className="feed-post-label">Image URLs (comma-separated):</label>
                    <input type="text" className="feed-post-text-input" value={imageUrl.join(',')} onChange={(e) => setImageUrl(e.target.value.split(','))} />
                </div>
                <button type="submit" className="feed-post-button">Create Feed</button>
            </form>
        </div>
    );
}

export default FeedPost
